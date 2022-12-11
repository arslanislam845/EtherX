import React from "react";
import { Link } from "react-router-dom";
const GigDetails = () => {
  return (
    <div className="flex flex-row mx-2 justify-around">
      <div className="flex w-[35%] flex-col  mt-10">
        <div className="w-full h-[20rem] rounded-lg flex flex-col justify-center  ">
          <img
            className="rounded-xl w-full flex items-end "
            src="https://i.seadn.io/gae/_ck_foBb5lscSy14f2wv0Gs8v_jJVfTFTiPJPYuG48UUbSmkinG5Ub8iZitBvNU1nmYGbj8SZAN98PAgla-awyD8nmCPm9WXwLoQ?auto=format&w=512"
            alt="GIGIMAGE"
          />
          <div className=" p-3 text-end inline flex-row">
            <h1 className="inline font-extrabold Explorefont text-gray-600">
              Current Price :
              <span className="inline font-extrabold text-black text-xl ml-1">
                0.0133 ETH
              </span>
              <span className="inline font-extrabold text-blue-700 text-lg ml-1">
                (38$)
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full min-h-[20rem] rounded-lg border-2">
          <div className="p-5 Explorefont">
            <h1 className="text-2xl font-bold">About The Saller</h1>
            <div className="mt-3 ml-5 flex items-center">
              <div className="flex-shrink-0">
                <a>
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>

              <div className="ml-3">
                <p className="text-md font-semibold text-gray-900">
                  <a className="hover:underline">Brenna Goyette</a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10">Mar 10, 2020</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>4 min read</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold pt-6">Discription</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                iure rem, aliquam eaque quas vitae deserunt. Exercitationem
                harum iusto id repellat suscipit at ullam, excepturi facilis,
                sapiente aspernatur ipsam vel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[57%] flex-col my-10 ">
        <div className="w-full p-5 border-2 min-h-[16rem] rounded-lg mb-5 Explorefont">
          <h1 className="text-2xl font-bold">Brenna Goyette</h1>
          <p className="text-xl ">I can design anything what you can imagine</p>
          <p className="pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iure
            rem, aliquam eaque quas vitae deserunt. Exercitationem harum iusto
            id repellat suscipit at ullam, excepturi facilis, sapiente
            aspernatur ipsam vel.
          </p>
          <div className="flex items-center flex-col">
            <div className="rounded-md shadow-md w-1/2 mt-8">
              <Link to="/login">
                <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#2563EB] px-2 py-2 text-base font-medium text-white tracking-wider md:py-2 md:px-4 md:text-md hover:bg-[#103da0]">
                  Started
                </a>
              </Link>
            </div>

            <div className="flex  mt-2 ">
              <div className="rounded-md shadow-sm mr-10">
                <Link to="/login">
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent border-[#a2a3a6] bg-white px-2 py-2 text-base font-semibold  text-[#5381e6] tracking-wider md:py-2 md:px-4 md:text-md hover:bg-[#2b3b60] hover:text-white">
                    Make an Offer
                  </a>
                </Link>
              </div>
              <div className="rounded-md shadow-sm ">
                <Link to="/login">
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-2 border-[#a2a3a6] py-2 text-base font-semibold text-[#5381e6] tracking-wider md:py-2 md:px-4 md:text-md hover:bg-[#2b3b60] hover:text-white">
                    Chat with Seller
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[24rem] rounded-lg border-2">
          <div className="p-5 Explorefont">
            <h1 className="text-2xl font-bold">About This Gig</h1>
            <p className="pt-4">
              Looking for a custom web application with a beautiful reactive
              design? Look no further! <br/><br/>With my 5+ years of industry experience
              working with a range of clients to build their complex web
              applications, you can rest assured that I will deliver the best
              Fiverr has to offer in terms of web application development.<br/><br/> My
              cheap prices and fast turnover are a sign of my expertise in this
              area and I am willing to talk more about your specific needs to
              ensure you get the best quality web application for your money.
              These are just some of the things I can provide.<br/> <br/>Do contact me for
              any specific needs: Beautiful react frontend Beautiful vuejs
              frontend Complex Nodejs backend REST API API integration Highly
              performant web applications Responsive and reactive websites
              Complex database designs in SQL and MongoDB Buyer satisfaction is
              my top priority so please message me before making an order so we
              can discuss your specific needs and I will be able to best assist
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetails;
