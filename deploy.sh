cd "$(dirname "$0")"

echo "Deploying markdown-blog-nextjs..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building the project..."
npm run build

echo "Restarting the application with PM2..."
pm2 restart markdown-blog-nextjs