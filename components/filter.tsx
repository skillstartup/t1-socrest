import { getNews } from "@/services/getNews";
import type { Article } from "@/types/newsType"

export default function Filter({ setNews }: { setNews: React.Dispatch<React.SetStateAction<Article[] | null>> }) {
  const callNewsApi = async (filterData: FormData | string) => {
    const filterTitle = typeof filterData === "string" ? filterData : filterData?.get("filterTitle")?.toString();
    const res = await getNews(filterTitle);
    setNews(res?.articles);
  }

  return <div className="w-full max-w-7xl items-center justify-between text-sm lg:flex my-5">
    <form
      action={callNewsApi}
      className="w-full"
    >
      <input
        name="filterTitle"
        type="text"
        placeholder="Enter title to filter"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            const element = event.target as HTMLInputElement;
            callNewsApi(element.value)
          }
        }}
        className="w-full max-w-5xl rounded-lg p-2 ml-10 mr-2"
      />
      <button
        className=""
      >
        filter
      </button>
    </form>
  </div>
};
