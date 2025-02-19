---
title: 人工知能，機械学習の基礎
slug: ai_fundamentals
tags:
  - AI
  - ML
  - 人工知能
  - 機械学習
  - python
author: Tatsuya Abe
abstract: 人工知能，機械学習についての学習メモ．
date: '2025/2/19'
image: https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/blogThumbnail//ai_fundamental.jpeg
---

# 基本語彙
人工知能: 人間の知能を再現するための知的なコンピュータのプログラム．

機械学習のアルゴリズム
強化学習: 報酬が最も多い方法を学習．
決定着: 枝分かれでデータを分類．
ニューラルネットワーク: 脳の神経細胞ネットワークを模倣．

ディープラーニング: 多層で構成されるニューラルネットワークを用いた機械学習．

重み: シナプスの伝達効率．入力の影響度．
バイアス: ニューロンの感度．ニューロンがどれだけ興奮しやすいか．高ければ出力がより1に近づく．

# ニューラルネットワーク
![ニューラルネットワーク](https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/sign/blogImage/ai_fundamental-neuralnetwork.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibG9nSW1hZ2UvYWlfZnVuZGFtZW50YWwtbmV1cmFsbmV0d29yay5qcGVnIiwiaWF0IjoxNzM5OTU1MzUyLCJleHAiOjE3NzE0OTEzNTJ9.sHw_gSUU7a7jYi-1pUlHvSEL6YbB-fFKO3vzKWrU9Ek)

# ニューロン
![ニューロン](https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/sign/blogImage/ai_fundamental-neuron.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibG9nSW1hZ2UvYWlfZnVuZGFtZW50YWwtbmV1cm9uLmpwZWciLCJpYXQiOjE3Mzk5NTU3MTIsImV4cCI6MTc3MTQ5MTcxMn0.m9mIgzqnE9B523-kDd0bibdhBUiiaASKMYZfTbxvDvA)

# 学習の仕組み
出力と正解の誤差が小さくなるように重みとバイアスを調整する．
誤差逆伝搬法 (バックプロパゲーション): 誤差を出力から入力へ向かって誤差を逆伝搬し，重みとバイアスを更新する学習アルゴリズム．

## パラメータの更新 (出力層)
1. 修正量のベース$\sigma_0$を求める．
$\sigma_0 = (出力 - 正解) \times 活性化関数の微分形$
2. $\sigma_0$を使って，重みとバイアスの修正量を求める．
$重みの修正量 = -学習係数 \times \sigma_0 \times 入力$
$バイアスの修正量 = -学習係数 \times \sigma_0$

## パラメータの更新 (中間層)
1. $\sigma_0$を用いて，中間層における修正量のベース$\sigma_m$を求める．
$\sigma_m = \sigma_0 \times 出力にかける重み \times 活性化関数の微分形$
2. $\sigma_m$を使って，重みとバイアスの修正量を求める．
$重みの修正量 = -学習係数 \times \sigma_m \times 入力$
$バイアスの修正量 = -学習係数 \times \sigma_m$