---
title: Flutter iOSアプリでのMicrosoft Entra ID認証実装
slug: flutter_ios_entraid
tags:
  - Flutter
  - iOS
  - Entra ID
author: Tatsuya Abe
abstract: iOSアプリにて，Microsoft Entra IDを用いたユーザ認証とアクセストークンの取得
date: '2025/11/9'
image: https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/blogThumbnail//flutter.svg
---
# 概要
iOSアプリにて，Azure Entra IDを用いた認証をFlutterで実装する．
[MSAL Auth](https://pub.dev/packages/msal_auth)ライブラリを用いて，PCA (Public Cliant Application)の認証機能とアクセストークン取得を実装する．

# バージョン情報
```
Flutter 3.29.3
msal_auth: 3.3.0
```