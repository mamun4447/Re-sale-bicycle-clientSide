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
                  There are four main types of state you need to properly manage
                  in your React apps: <br />
                  1. Local state <br />
                  2. Global state <br />
                  3. Server state <br />
                  4. URL state
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
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object. getPrototypeOf and
                  Object.
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
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages.
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
                  <span className="font-bold">React: </span>
                  React doesn’t enforce a specific project structure, and as you
                  can see from the official “Hello World” example below, you can
                  start using React with just a few lines of code. <br />
                  <br />
                  <span className="font-bold">Vue: </span>
                  The Vue.js core library focuses on the View layer only. It’s
                  called a progressive framework because you can extend its
                  functionality with official and third-party packages, such as
                  Vue Router or Vuex, to turn it into an actual framework.{" "}
                  <br /> <br />
                  <span className="font-bold">Angular: </span>
                  In this article, I’m discussing Angular 2, and not the first
                  version of the framework which is now known as AngularJS.
                  AngularJS, the original framework, is an MVC
                  (Model-View-Controller)) framework. But in Angular 2, there’s
                  no strict association with MV*-patterns as it is also
                  component-based.
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
