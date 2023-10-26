/* eslint-disable react/prop-types */
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import RestaurantCard from './RestaurantCard/RestaurantCard';

const OrderOnline = ({ restaurantMenu }) => {
  if (!restaurantMenu) {
    return <div>No data available.</div>;
  }

  const menus = restaurantMenu?.page_data?.order?.menuList?.menus;

  return (
    <div className="mt-2 h-screen">
      <Tabs
        value="html"
        orientation="vertical"
        className="max-w-full space-x-16"
      >
        <TabsHeader
          className="bg-transparent space-y-6 w-[172px]"
          indicatorProps={{
            className: 'border-b shadow-none !text-gray-900',
          }}
        >
          {menus?.map(menu => (
            <Tab
              key={menu?.menu?.name}
              value={menu?.menu?.name}
              className="text-lg"
            >
              {menu?.menu?.name}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {menus?.map(menu => (
            <TabPanel
              key={menu?.menu?.name}
              value={menu?.menu?.name}
              className="py-0"
            >
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold text-black">
                    Order Online
                  </h1>
                </div>
                <div>
                  <p>Live track your order | 48 min</p>
                </div>
                <RestaurantCard menu={menu} />
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default OrderOnline;
