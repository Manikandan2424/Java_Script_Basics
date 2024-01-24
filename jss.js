// const a=<h1>Hello World</h1>
// console.log(a)
// // we cannot write jss code in javascript 
import { jsx as _jsx } from "react/jsx-runtime";
const a = /*#__PURE__*/_jsx("h1", {
  children: "Hello World"
});
console.log(a);