"use server";
import "server-only";
import type { NewsResponse } from "@/types/newsType"

/**
 * server function that call news api to get filtered news
 * @param filterData : title or body of news
 * @returns Article[]
 */
export async function getNews(filterTitle: string | undefined): Promise<NewsResponse> {
  if (!filterTitle) {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=au&apiKey=" + process.env.NEWS_API_KEY, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } else {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${filterTitle}&language=en&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
};
