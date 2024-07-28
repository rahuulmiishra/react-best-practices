import "./App.css";
import ArrowFunctions from "./best-practices/arrow-functions";
import CleanJSX from "./best-practices/clean-jsx";
import CleanupUsage from "./best-practices/cleanup-usage";
import ConditionalRendering from "./best-practices/conditional-rendering";
import ConfigDrivenUI from "./best-practices/config-driven-ui";

import UseMeEarly from "./best-practices/use-me-early";
import UseMeNot from "./best-practices/use-me-not";
import CSSInJS from "./best-practices/css-in-js";
import Destructuring from "./best-practices/destructuring";
import DivAsButton from "./best-practices/div-as-button";
import DomManipulation from "./best-practices/dom-manipulation";
import ErrorBoundary from "./best-practices/error-boundary";
import ErrorBoundaryIssues from "./best-practices/error-boundary-issues";
import FetchData from "./best-practices/fetch-data";
import Fragments from "./best-practices/fragments";
import ImmutabilityState from "./best-practices/immutability-state";
import KeyProp from "./best-practices/key-prop";
import LazyLoading from "./best-practices/lazy-loading";
import PropTypes from "./best-practices/proptypes";
import RefList from "./best-practices/ref-list";
import RS from "./assets/react.svg";
import ModifyingProps from "./best-practices/modifying-props";
import RefVsVar from "./best-practices/ref-vs-var";
import DependencyArray from "./best-practices/dependency-array";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";
const store = createStore(function () {
  return () => {};
});

function App() {
  return (
    <>
      <div className="branding">
        <span>
          React JS <img src={RS} /> -
        </span>{" "}
        <span>Best Practices</span>
        <span className="by">By - Rahul Mishra (Frontend Master)</span>
      </div>

      <UseMeNot />

      {/* <FetchData /> */}

      {/* <Provider store={store}>
        {" "}
        <DependencyArray />
      </Provider> */}

      {/* <ArrowFunctions />

      <CleanJSX />

      <CleanupUsage />

      <ConditionalRendering />

      <ConfigDrivenUI />

      <CSSInJS />

      <Destructuring />

      <DivAsButton />

      <DomManipulation />

     
      <Fragments /> */}

      {/* <ErrorBoundary /> */}

      {/* <ErrorBoundaryIssues /> */}

      {/* <ImmutabilityState />

      <KeyProp />

      <LazyLoading />

      <PropTypes />

      <RefList />

      <UseMeEarly />

      <UseMeNot /> */}
    </>
  );
}

export default App;
