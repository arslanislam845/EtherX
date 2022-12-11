/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon,BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Popover } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: "Explore", href: "/interface" },
  { name: "Help Center", href: "/giginfo" },
  { name: "Community", href: "#" },
  { name: "Join", href: "#" },
];
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover>
      <div className=" mx-auto relative py-3 w-full h-[72px] px-4 sm:px-6 bg-white  overflow-hidden shadow-md">
        <nav
          className=" bg-white relative  w-[97%] flex items-center justify-between sm:h-10 md:justify-evenly"
          aria-label="Global"
        >
          <div className="flex  items-center relative md:inset-y-0 md:left-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link to="/">
                <a className="flex flex-row items-center">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />

                  <h1 className="font-bold text-2xl ml-2"> EtherX </h1>
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="flex  px-2 mt-1 ">
            <div className="w-full max-w-lg lg:max-w-xs  ">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative ">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-96 h-[2.8rem] rounded-md border border-transparent bg-white border-slate-200 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-slate-200 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:inset-y-0 md:right-0 md:flex  md:items-center md:justify-end">
            <div className="hidden md:flex md:space-x-10 md:mr-7">
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
            {/* <span className="inline-flex rounded-full shadow-lg">
                  <a
                    href="#"
                    className=" w-[100px] inline-flex rounded-full border-2 font-semibold border-transparent text-[#2563EB] border-blue-500 pl-6 font-medium py-1  text-lg bg-white"
                  >
                    Log in
                  </a>
                </span> */}
          </div>
        </nav>
      </div>

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
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
      <div className="hidden lg:ml-4 lg:flex lg:items-center">
     <button
       type="button"
       className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
     >
       <span className="sr-only">View notifications</span>
       <BellIcon className="h-6 w-6" aria-hidden="true" />
     </button>

     {/* Profile dropdown */}
     <Menu as="div" className="relative ml-4 flex-shrink-0">
       <div>
         <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
           <span className="sr-only">Open user menu</span>
           <img
             className="h-8 w-8 rounded-full"
             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""
           />
         </Menu.Button>
       </div>
       <Transition
         as={Fragment}
         enter="transition ease-out duration-100"
         enterFrom="transform opacity-0 scale-95"
         enterTo="transform opacity-100 scale-100"
         leave="transition ease-in duration-75"
         leaveFrom="transform opacity-100 scale-100"
         leaveTo="transform opacity-0 scale-95"
       >
         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
               >
                 Your Profile
               </a>
             )}
           </Menu.Item>
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
               >
                 Settings
               </a>
             )}
           </Menu.Item>
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
               >
                 Sign out
               </a>
             )}
           </Menu.Item>
         </Menu.Items>
       </Transition>
     </Menu>
   </div>
    </Popover>
     
  );
}
