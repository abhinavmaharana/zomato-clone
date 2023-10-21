/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const ExploreOptions = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = value => setOpen(open === value ? 0 : value);

  return (
    <div className="space-y-8">
      <div className="mt-32 -ml-[5px]">
        <h1 className="text-3xl">Explore options near me</h1>
      </div>
      <div className="space-y-4">
        <Accordion
          className="mb-2 rounded-lg border border-gray-300 px-6 py-2"
          open={open === 1}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 text-xl transition-colors ${
              open === 1 ? 'text-black hover:!text-secondaryHover' : ''
            }`}
          >
            Popular cuisines near me
          </AccordionHeader>
          <AccordionBody className="text-lg">
            Bakery food near me Beverages food near me Biryani food near me
            Burger food near me Chinese food near me Continental food near me
            Desserts food near me Ice Cream food near me Italian food near me
            Mithai food near me Momos food near me Mughlai food near me North
            Indian food near me Pasta food near me Pizza food near me Rolls food
            near me Sandwich food near me Shake food near me South Indian food
            near me Street food near me
          </AccordionBody>
        </Accordion>
        <Accordion
          className="mb-2 rounded-lg border border-gray-300 px-6 py-2"
          open={open === 2}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 text-xl transition-colors ${
              open === 1 ? 'text-black hover:!text-secondaryHover' : ''
            }`}
          >
            Popular restaurant types near me
          </AccordionHeader>
          <AccordionBody className="text-lg">
            Bakeries near me Bars near me Beverage Shops near me Bhojanalya near
            me Cafés near me Casual Dining near me Clubs near me Cocktail Bars
            near me Confectioneries near me Dessert Parlors near me Dhabas near
            me Fine Dining near me Food Courts near me Food Trucks near me Irani
            Cafes near me Kiosks near me Lounges near me Meat Shops near me
            Microbreweries near me Paan Shop near me Pubs near me Quick Bites
            near me Sweet Shops near me
          </AccordionBody>
        </Accordion>
        <Accordion
          className="mb-2 rounded-lg border border-gray-300 px-6 py-2"
          open={open === 3}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 text-xl transition-colors ${
              open === 1 ? 'text-black hover:!text-secondaryHover' : ''
            }`}
          >
            Top Restaurant Chains
          </AccordionHeader>
          <AccordionBody className="text-lg"></AccordionBody>
        </Accordion>
        <Accordion
          className="mb-2 rounded-lg border border-gray-300 px-6 py-2"
          open={open === 4}
          icon={<Icon id={4} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 text-xl transition-colors ${
              open === 1 ? 'text-black hover:!text-secondaryHover' : ''
            }`}
          >
            Cities We Deliver To
          </AccordionHeader>
          <AccordionBody className="text-lg"></AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default ExploreOptions;
