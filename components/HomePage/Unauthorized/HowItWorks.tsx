import React from "react";

const HowItWorks = () => {
  return (
    <section className="lg:py-16 xl:py-28 py-12 bg-blue-700" id="HowItWorks">
      <div className=" container px-5 mx-auto">
        <div className="lg:gap-10 xl:grid-cols-3 grid gap-6">
          <div className="lg:space-y-4 space-y-2">
            <h2 className="sm:text-3xl text-2xl font-black text-white">
              How It Works
            </h2>
            <p className="sm:w-1/2 xl:w-80 md:text-lg w-full text-blue-100">
              A quick overview of how you can use InternNova and what actually
              happens behind the scenes.
            </p>
          </div>
          <div className="sm:grid-cols-2 lg:gap-10 xl:col-span-2 grid gap-6">
            <div className="rounded-xl hover:shadow-lg md:p-8 relative p-5 space-y-2 transition-shadow duration-200 bg-white shadow">
              <dt>
                <div className=" absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-xl font-medium">Step 1</p>
              </dt>
              <dd className="ml-16 text-gray-500">
                Sign-up using your email id. Don{"'"}t worry, your data is safe
                with us! Feel free to take a look at everything we offer on our
                website.
              </dd>
            </div>
            <div className="rounded-xl hover:shadow-lg md:p-8 relative p-5 space-y-2 transition-shadow duration-200 bg-white shadow">
              <dt>
                <div className=" absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-xl font-medium">Step 2</p>
              </dt>
              <dd className="ml-16 text-gray-500">
                Browse through the internships that we offer on our page and
                select one that interests you to read more about it
              </dd>
            </div>

            <div className="rounded-xl hover:shadow-lg md:p-8 relative p-5 space-y-2 transition-shadow duration-200 bg-white shadow">
              <dt>
                <div className=" absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-xl font-medium">Step 3</p>
              </dt>
              <dd className="ml-16 text-gray-500">
                To enroll for an internship, click on Apply and fill in all the
                necessary details. Remember to add in your qualifications and
                previous experiences and why you want the internship. This will
                help the employer know more about you
              </dd>
            </div>
            <div className="rounded-xl hover:shadow-lg md:p-8 relative p-5 space-y-2 transition-shadow duration-200 bg-white shadow">
              <dt>
                <div className=" absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-xl font-medium">Step 4</p>
              </dt>
              <dd className="ml-16 text-gray-500">
                If you are selected for the internship, all you have to do is go
                to the Task category and complete all your tasks for the
                internship. If you are not selected, don{"'"}t worry! You can
                always try again for another one
              </dd>
            </div>
            <div className="rounded-xl hover:shadow-lg md:p-8 relative p-5 space-y-2 transition-shadow duration-200 bg-white shadow">
              <dt>
                <div className=" absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                  <img
                    src="/assets/img/graphics/certificate.svg"
                    alt="certificate"
                    className="filter-white w-8 h-8"
                  />
                </div>
                <p className="ml-16 text-xl font-medium">Step 5</p>
              </dt>
              <dd className="ml-16 text-gray-500">
                Once your internship is finished, your employer will provide you
                with an official certificate as well as some perks. It is not
                fully legal to pay teens so you will be getting coupons and
                exciting deals instead
              </dd>
            </div>
            <div className="rounded-xl hover:shadow-lg md:p-8 relative p-5 space-y-2 transition-shadow duration-200 bg-white shadow">
              <dt>
                <div className=" absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                  <img
                    src="/assets/img/graphics/troubleshooting.svg"
                    alt="certificate"
                    className="filter-white w-8 h-8"
                  />
                </div>
                <p className="ml-16 text-xl font-medium">Trouble Shooting</p>
              </dt>
              <dd className="ml-16 text-gray-500">
                If you are facing any issues with the site or have any
                suggestions, please feel free to reach out to us on{" "}
                <a
                  href="mailto:InternNova@outlook.com"
                  className="hover:underline text-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
                ,{" "}
                <a
                  href="https://discord.gg/24dyywQm5S"
                  className="hover:underline text-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                </a>{" "}
                or{" "}
                <a
                  href="https://twitter.com/InternNovaLabs"
                  className="hover:underline text-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
                . We appreciate your feedback
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* A rickroll easter egg! */}!
                </a>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
