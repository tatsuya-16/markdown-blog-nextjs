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

## 前提
- Ubuntu バージョン: 24.04
- お名前.comでドメイン取得済み

# npm，node.js，nginxのインストール
```bash
sudo apt install -y npm nodejs nginx
```

# Next.jsアプリのGitリポジトリのクローン，ビルド
```bash
git clone [リポジトリURL]
cd [クローンしたリポジトリのディレクトリ]
npm install
npm run build
npm start
```
.env等の.gitignoreしたファイルを作成するのを忘れないように．
エラーが発生した場合，内容をサーバ側から閲覧できないため，ローカルで確認．

# nginxの設定
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
4. 設定をテストし，`test is successful` を確認
```bash
sudo nginx -t
```
5. Nginxを再起動
```bash
sudo systemctl restart nginx
```

## nginxの起動，再起動に失敗した場合
```bash
sudo nginx -t
```
`test failed`場合，設定ファイル (.conf)に誤りがある．

```bash
sudo systemctl status nginx.service
```
エラーログに，`still could not bind()` とある場合，他のプロセスがポートを占有している．


# PM2のインストール，アプリの起動
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

# UbuntuサーバのグローバルIPアドレスを確認
```bash
curl ifconfig.me
```
# ドメインのネームサーバ，DNSの設定
以下，お名前.comの場合，
### ネームサーバの設定
1. お名前.com NAVIにログイン
2. ネームサーバー -> ネームサーバー設定
3. 対象ドメインがお名前.comのネームサーバーを使う設定になっているか確認

# DNS設定

1. お名前.com NAVIにログイン
2. ネームサーバー -> ドメインDNS設定
3. ドメイン名を選択 -> 次へ -> DNSレコード設定を利用する
4. Aレコードを設定
   - ホスト名: 任意
   - タイプ： A
   - TTL: 任意 (初期値: 3600)
   - VALUE: UbuntuサーバのグローバルIPアドレス
5. 追加 -> 確認画面へ進む -> 設定する

http://[ドメイン名]で接続を確認．
アクセスできない場合，ファイアウォールやルータのセキュリティ，ポート変換の設定を確認．

# Let's EncryptでSSL設定 （HTTPS化）
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
Failedの場合は，ファイアウォールやルータのセキュリティ設定を確認．

3. SSL証明書の自動更新の設定
```bash
sudo systemctl enable certbot.timer
```

最後に，https://[ドメイン名]にアクセスして接続を確認．

# デプロイの自動化
Webhookを使ってデプロイを自動化する．

## デプロイ用シェルスクリプトの作成
```sh
cd "$(dirname "$0")"

echo "Deploying markdown-blog-nextjs..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building the project..."
npm run build

echo "Restarting the application with PM2..."
pm2 restart markdown-blog-nextjs
```

## Webhookリスナーの作成
Githubからのリクエストを受け取るサーバを作成する．
1. 必要なライブラリをインストール
```
npm install http github-webhook-handler
```
2. Webhookリスナーを作成
```js
const http = require('http');
const { exec } = require('child_process');

// GitHub Webhook ハンドラーをインポート
const createHandler = require('github-webhook-handler');

// GitHubで設定するシークレットキー
const SECRET_KEY = 'your_very_secret_key'; 
// Listenするポート (空きポート)
const PORT = 7777; 
// 実行するデプロイスクリプトの絶対パス
const DEPLOY_SCRIPT_PATH = '/path/to/your/deploy.sh'; 

const handler = createHandler({ path: '/webhook', secret: SECRET_KEY });

http.createServer((req, res) => {
  handler(req, res, (err) => {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(PORT, () => {
  console.log(`Webhook listener running on port ${PORT}`);
});

// エラー処理
handler.on('error', (err) => {
  console.error('Error:', err.message);
});

// push イベントの処理
handler.on('push', (event) => {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);

  // 公開用ブランチへのプッシュかどうかを確認（例: main）
  if (event.payload.ref === 'refs/heads/main') {
    console.log('Push to main branch detected. Running deploy script...');

    // デプロイスクリプトを実行
    exec(DEPLOY_SCRIPT_PATH, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }
});
```
3. PM2で起動する（名前は任意）
```bash
pm2 start webhook-listener.js --name webhook-listener
```

## Githubの設定
1. 該当リポジトリのSettings＞Webhooksに移動
2. Add webhooksをクリック
3. Payload URLに，webhookリスナーのURLを入力
e.g., `http://YOUR_SERVER_IP_OR_DOMAIN:7777/webhook`
4. Content typeを`application/json`に設定
5. Secretに`webhook-listener.js`の`SECRET_KEY`に設定した文字列を設定
6. SSL verificationを`Enable SSL verification`に設定
7. Which events would you like to trigger this webhook?を`Just the push event`に設定
8. Add webhookボタンをクリックして設定完了

上記の手順を完了すると，該当ブランチにpushされた際に自動でデプロイが実行される．
GithubのWebhook設定ページにてRecent Deliveriesで`200 OK`になっていれば成功．
うまくいかない場合は，ファイアウォールやルータのポート変換ルールを確認．