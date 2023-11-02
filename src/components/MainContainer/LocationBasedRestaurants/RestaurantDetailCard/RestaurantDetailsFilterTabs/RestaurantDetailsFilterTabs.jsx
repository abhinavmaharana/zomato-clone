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

const RestaurantDetailsFilterTabs = ({ restaurantMenu }) => {
  // Ensure restaurantMenu is defined
  if (!restaurantMenu) {
    return null; // or display an error message
  }

  console.log(restaurantMenu);

  const navbarSection = restaurantMenu?.page_data?.navbarSection;

  console.log(navbarSection);

  const data = [
    {
      label: navbarSection[0]?.title,
      value: navbarSection[0]?.subType,
      desc: <AboutRestaurant restaurantMenu={restaurantMenu} />,
    },
    {
      label: navbarSection[1]?.title,
      value: navbarSection[1]?.subType,
      desc: <OrderOnline restaurantMenu={restaurantMenu} />,
    },
    {
      label: navbarSection[2]?.title,
      value: navbarSection[2]?.subType,
      desc: <Reviews restaurantMenu={restaurantMenu} />,
    },
    {
      label: navbarSection[3]?.title,
      value: navbarSection[3]?.subType,
      desc: <PhotoGallery restaurantMenu={restaurantMenu} />,
    },
  ];

  return (
    <div>
      <Tabs value="html" className="max-w-full mt-5">
        <TabsHeader
          className="bg-transparent space-x-48 text-xl"
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
