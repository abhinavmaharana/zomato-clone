/* eslint-disable react/prop-types */
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import AboutRestaurant from './AboutRestaurant/AboutRestaurant';
import OrderOnline from './OrderOnline/OrderOnline';
import Reviews from './Reviews/Reviews';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import RestaurantMenu from './RestaurantMenu/RestaurantMenu';

const RestaurantDetailsFilterTabs = ({ restaurantMenu }) => {
  console.log(restaurantMenu);
  console.log(restaurantMenu?.page_data?.navbarSection[0]?.title);
  const data = [
    {
      label: restaurantMenu?.page_data?.navbarSection[0]?.title,
      value: restaurantMenu?.page_data?.navbarSection[0]?.subType,
      desc: <AboutRestaurant restaurantMenu={restaurantMenu} />,
    },
    {
      label: restaurantMenu?.page_data?.navbarSection[1]?.title,
      value: restaurantMenu?.page_data?.navbarSection[1]?.subType,
      desc: <OrderOnline restaurantMenu={restaurantMenu} />,
    },
    {
      label: restaurantMenu?.page_data?.navbarSection[2]?.title,
      value: restaurantMenu?.page_data?.navbarSection[2]?.subType,
      desc: <Reviews restaurantMenu={restaurantMenu} />,
    },
    {
      label: restaurantMenu?.page_data?.navbarSection[3]?.title,
      value: restaurantMenu?.page_data?.navbarSection[3]?.subType,
      desc: <PhotoGallery restaurantMenu={restaurantMenu} />,
    },
    {
      label: restaurantMenu?.page_data?.navbarSection[4]?.title,
      value: restaurantMenu?.page_data?.navbarSection[4]?.subType,
      desc: <RestaurantMenu restaurantMenu={restaurantMenu} />,
    },
  ];
  return (
    <div>
      <Tabs value="html" className="max-w-full mt-5">
        <TabsHeader
          className="bg-transparent space-x-10"
          indicatorProps={{
            className:
              'border-b border-secondary border-b-2 shadow-none !text-gray-900',
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default RestaurantDetailsFilterTabs;
