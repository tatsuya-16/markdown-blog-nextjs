---
title: FOMO (Faster Object, More Object) について
slug: ml_fomo
tags:
  - 機械学習
  - エッジAI
  - 物体検出
  - IoT
author: Tatsuya Abe
abstract: FOMO (Faster Object, More Object) アルゴリズムについてまとめる．
date: '2024/11/12'
image: https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/blogThumbnail/edge_impulse.svg
---
## はじめに
FOMO (Faster Object, More Object)[^1] という機械学習アルゴリズムについてまとめる．
[^1]:FOMO: Object detection for constrained devices, https://docs.edgeimpulse.com/docs/edge-impulse-studio/learning-blocks/object-detection/fomo-object-detection-for-constrained-devices

## FOMOとは
FOMOは，アメリカのEdge Impulse社が開発した機械学習アルゴリズムである．
具体的には，エッジAI向けの画像処理アルゴリズムである．

#### エッジAI
エッジAIとは，AIの処理をクラウドやデータセンタではなく，データを生成するエッジデバイス上で行う手法のことである．生データをクラウド等に送信する必要がないため，遅延がなくなりリアルタイムな処理が可能になることや，送信するデータ量の削減，プライバシの保護など，様々な利点がある．一方，一般的にエッジデバイスはコンピューティングリソースに制約があるため，処置するするAIモデルをより軽量化，最適化する必要がある．そのような制約があるデバイス上でも動作可能なCNN (畳み込みニューラルネットワーク) として，MobileNetなどが開発されている．

FOMOアルゴリズムは，画像処理の中でも物体検出タスク向けのアルゴリズムで，MobileNetSSDやYOLOv5よりも最大30倍少ない処理能力とメモリで動作することができる．

## FOMOの設計目標
単純な画像分類に必要な計算能力のみで，物体検出によって得られる位置やオブジェクト数といった追加情報を得ることを目標に，FOMOは開発された．

- 画像分類 (Image Classification): 入力画像全体を１つのカテゴリ (ラベル) に分類する．
- 物体検出 (Object Detection): 入力画像内に存在する複数のオブジェクトを検出し，それぞれの位置やラベルを予測する．
  
## 仕組み
FOMOでは，標準の画像分類モデルの最後のレイヤーを切り取り，領域ごとのクラス確率マップに置き換える．そして最終レイヤに，局所性を保持するためのカスタム損失関数を用いる．これにより，オブジェクトがどこにあるかを示すヒートマップが得られる．ヒートマップに対して，同一オブジェクトに属する予測値をクラスタリングすることにより物体の重心位置を推定する
要するに，入力画像をグリット分割し，各グリットごとに分類を行うことで，物体を検出するという方法である．
欠点として，近接および重なっている物体を個別に検出できないことが挙げられる．

![](https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/blogThumbnail/fomo_archtecture_ex.png)
FOMOのアーキテクチャの例[^2]
[^2]:L. Boyle, N. Baumann, S. Heo and M. Magno, "Enhancing Lightweight Neural Networks for Small Object Detection in IoT Applications," 2023 IEEE SENSORS, Vienna, Austria, 2023, pp. 01-04


チュートリアルは[ここ](https://docs.edgeimpulse.com/docs/tutorials/end-to-end-tutorials/object-detection/detect-objects-using-fomo)から．