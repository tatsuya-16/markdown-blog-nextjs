---
title: Ubuntuのセットアップ
slug: Ubuntu_setup
tags:
  - Ubuntu
  - セットアップ
author: Tatsuya Abe
abstract: Ubuntuのセットアップ
date: '2025/2/11'
image: https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/blogThumbnail//ubuntu.svg
---
Ubuntu バージョン: 24.04

## 日本語入力の設定
1. ターミナルを開き，以下のコマンドを実行
```bash
sudo apt update
sudo apt install ibus-mozc
sudo reboot
```
2. 再起動後，Settings -> Keyboard -> Input Sources からJapanese(Mozc)を追加

## Google Chromeのインストール
1. [Google Chrome公式サイト](https://www.google.com/intl/ja_jp/chrome/)から.debファイルをダウンロード
2. ターミナルを開き，以下のコマンドを実行
```bash
sudo apt install ~/Downloads/google-chrome-stable_current_amd64.deb
```

## Gitのインストール
1. ターミナルを開き，以下のコマンドを実行
```bash
sudo apt install git
```
2. ユーザ名，メールアドレスの設定
```bash
git config --global user.name [Your Name]
git config --global user.email [Your.email@example.com]
```

## Visual Studio Codeのインストール
1. [VSCode公式サイト](https://code.visualstudio.com/download)から.debファイルをダウンロード
2. ターミナルを開き，以下のコマンドを実行
```bash
sudo apt install ~/Downloads/code_1.97.0-1738713410_amd64.deb
```