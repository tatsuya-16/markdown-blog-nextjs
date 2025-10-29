---
title: Flutterの開発環境構築 for Mac
slug: flutter_env
tags:
  - Flutter
author: Tatsuya Abe
abstract: Flutterの環境構築をする (Mac Apple Silicon M2)
date: '2025/3/21'
image: https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/blogThumbnail//flutter.svg
---
# Android Studioのダウンロード，インストール
1. [Android Developers](https://developer.android.com/studio?hl=ja)のサイトからダウンロード．
2. インストールし，Android Studioを開く．
3. 任意の設定で進む (筆者はInatall TypeにてStandardを選択)．
4. Licencse AgreementにてAcceptを選択し，Finishを押すとコンポーネントのダウンロードが始まる．
5. Welcome to Android Studioの画面にて，Pulginタブを開き，「Flutter」を検索してダウンロードし，再起動．

# Xcodeのインストール
1. [Apple Developer](https://developer.apple.com/jp/xcode/)のサイトまたはApp Storeからインストール．

# Flutter SDKのインストール
1. [Flutter](https://flutter-ko.dev/get-started/install/macos)のサイトから，SDKをダウンロード．
2. zipファイルを解凍．
3. Appleシリコンの場合，以下を実行．
```sh
sudo softwareupdate --install-rosetta --agree-to-license
```

## パスの設定
1. ホームディレクトリの下にflutter_sdkディレクトリを作成し，その下に解凍したファイルを配置する．
2. ターミナルで /flutter_sdk/flutter/bin まで移動し，pwdコマンドで絶対パスを取得してコピー．
```sh
% cd flutter_sdk
flutter_sdk % ls
flutter
flutter_sdk % cd flutter
flutter % ls
AUTHORS			PATENT_GRANT		docs
CHANGELOG.md		README.md		engine
CODEOWNERS		TESTOWNERS		examples
CODE_OF_CONDUCT.md	analysis_options.yaml	flutter_console.bat
CONTRIBUTING.md		bin			flutter_root.iml
DEPS			dartdoc_options.yaml	packages
LICENSE			dev			version
flutter % cd bin
bin % pwd
/Users/[user name]/flutter_sdk/flutter/bin
```
以下，zshの場合，
3. エディタで.zshrcを開く
```sh
open -e ~/.zshrc
```
4. 以下を記述．$PATH: 以降はコピーしておいたパスをペースト．
```sh
# Flutter SDK path
export PATH="$PATH:/Users/[user name]/flutter_sdk/flutter/bin"
```
5. ターミナルで以下を実行し，変更を反映．
```sh
source ~/.zshrc
```
6. 以下のコマンドで，パスが通っているか確認．
```sh
which flutter
```
Flutterの実行ファイルのパスが帰ってこればOK．

# Flutter環境の確認
1. ターミナルで以下を実行．
```sh
flutter doctor
```
筆者の場合，以下の実行結果となった．
```sh
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 3.29.2, on macOS 14.6.1 23G93 darwin-arm64, locale ja-JP)
[!] Android toolchain - develop for Android devices (Android SDK version 35.0.1)
    ✗ cmdline-tools component is missing
      Run `path/to/sdkmanager --install "cmdline-tools;latest"`
      See https://developer.android.com/studio/command-line for more details.
    ✗ Android license status unknown.
      Run `flutter doctor --android-licenses` to accept the SDK licenses.
      See https://flutter.dev/to/macos-android-setup for more details.
[!] Xcode - develop for iOS and macOS (Xcode 16.0)
    ✗ Unable to get list of installed Simulator runtimes.
    ✗ CocoaPods not installed.
        CocoaPods is a package manager for iOS or macOS platform code.
        Without CocoaPods, plugins will not work on iOS or macOS.
        For more info, see https://flutter.dev/to/platform-plugins
      For installation instructions, see https://guides.cocoapods.org/using/getting-started.html#installation
[✓] Chrome - develop for the web
[✓] Android Studio (version 2024.3)
[✓] VS Code (version 1.97.2)
[✓] Connected device (3 available)            
[✓] Network resources

! Doctor found issues in 2 categories.
```
発生した問題を下記手順で解決していく．
## Android SDK コマンドラインツールのインストール
以下の解決手順．
```sh
✗ cmdline-tools component is missing
Run `path/to/sdkmanager --install "cmdline-tools;latest"`
See https://developer.android.com/studio/command-line for more details.
```
1. Android Studioを開き，「More Actions」または右上の︙から，「SDK Manager」を開く．
2. 「SDK Tools」タブから「Android SDK Command-line Tools (latest)」を選択し，インストール．

## Android SDK ライセンスの承認
以下の解決手順．
```sh
✗ Android license status unknown.
Run `flutter doctor --android-licenses` to accept the SDK licenses.
See https://flutter.dev/to/macos-android-setup for more details.
```
1. ターミナルで以下を実行．何度か"y"を入力し，ライセンスを承認．
```sh
flutter doctor --android-licenses
```

## シミュレータのインストール
以下の解決手順．
```sh
✗ Unable to get list of installed Simulator runtimes.
```
1. Xcodeを開く．
2. 左上のメニューにて，Xcode > settingのComponentsタブから，macOSとiOSをインストール (macOSは既にbuild-inの可能性あり)．

## CocoaPodsのインストール
以下の解決手順．
```sh
✗ CocoaPods not installed.
    CocoaPods is a package manager for iOS or macOS platform code.
    Without CocoaPods, plugins will not work on iOS or macOS.
    For more info, see https://flutter.dev/to/platform-plugins
For installation instructions, see https://guides.cocoapods.org/using/getting-started.html#installation
```
CocoaPods: iOS開発向けのライブラリ管理ツール．

1. 以下のコマンドを実行．
```sh
sudo gem install cocoapods
```
全て Successfully installed の場合，成功．

以下のようなエラーが発生する場合，Rubyのバージョンを上げる必要がある．
```sh
... requires Ruby version >= 3.1.0. The current ruby version is 2.6.10.210.
```

### rbenvのインストール
1. 以下のコマンドを実行．Homebrewが未インストールの場合は[こちら](https://brew.sh/ja/)．
```sh
brew install rbenv
```
2. インストール可能なバージョンを確認．
```sh
rbenv install -l

3.1.6
3.2.7
3.3.7
3.4.2
jruby-9.4.12.0
mruby-3.3.0
picoruby-3.0.0
truffleruby-24.2.0
truffleruby+graalvm-24.2.0
```
3. 適切なバージョンをインストール．
```sh
rbenv install 3.4.2
```
4. インストールしたバージョンをアクティブにする．
```sh
rbenv global 3.4.2
```
5. バージョンを確認．
```sh
ruby -v
```
インストールしたバージョンが反映されていればOK．

#### 反映されていない場合，
1. エディタで.zshrcを開く
```sh
open -e ~/.zshrc
```
2. 以下を記述．
```sh
eval "$(rbenv init -)"
```
3. ターミナルで以下を実行し，変更を反映．
```sh
source ~/.zshrc
```
4. 再度バージョンを確認．
```sh
ruby -v
```
5. バージョンが更新できているはず．ようやくcocoapodsをインストール．
```sh
sudo gem install cocoapods
```
#### 再度確認．
```sh
flutter doctor

Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 3.29.2, on macOS 14.6.1 23G93 darwin-arm64, locale ja-JP)
[✓] Android toolchain - develop for Android devices (Android SDK version 35.0.1)
[✓] Xcode - develop for iOS and macOS (Xcode 16.0)
[✓] Chrome - develop for the web
[✓] Android Studio (version 2024.3)
[✓] Connected device (3 available)            
[✓] Network resources

• No issues found!
```