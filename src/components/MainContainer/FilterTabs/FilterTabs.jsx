/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RESTUARANTLIST } from '../../../utils/constants';

const FilterTabs = () => {
  const [filterCard, setFilterCard] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetchFilterTabs();
  }, []);

  const fetchFilterTabs = async () => {
    try {
      const response = await fetch(RESTUARANTLIST);
      const data = await response.json();

      if (data?.page_data?.sections?.SECTION_SEARCH_TABS) {
        setFilterCard(data.page_data.sections.SECTION_SEARCH_TABS);
      } else {
        console.error('Data structure is incorrect.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTabClick = index => {
    setActiveIndex(index);
  };

  return (
    <div>
      <ul className="grid grid-flow-col w-[750px] text-center border-b border-gray-200 text-gray-500">
        {filterCard.map((tab, index) => (
          <li key={index}>
            <a
              href={`#page${index + 1}`}
              className="flex justify-center border-b-4 border-transparent hover:text-secondary hover:border-secondary transition ease-in-out py-4"
            >
              <div className="flex justify-center items-center space-x-5">
                <div
                  className={`bg-[#F8F8F8] p-4 rounded-full ${
                    activeIndex === index
                      ? 'hover:bg-[#FCEEC0] transition ease-in-out'
                      : 'hover:active:bg-[#FCEEC0] transition ease-in-out'
                  }`}
                >
                  <img className="w-12" src={tab.image} />
                </div>
                <h1>{tab.title}</h1>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterTabs;
