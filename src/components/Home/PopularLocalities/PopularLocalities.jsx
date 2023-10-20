/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { EXPLORE_NEARBY_RESTAURANTS } from '../../../utils/constants';

const PopularLocalities = () => {
  
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    fetchPopularList();
  }, []);

  const fetchPopularList = async () => {
    const data = await fetch(EXPLORE_NEARBY_RESTAURANTS);

    const json = await data.json();

    console.log(json);

    console.log(json?.results?.locations?.subzone[0]?.city_data?.nearby_localities);

    setPopularList(json?.results?.locations?.subzone[0]?.city_data?.nearby_localities);
  }

  return (
    <div className='mt-32 -ml-[20px]'>
        <div className=''>
            <h1 className="text-3xl">Popular localities in and around <span className='font-bold'> Delhi NCR</span></h1>
        </div>
        <div className='grid grid-cols-3 gap-x-12'>
            {popularList?.map((listItem) => {
                return (
                    <div key={listItem.name} className="bg-white rounded-lg w-[390px] py-4 px-6 mt-8 border-2 border-[#E8E8E8]">
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-2xl'>{listItem.name}</h1>
                                <p className='text-xl font-thin'>{listItem.count} Places</p>
                            </div>
                            <div>
                                <i className="fa fa-arrow-right" />
                            </div>
                        </div>
                    </div>  
                )
            })}
        </div>
    </div>
  )
}

export default PopularLocalities