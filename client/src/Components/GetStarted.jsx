import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <>
      <section
        id="get-started-today"
        className="relative overflow-hidden bg-blue-600 py-32"
      >
        <div
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 getStarted"
         
        />
        <div className="relative">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Get started today
            </h2>
            <p className="mt-4 text-lg tracking-tight text-white">
              It’s time to take control of your books. Buy our software so you
              can feel like you’re doing something productive.
            </p>
           
            <div className="flex justify-center">
            <div className="rounded-md shadow-lg w-40 mt-4">
            <Link to="/login">
              <a
                
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#2563EB] px-2 py-2 text-base font-medium text-white tracking-wider md:py-2 md:px-4 md:text-md hover:bg-[#103da0]"
              >
                Get Started
              </a>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
