import { Button } from "@/components/ui/button";
import markdownStyles from "./markdown-styles.module.css";
import Link from "next/link";

type Props = {
  content: string;
};

export function BlogBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
      />
      <Button className="mt-8 mb-8">
            <Link href="/blogs">一覧に戻る</Link>
      </Button>
    </div>
  );
}