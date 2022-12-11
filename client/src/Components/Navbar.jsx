/* This example requires Tailwind CSS v2.0+ */

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: "Explore", href: "interface" },
  { name: "Help Center", href: "giginfo" },
  { name: "Community", href: "#" },
  { name: "Join", href: "#" },
];
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
  return (
    <Popover>
     <div className=" mx-auto py-3 w-full fixed z-10 h-[72px] px-4 sm:px-6 bg-white  overflow-hidden shadow-md">
            <nav className=" bg-white fixed z-10  w-[97%] flex items-center justify-between sm:h-10 md:justify-self-stretch" aria-label="Global">
              <div className="flex items-center relative md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                <Link to="/">
                <a className="flex flex-row items-center">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://bit.ly/3iRQ261"
                    alt=""
                  />

                  <h1 className="font-bold text-2xl ml-2"> EtherX </h1>
                </a>
              </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                   
                  </div>
                </div>
              </div>
              <div className="flex  justify-end items-end px-2 mt-1 ">
                <div className="w-full max-w-lg lg:max-w-xs  ">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative ">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-[23rem] h-[2.8rem] rounded-md border border-transparent bg-white border-slate-200 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-slate-200 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className=" hidden ml-10 md:inset-y-0 md:right-0 md:flex  md:items-center md:justify-start ">
              <div className="hidden  md:flex md:space-x-10 md:mr-7 ">
                {navigation.map((item) => (
                   <Link to={{ pathname: `${item.href}` }}>
                   <a
                     key={item.name}
                     className="font-semibold text-lg text-gray-900 hover:text-[#2563EB] ease-in-out"
                   >
                     {item.name}
                   </a>
                 </Link>
                ))}
              </div>
                <span className="inline-flex rounded-full shadow-sm">
                <Link to={{ pathname: "/Login" }}>
                  <a
                   
                    className=" w-[170px] inline-flex rounded-full border-2 font-semibold border-transparent text-[#2563EB] border-blue-500 pl-6 font-medium py-1  text-lg bg-white"
                  >
                     Connect Wallet
                  </a>
                </Link>
                </span>
              </div>
            </nav>
          </div>
{/* mobile view */}
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="/"
              className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
            >
            Connect Wallet
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
