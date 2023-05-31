import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <div className="container mx-auto">
      <React.Fragment>
        <Pdf targetRef={ref} filename="blog.pdf">
          {({ toPdf }) => (
            <button className="btn btn-primary" onClick={toPdf}>
              Generate PDF
            </button>
          )}
        </Pdf>
      </React.Fragment>
      <div className="py-5 w-1/2 p-3 mx-auto" ref={ref}>
        <div className="text-star">
          <h1 className="font-bold text-3xl py-5">Blog</h1>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 1: Tell us the differences between uncontrolled and
            controlled components?
          </p>
          <p className="">
            Answer 1: In React, there are two approaches to managing form
            inputs: controlled components and uncontrolled components. A
            controlled component is a form element whose value is managed by
            React. The value of the form element is set by React using the value
            prop, and changes to the input trigger a state update via an
            onChange event handler. This means that the component's value is
            always in sync with the React state, and any changes to the value
            are propagated to other components that depend on it. Controlled
            components offer more control over form inputs and make it easier to
            enforce constraints and validations on input values. <br />
            On the other hand, an uncontrolled component is a form element whose
            value is managed by the browser. The value of the input is accessed
            using a ref and is not stored in React state. Changes to the input
            value are not reflected in the component's state, which means that
            other components that depend on the value may not be aware of the
            changes.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 2: How to validate React props using PropTypes?
          </p>
          <p className="">
            Answer 2: In React, we can use the PropTypes library to validate the
            props passed to a component. PropTypes allows you to specify the
            type, shape, and required status of the props that a component
            expects to receive. To use PropTypes, first need to import it at the
            top of the component file using the import statement. Next, we can
            define a propTypes object as a static property of our component
            class. This object specifies the prop types and validation rules for
            the component. By using PropTypes to validate our component props,
            we can catch prop type errors early in development.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 3: Tell us the difference between nodejs and express js?
          </p>
          <p className="">
            Answer 3: Node.js is a JavaScript runtime environment that allows
            developers to run JavaScript code on the server-side, while
            Express.js is a lightweight and flexible framework built on top of
            Node.js that provides a simpler and more elegant way to create web
            applications. In short, Node.js provides the foundation for building
            server-side applications, while Express.js simplifies the process of
            building web applications by providing a set of commonly used
            features.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 4: What is a custom hook, and why will you create a custom
            hook?
          </p>
          <p className="">
            Answer 4: A custom hook is a reusable function in React that allows
            you to extract and share logic between components. You can create a
            custom hook when you find yourself duplicating code across multiple
            components or when you need to manage complex state and behaviors in
            a reusable way. Custom hooks can encapsulate logic such as fetching
            data, managing state, handling side effects, and more. By creating a
            custom hook, you can simplify your component code, improve
            reusability, and make your code easier to test and maintain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
