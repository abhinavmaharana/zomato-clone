import { useEffect, useState } from "react"
import { QUICK_LINKS } from "../../../utils/constants";


const QuickLinks = () => {

  const [quickList, setQuickList] = useState([]);
  
  useEffect(() => {
    fetchQuickData();
  }, []);

  const fetchQuickData = async () => {
    const data = await fetch(QUICK_LINKS);

    const json = await data.json();

    console.log(json);

    console.log(json.page_data.sections.SECTION_QUICK_SEARCH.items);
  
    setQuickList(json?.page_data?.sections?.SECTION_QUICK_SEARCH?.items)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[420px] -mt-8">
      {quickList?.map((list) => {
        return (
          <div key={list.title} className="bg-white rounded-xl w-[380px] border-2 border-[#E8E8E8]">
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                className="w-full h-[180px] object-cover"
                src={list?.img}
                alt={list?.title}
              />
            </div>
            <div className="p-5 h-[100px]">
              <h1 className="text-lg font-semibold">{list?.title}</h1>
              <p className="text-gray-600">{list?.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default QuickLinks