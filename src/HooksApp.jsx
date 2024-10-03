import React from "react";

import { Counter } from "./components/Counter";
import { FormApp } from "./components/FormApp";
import { FetchApp } from "./components/FetchApp";

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <hr />
      <FetchApp />
      <hr />
      <Counter />
      <hr />
      <FormApp />
    </>
  );
};
