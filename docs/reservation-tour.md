# reservation-tour

## Overview

reservation-tour は、見学予約の受付、カレンダー表示、確認メール、スタッフ通知、未確認予約の自動キャンセル、WordPress への副本同期まで扱う予約管理システムです。

フロントエンドを Next.js、予約処理を Laravel、外部の副本保存先を WordPress REST API として分けています。既存の WordPress 運用を残しながら、予約の中枢は Laravel 側で管理する構成です。

## Portfolio Position

単なる予約フォームではなく、予約業務の一連の流れをフルスタックで作ったプロジェクトとして見せます。

- 予約UI
- カレンダーと空き枠
- 26日ルールによる予約枠の公開制御
- 管理画面
- 仮予約、確認メール、確定
- スタッフ通知
- 自動キャンセル
- WordPress副本同期
- Docker / Vercel / Render 想定
- ポートフォリオ用デモモード

## Main Features

- 最短空き枠の自動表示
- 月別予約カレンダー
- AM / PM の時間帯予約
- 26日ルールに沿った翌月予約枠の公開制御
- 予約作成フォーム
- 署名付きURLによる確認メール
- スタッフ通知メール
- 未確認予約の自動キャンセル
- BOOKED から DONE への自動更新
- 予約停止日、開放日の管理
- 予約一覧、状態更新、削除を行う管理画面
- WordPress REST API への副本同期

## Architecture

- Next.js: 予約UI、カレンダー、デモモード
- Next.js Admin: 予約一覧、フィルター、状態更新、受付可否管理
- Laravel: 予約API、検証、メール、状態管理、WordPress同期Job
- PostgreSQL: 予約データ保存想定
- WordPress: 副本DB、既存CMS運用との接続先
- Vercel: フロントエンド公開
- Render: Laravel backend 運用想定
- Docker: ローカル開発環境

## Demo Mode

ポートフォリオ用に、backend / DB / reCAPTCHA / メール送信なしで触れるデモモードを追加しています。

```env
NEXT_PUBLIC_DEMO_MODE=true
```

デモ版では、サンプル予約データを使って最短空き枠とカレンダーを表示し、フォーム送信もブラウザ内で成功扱いにします。実際の予約、メール送信、DB保存、WordPress同期は行いません。

## Good Points

- 予約受付から通知、確認、同期まで業務フローとして設計している
- 26日ルールのような施設運用上の解禁タイミングを、予約可能日の制御として実装している
- 管理画面で予約一覧、ステータス更新、日別の受付ON / OFFを扱える
- WordPress を副本DBとして扱い、既存CMS運用と独立アプリをつなげている
- Laravel 側に予約状態管理を寄せ、フロントエンドを入力と表示に集中させている
- デモモードにより、backendを常時稼働しなくてもポートフォリオで動作を見せられる
- 初期プロジェクトながら、フロント、バック、DB、メール、外部API、デプロイまで触っている

## Portfolio Copy

```txt
Next.js / Laravel / WordPress REST API を用いた見学予約システム。
予約受付、26日ルールによる予約枠の公開制御、メール確認、スタッフ通知、未確認予約の自動キャンセルに加え、WordPressへの副本同期にも対応。
既存CMS運用と独立した予約基盤を連携させる構成で実装しました。
```

## Demo Note

```txt
※ デモ版のため、実際の予約・メール送信・DB保存は行われません。
```

## Assets

- `public/screenshots/reservation-tour/top.png`
