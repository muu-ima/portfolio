# kobutsu-ledger-system

## Overview

kobutsu-ledger-system は、古物台帳、仕入れ管理、EC販売、為替、ペイメント、Shopee オーダーをひとつの業務画面で扱うための開発中システムです。

既存の横長スプレッドシート運用をいきなり壊さず、入力、確認、更新を少しずつ Web 化する方針で作っています。WordPress を台帳データと管理権限のバックエンド、Next.js を日常入力に使うフロントエンドとして分けています。

## Main Features

- 古物台帳の一覧、検索、編集
- 受入れ / 払出し / 相手方・本人確認の整理
- 仕入れ管理の入力、反映
- EC販売の集計ビュー
- 為替レート管理
- ペイメント明細管理
- Shopee オーダー CSV の取り込み設計
- ステータスフィルター
- 横長テーブルのドラッグスクロール
- WordPress 管理画面ベースのデータ管理
- Next.js 側のワークスペース UI
- REST API とカスタムテーブルによるデータ連携

## Architecture

システムは、WordPress と Next.js の役割を分けています。

- WordPress: 管理権限、REST API、カスタムテーブル、データ保存
- WordPress plugin: 古物台帳用 API、保存処理、CSV 取り込みの土台
- WordPress theme: Vercel / Next.js を表示する薄いシェル
- Next.js: 日常入力用のワークスペース UI
- MySQL: 台帳、仕入れ、販売、ペイメント、為替などの保存先

WordPress は裏側のデータ置き場として使い、Next.js は普段触る画面として使います。管理権限や既存の WordPress 運用を活かしつつ、入力画面は Next.js 側で自由に作れる構成です。

## Data Model

古物台帳として必要な情報だけでなく、EC販売や海外発送に必要な情報もつながるようにしています。

- `suppliers`: 仕入先マスタ
- `supplier_sources`: 仕入れ管理の原票
- `items`: SKU 単位の商品
- `purchases`: 古物台帳の受入れ
- `sales`: 古物台帳の払出し、販売、配送
- `sales_settlements`: EC販売の精算、手数料、損益
- `payment_transactions`: Shopee / Payoneer などの支払明細
- `exchange_rates`: 日別の為替レート
- `import_batches`: CSV 取込履歴

特に `supplier_sources` は、日々の入力と修正の正本として扱います。そこから商品、仕入れ、販売へ補助同期し、既存シートに近い運用感を保ちながら、少しずつデータ構造を整理しています。

## Workspace UI

ワークスペース UI は、カード型のダッシュボードではなく、横長テーブルを中心にしています。

既存運用がスプレッドシートに近いため、一覧性と編集しやすさを優先しています。古物台帳、仕入れ管理、EC販売で、検索、フィルター、ページネーション、ドラッグスクロールの操作感を揃えています。

## Handling Areas

### 古物台帳

受入れ、払出し、相手方・本人確認をタブで分け、SKU、商品名、仕入先、販売先を検索できる横長テーブル UI にしています。

### 仕入れ管理

仕入れ元データと仕入れ表への反映を同じ操作感で扱います。新規仕入れフォーム、発送・梱包情報、原票情報を段階的に整理しています。

### EC販売

販売額、送料、手数料、為替、損益を確認する集計ビューです。Shopee や決済明細との接続を見据えています。

### 為替・ペイメント

販売時レート、出金時レート、Payout、手数料明細を分けて扱い、過度に自動計算しすぎない段階的な設計にしています。

## Technical Challenges

- 既存の横長スプレッドシート運用を壊さずに Web 化すること
- 古物台帳、仕入れ、販売、決済、為替を同じ業務導線でつなぐこと
- 法定台帳に必要な項目と、EC運用に必要な項目を分けて扱うこと
- CSV 原票をそのまま正解にせず、安定して使う業務モデルへ整理すること
- WordPress 管理画面と Next.js ワークスペースの編集内容を同期すること
- テーブル UI の密度を保ちながら、検索、フィルター、ページネーションを入れること
- Shopee orders / payments の列揺れや金額表記の揺れを吸収すること
- 未完成の機能を残しつつ、実運用に近い画面まで作り込むこと

## Good Points

- 既存のスプレッドシート運用を読み解き、Web 化する順番を整理できている
- 古物台帳だけでなく、仕入れ、販売、為替、ペイメントまで業務全体で見ている
- WordPress をデータと権限の置き場、Next.js を操作画面として分けた構成が現実的
- カード型の見た目に寄せず、横長テーブルを中心にした判断が業務用途に合っている
- `supplier_sources` を正本にするなど、どのデータを基準にするかを設計できている
- Shopee orders / payments を原票として扱い、後から確定同期できる余地を残している
- 検索、フィルター、ページネーション、ドラッグスクロールまで入っていて、画面として触れる段階まで来ている
- 未完成でも、業務整理、DB設計、UI設計、連携設計がそろっている

## Current Value

完成品として販売できる段階ではありませんが、業務設計としての価値はかなりあります。

特に、古物台帳だけでなく、仕入れ管理、EC販売、為替、ペイメント、Shopee 原票まで同じ流れに入れようとしている点が強いです。単発の CRUD ではなく、現場のシート運用を読み解いて、どこを正本にするか、どこを補助同期にするかまで考えたシステムです。

## Portfolio Page Notes

ポートフォリオ側では、次の点を中心に見せると伝わりやすいです。

- WordPress と Next.js を分けた業務システムであること
- 横長スプレッドシート運用を Web 化していること
- 古物台帳だけでなく、EC販売や為替までつないでいること
- UI は派手さよりも業務の見やすさを優先していること
- 未完成でも、設計と実装の到達点が高いこと

## Assets

- `public/screenshots/kobutsu-ledger-system/ledger.png.png`
- `public/screenshots/kobutsu-ledger-system/ledger-list-redacted.png`
- `public/screenshots/kobutsu-ledger-system/ledger-edit-redacted.png`
- `public/screenshots/kobutsu-ledger-system/ec-sales-redacted.png`
- `public/screenshots/kobutsu-ledger-system/exchange-rates-redacted.png`
- `public/screenshots/kobutsu-ledger-system/shopee-orders-redacted.png`
- `public/screenshots/kobutsu-ledger-system/ledger-system-5.png`
