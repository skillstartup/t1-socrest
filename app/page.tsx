import Header from "@/components/header";
import Body from "@/components/body";
import { getNews } from "@/services/getNews";

export default async function Home() {
  const initNews = await getNews("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-20">
      <Header />
      <Body initNews={initNews?.articles} />
    </main>
  )
};
