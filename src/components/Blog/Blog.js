import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <p>
              Use production build. Using Clean code. Dont always call server.
              never Fetch unnessesary data.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>Local state. Global state. Server state. URL state.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">How does prototypical inheritance work?</h2>
            <p>Kind og like OOP. It can inherite the propertise and method of other object.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Why dont we set state directly?</h2>
            <p>It ensures that the component has been updated and calls for re-rendering of the component.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
            <p>unit test is a kind of test written by developer to test every section of a app. Like for this website, a unit check will test my order page, order manage page , add profile page and others page ndividually to ensure that everything is working correctly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
