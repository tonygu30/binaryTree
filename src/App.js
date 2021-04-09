import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import BinaryTree from "./BinaryTree/index";

const insert = (root, val) => {
  if (!root) return { val };

  let current = root;
  let stop;

  while (!stop) {
    if (val > current.val) {
      if (current.right) {
        current = current.right;
      } else {
        current.right = { val };
        stop = 1;
      }
    } else {
      if (current.left) {
        current = current.left;
      } else {
        current.left = { val };
        stop = 1;
      }
    }
  }

  return root;
};

function App() {
  const [rootTree, setRootTree] = useState({ val: 5 });

  const randomInsert = () => {
    const random = (Math.random() * 8).toFixed(2);
    const bindTree = insert(rootTree, random);
    setRootTree(() => ({ ...bindTree }));
  };

  return (
    <div>
      <BinaryTree rootTree={rootTree} />
      <div onClick={randomInsert}>Random Insert!</div>
    </div>
  );
}

export default App;
