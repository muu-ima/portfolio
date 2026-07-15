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

Next.js 側は、WordPress からの同期リクエストを受けてプロフィール行を作成し、編集トークン付き URL と公開 URL を返します。プロフィール更新時は、URL に含まれるトークンをハッシュ照合してから保存します。

## Flow

1. WordPress 管理画面でカード code を発行する
2. 公開時に Next.js API へ同期し、プロフィールデータを作成する
3. Next.js から返った編集 URL と公開 URL を WordPress 側に保存する
4. NFC / QR から `/n/{code}` にアクセスする
5. active の場合は公開プロフィールへリダイレクトする
6. disabled の場合は停止中ページを表示する
7. 編集 URL からプロフィールを更新し、公開ページへ反映する

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
- 発行済み URL を二重発行しないようにすること
- 必要なときだけ URL を再発行できるようにすること
- 編集 URL のトークンを安全に扱うこと
- active / disabled の切り替えを、実際のリダイレクト挙動へ反映すること
- WordPress、Next.js、Supabase の責務を分けること
- 管理画面では運用しやすく、表側ではシンプルな URL に見せること

## Relationship With CardCraft

CardCraft が「名刺のデザインと入稿データ」を作る場所で、nfc-redirect が「配った後のリンク先」を管理する場所です。

商品としては、名刺デザイン、NFC / QR、プロフィール更新、公開停止をセットで扱う構想でした。物理カードを配った後でも、プロフィールや案内先を直せるところが狙いです。

## Portfolio Page Notes

ポートフォリオ側では、表に見える UI よりも、次の点を伝えると価値が出やすいです。

- 配布後もリンク先を変えられること
- WordPress 側で発行と停止を管理していること
- Next.js と Supabase でプロフィール編集を分離していること
- code と slug を分けていること
- CardCraft とセットの商品構想だったこと

## Assets

- `public/downloads/nfc-redirect-overview.pptx`
- `public/downloads/pastel-link.pptx`
