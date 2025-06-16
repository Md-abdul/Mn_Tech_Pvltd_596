import React from "react";
import logo from '../assets/web-logo-2.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      <footer class=" dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
            
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                class="h-10"
                alt="Flowbite Logo"
              />
              <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
                MAGLAN TECHNOLOGY PRIVATE LIMITED
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to={'login'}></Link>
                <a href="" class="hover:underline me-4 md:me-6">
                  Login
                </a>
              </li>
              
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
             MAGLAN TECHNOLOGY PRIVATE LIMITED™
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
