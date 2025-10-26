cd "$(dirname "$0")"

git pull orgin main

npm install

rpm run build

pm2 restart markdown-blog-nextjs