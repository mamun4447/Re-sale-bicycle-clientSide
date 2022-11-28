import React from "react";

const SendMail = () => {
  return (
    <div className="my-20">
      <header>
        <h1 className="text-6xl font-bold text-center">
          Send <span className="text-[#297B77]">feedback</span>
        </h1>
      </header>
      <div className="container px-20 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Subscribe To The{" "}
                <span className="text-[#297B77]">Newsletter</span>
              </h1>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                be the first to knows when our{" "}
                <span className="font-medium text-[#297B77]">Get-Ride</span> is
                live
              </p>

              <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-5 py-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#297B77] rounded-lg lg:w-auto lg:mx-4 hover:bg-black focus:outline-none ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src="https://merakiui.com/images/components/Email-campaign-bro.svg"
              alt="email illustration vector art"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
