import type { Article } from "@/types/newsType"
type NewsProps = {
  news: Article[] | null
}

export default function News({ news }: NewsProps) {
  return <div className="w-full max-w-7xl grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
    {!!news && news?.length > 0 ? news?.map((article: Article, idx: number) => (
      <a
        key={"newsArticle_" + idx.toString()}
        href={article?.url}
        className="group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`text-lg font-semibold`}>
          {article?.title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 text-sm opacity-50`}>
          {article?.description}
        </p>
      </a>
    ))
      :
      (
        <h2 className={`text-lg font-semibold`}>
          No news to read...
        </h2>
      )
    }
  </div>
};
