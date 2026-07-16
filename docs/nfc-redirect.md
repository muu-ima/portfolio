# nfc-redirect

## Overview

nfc-redirect は、NFC / QR 名刺に入れるリンクを、配布後も差し替えられるようにするリダイレクト管理システムです。

見た目のアプリというより、WordPress 側でカードの発行、公開、停止、URL 再発行を管理し、Next.js 側でプロフィール編集と公開ページを受け持つバックエンド寄りの仕組みです。CardCraft と組み合わせて、名刺を作るところから、配布後のリンク運用までつなげる想定でした。

## Main Features

- NFC / QR に入れる固定 code の発行
- 公開ページ用 slug の管理
- WordPress 管理画面でのカード発行
- active / disabled の公開状態管理
- 停止中カード用ページの表示
- Next.js 側プロフィールデータの作成
- 編集用 URL と公開 URL の保存
- 編集用 URL のトークン管理
- URL コピー、URL 再発行
- `/n/{code}` から公開プロフィールへリダイレクト
- Supabase のプロフィール DB との連携

## Architecture

nfc-redirect は、WordPress、Next.js、Supabase の役割を分けています。

- WordPress: カード発行、公開状態、管理画面、`/n/{code}` の入口
- Next.js: プロフィール作成 API、編集画面、公開プロフィール
- Supabase: プロフィールデータと編集トークンの保存

WordPress 側は `pastel-wp` の `plugins/nfc-redirect` プラグインで制御しています。カードごとの code、公開状態、編集 URL、公開 URL を管理し、発行時に Next.js API へ同期します。

Next.js 側は、WordPress からの同期リクエストを受けてプロフィール行を作成し、Vercel 上の公開パスと編集パスを生成します。生成したプロフィール情報と編集トークンのハッシュを Supabase に保存し、編集トークン付き URL と公開 URL を WordPress 側へ返します。プロフィール更新時は、URL に含まれるトークンをハッシュ照合してから保存します。

単体のアプリではなく、WordPress サーバー、Next.js サーバー、Supabase をまたいで状態をつなぐ構成です。発行状態、公開 URL、編集 URL、プロフィールデータが別々の場所にあるため、それぞれの責務を分けつつ、必要なタイミングで同期する必要がありました。

## Glossary

- `Supabase`: プロフィール情報と編集トークンの hash を保存するデータ倉庫
- `Next.js`: プロフィール作成 API、編集画面、公開ページ、保存 API を担当するアプリ本体
- `WordPress`: NFC code の発行、URL 確認、公開状態、運用管理を行う管理ダッシュボード
- `code`: NFC / QR に入れる固定番号。発行後に変えない軸
- `public_url`: 利用者が見る公開プロフィール URL
- `edit_url`: 編集者だけが使う編集用 URL
- `token`: edit_url に含める編集キー。DB にはそのまま保存せず、hash 化した値だけを保存
- `hash`: token を元に戻せない形へ変換した照合用データ

## Issue Flow

1. WordPress 管理画面でカード code を発行する
2. 公開時に Next.js API へ同期し、プロフィールデータを作成する
3. Next.js / Vercel 側で公開パスと編集パスを生成する
4. プロフィール情報と編集トークンのハッシュを Supabase に保存する
5. Next.js から返った編集 URL と公開 URL を WordPress 側に保存する
6. NFC / QR から `/n/{code}` にアクセスする
7. active の場合は公開プロフィールへリダイレクトする
8. disabled の場合は停止中ページを表示する
9. 編集 URL からプロフィールを更新し、公開ページへ反映する

## Edit Flow

1. 編集者が `edit_url` にアクセスする
2. ブラウザから Next.js の編集画面を開く
3. Next.js 側で URL の token を取得する
4. token を sha256 で hash 化する
5. Supabase に保存済みの hash と比較する
6. 一致すれば編集を許可し、不一致なら 403 を返す
7. 保存 API からプロフィール情報を更新する

編集用 token は一度限りの編集キーに近い役割です。DB には token そのものではなく hash のみを保存するため、保存先から編集キーを直接復元できない構成にしています。

## Design Rules

### code は変えない番号

NFC / QR に焼き込む code は、カードごとの固定番号として扱います。発行後に公開 URL の見せ方やプロフィール名が変わっても、カードとプロフィールの紐づきは保ちます。

### slug は見せる URL

slug は人が読みやすい公開 URL 用の値です。プロフィール名や見せ方に合わせて、後から調整できる余地を残しています。

### WordPress 側で発行と停止を管理

WordPress 側の管理画面で、カードごとの公開状態を扱います。active なら公開プロフィールへ進み、disabled なら停止中ページを表示するため、配布済みカードでも運用側で止められます。

### Next.js はプロフィール編集を担当

Next.js 側は、プロフィール作成、編集、公開ページ表示を担当します。カード管理とプロフィール DB の間をつなぐ役割です。

## Technical Challenges

- 配布済みカードの code を変えずに、公開先だけ更新できるようにすること
- WordPress 側の公開状態と Next.js 側のプロフィール状態を同期すること
- 複数サーバー間で、発行状態、公開 URL、編集 URL、プロフィールデータをやり取りすること
- Next.js / Vercel 側で生成した公開パスと編集パスを、Supabase 保存と WordPress 側の管理情報へつなぐこと
- 自家製 WordPress プラグインで、CPT、管理画面、メタ情報、発行処理、停止処理をまとめて扱うこと
- 発行済み URL を二重発行しないようにすること
- 必要なときだけ URL を再発行できるようにすること
- 編集 URL のトークンを安全に扱うこと
- token をそのまま保存せず、hash 化して照合する編集認証にすること
- active / disabled の切り替えを、実際のリダイレクト挙動へ反映すること
- WordPress、Next.js、Supabase の責務を分けること
- 管理画面では運用しやすく、表側ではシンプルな URL に見せること

## Good Points

- 配布済みの NFC / QR カードを無駄にせず、後から案内先を更新できる
- code と slug を分けており、変えない軸と見せる URL を整理できている
- WordPress 側で発行、停止、再発行を扱えるため、運用担当者が管理しやすい
- 自家製 WordPress プラグインで、カード発行から URL 保存、停止管理まで制御している
- WordPress、Next.js、Supabase の複数サーバー構成を役割分担してつなげている
- Vercel 上で生成した公開 URL / 編集 URL を Supabase と WordPress の両方に接続している
- active / disabled の状態をリダイレクト挙動に反映できている
- 編集 URL と公開 URL を分け、公開ページと管理導線を混ぜない設計になっている
- 編集 token は hash 保存にして、URL を知っている人だけが編集できる導線にしている
- Next.js と Supabase を使い、プロフィール編集と保存を WordPress 本体から分離している
- CardCraft と組み合わせることで、物理カードと Web プロフィールをつなぐ商品構想になっている

## Relationship With CardCraft

CardCraft が「名刺のデザインと入稿データ」を作る場所で、nfc-redirect が「配った後のリンク先」を管理する場所です。

商品としては、名刺デザイン、NFC / QR、プロフィール更新、公開停止をセットで扱う構想でした。物理カードを配った後でも、プロフィールや案内先を直せるところが狙いです。

## Portfolio Page Notes

ポートフォリオ側では、表に見える UI よりも、次の点を伝えると価値が出やすいです。

- 配布後もリンク先を変えられること
- WordPress 側で発行と停止を管理していること
- 自家製 WordPress プラグインで、発行、停止、再発行、URL 保存を制御していること
- WordPress、Next.js、Supabase をまたいで状態を同期していること
- Vercel 側で生成した公開パスと編集パスを、Supabase 保存と WordPress 管理画面へつなげていること
- Next.js と Supabase でプロフィール編集を分離していること
- code と slug を分けていること
- CardCraft とセットの商品構想だったこと

## Assets

- `public/downloads/nfc-redirect-overview.pptx`
- `public/downloads/pastel-link.pptx`
