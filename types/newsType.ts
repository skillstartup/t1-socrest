export type Article = {
  source: any,
  author: string,
  title: string,
  description: string | null | undefined,
  url: string,
  urlToImage: string | null | undefined,
  publishedAt: string,
  content: string | null | undefined,
};

export type NewsResponse = {
  status: string,
  totalResults: number,
  articles: Article[]
};
