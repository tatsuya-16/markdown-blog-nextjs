---
title: Next.jsアプリをUbuntuサーバにデプロイ
slug: Ubuntu_nextjs
tags:
  - Ubuntu
  - Next.js
  - デプロイ
author: Tatsuya Abe
abstract: Next.jsアプリをUbuntuサーバにデプロイする．
date: '2025/2/12'
image: https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/blogThumbnail//nextjs.svg
---

### 前提
- Ubuntu バージョン: 24.04
- お名前.comでドメイン取得済み

## npm，node.js，nginxのインストール
```bash
sudo apt install -y npm nodejs nginx
```

## Next.jsアプリのGitリポジトリのクローン，ビルド
```bash
git clone [リポジトリURL]
cd [クローンしたリポジトリのディレクトリ]
npm install
npm run build
npm start
```
.env等の.gitignoreしたファイルを作成するのを忘れないように．
エラーが発生した場合，内容をサーバ側から閲覧できないため，ローカルで確認．

## nginxの設定
[nginx](https://nginx.org/en/): webサーバソフトウェア
参考: [初心者でも10分で分かるnginxの役割と使い方](https://qiita.com/riita10069/items/5d36dfeb756e3b6c4978)
1. 設定ファイルの作成
```bash
sudo vim /etc/nginx/sites-available/[任意の名前]
```
2. 以下の設定を記述
```
server {
    listen 80;
    server_name [ドメイン名];

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
3. 設定を有効にする
```bash
sudo ln -s /etc/nginx/sites-available/[任意の名前] /etc/nginx/sites-enabled/
```
4. 設定をテストし，"test is successful" を確認
```bash
sudo nginx -t
```
5. Nginxを再起動
```bash
sudo systemctl restart nginx
```

## PM2のインストール，アプリの起動
PM2: Node.js用のプロセスマネージャ
参考: [OpenStandia PM2](https://openstandia.jp/oss_info/pm2/)

1. pm2をインストール
```bash
sudo npm install -g pm2
```
2. Next.jsのアプリのディレクトリに移動し，pm2で起動
```bash
cd /var/www/myapp  # Next.jsアプリのディレクトリに移動
npm install
npm run build
pm2 start npm --name "[任意の名前]" -- start
pm2 save
pm2 startup
```
3. アプリが起動していることを確認
```bash
pm2 list
```

## UbuntuサーバのグローバルIPアドレスを確認
```bash
curl ifconfig.me
```
## ドメインのネームサーバ，DNSの設定
以下，お名前.comの場合，
### ネームサーバの設定
1. お名前.com NAVIにログイン
2. ネームサーバー -> ネームサーバー設定
3. 対象ドメインがお名前.comのネームサーバーを使う設定になっているか確認

### DNS設定

1. お名前.com NAVIにログイン
2. ネームサーバー -> ドメインDNS設定
3. ドメイン名を選択 -> 次へ -> DNSレコード設定を利用する
4. Aレコードを設定
   - ホスト名: 任意
   - タイプ： A
   - TTL: 任意 (初期値: 3600)
   - VALUE: UbuntuサーバのグローバルIPアドレス
5. 追加 -> 確認画面へ進む -> 設定する

## Let's EncryptでSSL設定 （HTTPS化）
Let's Encrypt: 証明書認証局
参考: [無料SSL証明書のLet’s Encryptとは？](https://ssl.sakura.ad.jp/column/letsencrypt/)

1. Certbotのインストール
```bash
sudo apt install -y certbot python3-certbot-nginx
```
2. SSL証明書を取得
```bash
sudo certbot --nginx -d [ドメイン名]
```
Failedの場合は，ファイアウォールやルータの設定を確認．

3. SSL証明書の自動更新の設定
```bash
sudo systemctl enable certbot.timer
```

最後に，https://[ドメイン名]にアクセスして接続を確認．