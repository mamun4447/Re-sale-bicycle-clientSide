import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-white">
            Know about some technology
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-2">
            {/* question 1 */}
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  What are the different ways to manage a state in a React
                  application?
                </h1>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  SQL is the programming language used to interface with
                  relational databases. (Relational databases model data as
                  records in rows and tables with logical links between them).
                  NoSQL is a class of DBMs that are non-relational and generally
                  do not use SQL.
                </p>
              </div>
            </div>
            {/* question 2 */}
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  How does prototypical inheritance work?
                </h1>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
                  standard (RFC 7519) for securely transmitting information
                  between parties as JSON object. It is compact, readable and
                  digitally signed using a private key/ or a public key pair by
                  the Identity Provider(IdP).
                </p>
              </div>
            </div>
            {/* Question 3 */}
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  What is a unit test? Why should we write unit tests?
                </h1>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed.
                  Node. js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language.
                </p>
              </div>
            </div>
            {/* Question 4 */}
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  React vs. Angular vs. Vue?
                </h1>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  How NodeJS handle multiple client requests? NodeJS receives
                  multiple client requests and places them into EventQueue.
                  NodeJS is built with the concept of event-driven architecture.
                  NodeJS has its own EventLoop which is an infinite loop that
                  receives requests and processes them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
