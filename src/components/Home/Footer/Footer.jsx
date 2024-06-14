/* eslint-disable react/no-unknown-property */

import { APPLESTORE, GOOGLEPLAYSTORE, LOGO } from '../../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-lightWhite">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-4 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* <img className="w-44" src={LOGO} /> */}
          <h1 className='text-4xl italic font-bold text-black'>Foodfire</h1>

          <ul className="mt-8 flex justify-start gap-2 sm:mt-0 sm:justify-end">
            <div>
              <select className="px-6 py-3 bg-transparent text-black border-2 rounded-lg">
                <option value="India">
                  <img
                    className="w-5"
                    src="https://cdn.webshopapp.com/shops/94414/files/54025310/india-flag-icon-free-download.jpg"
                    alt="Indian Flag"
                  />{' '}
                  INDIA
                </option>
              </select>
            </div>
            <div>
              <select className="px-6 py-3 bg-transparent text-black border-2 rounded-lg">
                <option value="english">English</option>
              </select>
            </div>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-28 pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:pt-16">
          <div className="space-y-4">
            <p className="font-medium text-gray-900 uppercase">About Foodfire</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Who We Are
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Work With Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Investor Relations
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Report Fraud
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Press Kit
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-gray-900 uppercase">Foodverse</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Foodfire
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Blinkit
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Feeding India
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Hyperpure
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Foodland
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="space-y-3">
              <p className="font-medium text-gray-900 uppercase">
                For Restaurants
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Partner with us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Apps For You
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-5 space-y-3">
              <p className="font-medium text-gray-900 uppercase">
                For Enterprises
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Foodfire For Enterprise
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-900 uppercase">Learn More</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Privacy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Security
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Terms
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900 uppercase">Social Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <div className="space-y-4">
                <button className="">
                  <img className="w-48" src={APPLESTORE} />
                </button>
                <button className="">
                  <img className="w-48" src={GOOGLEPLAYSTORE} />
                </button>
              </div>
            </ul>
          </div>
        </div>
        <div className="mt-24 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-
              <br />
              2023 &copy; FoodFire™ Ltd. All rights reserved. Educational Purpose
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
