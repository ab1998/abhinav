/**
Structure 1
<div>
<div>
<h1></h1>
</div>
</div>
Structure 2
<div>
<div>
<h1></h1>
<h2></h2>
</div>
</div>
Structure 3
<div>
<div id="child1">
<h1></h1>
<h2></h2>
</div>
<div id="child2">
<h1></h1>
<h2></h2>
</div>
</div>
 */

//const heading = React.createElement("h1", { id: "heading" }, "Hello World"); // It is an object. Creating a react element
//Structure 1 syntax
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", {}, React.createElement("h1", {}, "Hello World"))
// );
//Structure 2 syntax
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", {}, [
//     React.createElement("h1", {}, "Hello World"),
//     React.createElement("h2", {}, "Hello World"),
//   ])
// );
//Structure 3 syntax
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h2", {}, "Hello World"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h2", {}, "Hello World"),
  ]),
]); //core of react
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // react element/object (heading) is passed. It takes react element (heading), converts which browser understands and put it in root element
//render() - takes element/object as input and converts in format which browser understands and put it in DOM
console.log(heading);
