---
title: Gemini APIを使ってみる (with Next.js)
slug: gemini_api_nextjs
tags:
  - Gemini
  - GAI
  - Nextjs
author: Tatsuya Abe
abstract: Next.jsとGemini APIを使って簡単なwebアプリを作ってみる．
date: '2025/2/24'
image: https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/blogThumbnail//Google_Gemini_logo.svg.png
---
# はじめに
GoogleのGemini APIを使ってみる．
料金体系は[こちら](https://ai.google.dev/gemini-api/docs/pricing?hl=ja)．
今回はNext.jsでwebアプリを実装してみる．
Githubリポジトリ: https://github.com/tatsuya-16/gemini-api-test-nextjs

# やってみる
## Next.jsのプロジェクトを作成
```bash
npx create-next-app@latest

✔ What is your project named? … gemini-test
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack for `next dev`? … No
✔ Would you like to customize the import alias (`@/*` by default)? … No
```

VScodeで作成したプロジェクトを開く
```bash
code gemini-test
```

## Gemini APIライブラリをインストールする
参考: [Gemini API のクイックスタート](https://ai.google.dev/gemini-api/docs/quickstart?hl=ja&_gl=1*1dnaogi*_up*MQ..*_ga*MjA2MTgyMzAzOS4xNzQwMzgyODU0*_ga_P1DBVKWT6V*MTc0MDM4Mjg1My4xLjAuMTc0MDM4Mjg1My4wLjAuNzIxODk3Njg3&lang=node)
```bash
npm install @google/generative-ai
```

## APIキーを取得する
[Google AI Studio](https://aistudio.google.com/app/apikey)でAPIキーを取得．

プロジェクトのルートディレクトリに.env.localファイルを作成し，APIキーを記述．
```bash:.env.local
GEMINI_API_KEY=[取得したAPIキー]
```

## Gemini APIを使ってみる
### APIエンドポイントを作成
app/api/gemini/route.tsファイルを作成．
```TypeScript:app/api/gemini/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("API key is not found");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(request: Request) {
    console.log('Request:', request);
    try {
        const { input } = await request.json();
        const prompt = `"${input}"について詳しく解説してください．`;

        // モデルを取得
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
        });

        // プロンプトを生成AIに送信
        const result = await model.generateContent(prompt);
        console.log('Result:', result);

        // 結果をレスポンスとして返却
        return NextResponse.json({
            response: result.response.text(),
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error generating content:", error.message);

            return NextResponse.json(
            {
                error: error.message || "An unexpected error occurred.",
            },
            { status: 500 }
            );
        } else {
            console.error("Unknown error:", error);

            return NextResponse.json(
            {
                error: "An unexpected error occurred.",
            },
            { status: 500 }
            );
        }
    }
}
```

### UIを作る
shadcnをインストール
```bash
npx shadcn@latest init

✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
✔ Which style would you like to use? › New York (Recommended)
✔ Which color would you like to use as the base color? › Neutral
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating app/globals.css
  Installing dependencies.

It looks like you are using React 19. 
Some packages may fail to install due to peer dependency issues in npm (see https://ui.shadcn.com/react-19).

✔ How would you like to proceed? › Use --force
✔ Installing dependencies.
✔ Created 1 file:
  - lib/utils.ts

Success! Project initialization completed.
You may now add components.
```
Input，Button，Scroll Areaをインストール．
```bash
npx shadcn@latest add button input scroll-area
```

#### app/page.tsxを編集する．
画面に入力欄とボタン，レスポンスの表示欄を設置し，APIリクエストを送信するコードを記述．
```TypeScript:app/rpage.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [result, setresult] = useState("")

  const handleSubmit = async () => {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: prompt }),
    });
    const data = await response.json();
    console.log('Response:', data);
    
    if (response.ok) {
      setresult(data.response)
    } else {
      console.error("Error:", data.error);
      setresult("An unexpected error occurred.");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <div className="flex w-full max-w-sm items-center space-x-2">
      <Input 
        placeholder="Enter the words" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
      />
      <Button type="button" onClick={handleSubmit}>Search</Button>
      </div>
      <ScrollArea className="h-[200px] w-full max-w-sm rounded-md border p-4">
        <div>{result}</div>
      </ScrollArea>
    </div>
  )
}
```

### 動作確認
開発サーバを起動
```bash
npm run dev
```
ローカルサーバ (通常，http://localhost:3000)にアクセス．
入力欄に適当な単語を入力し，Searchボタンを押してレスポンスを確認．
![result](https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/sign/blogImage/gemini-nextjs.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibG9nSW1hZ2UvZ2VtaW5pLW5leHRqcy5wbmciLCJpYXQiOjE3NDAzOTA4MjEsImV4cCI6MTc3MTkyNjgyMX0.iIhJ6laIA2Tf2HWjnZdBp5LkH15AgxfKMWbRLwziP9s)