"use client";

import type { Article } from "@/types/newsType"
import Filter from "@/components/filter";
import News from "@/components/news";
import { useState } from "react";

type BodyProps = {
  initNews: Article[],
};

export default function Body({ initNews }: BodyProps) {
  const [news, setNews] = useState<Article[] | null>(initNews);

  return <div>
    <Filter setNews={setNews} />
    <News news={news} />
  </div>
};
