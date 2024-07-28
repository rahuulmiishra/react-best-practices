/* eslint-disable no-unused-vars */
import ArrowFunctions from "../arrow-functions";
import { fetchData } from "./util";
import "../../index.css";
import { Data } from "./constant";
import { useEffect, useState } from "react";

/*

Imports

Third PartyImports
ek line ka space

Components of my app
ek line space

Utils functions
ek line space

COnstants
ek line 

CSSS imp
ek line


Starting of component

destrcuing of props with default value

useState

useEff

hook call

function

variabls jo jsx me use karne hai

jsx



*/

function Rayta() {
  const [start, setStart] = useState(1);

  function checkMe() {
    console.log(checkMe);
  }

  useEffect(() => {}, []);

  const [end, setEnd] = useState(1);

  function getData() {}

  const isPass = !start;

  return <div>{isPass ? "Pass" : "Fail"};</div>;
}

export default Rayta;
