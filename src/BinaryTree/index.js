import React, { Fragment, useEffect } from "react";
import "./index.scss";

const NodePoint = ({ rootTree }) => {
  return (
    <Fragment>
      <div className="value">
        <span>{rootTree.val}</span>
      </div>
      {rootTree.right && (
        <div className="right">
          <NodePoint rootTree={rootTree.right} />
        </div>
      )}
      {rootTree.left && (
        <div className="left">
          <NodePoint rootTree={rootTree.left} />
        </div>
      )}
    </Fragment>
  );
};

const getTreeWidth = () => {
  const leftWidth = document.querySelectorAll(".tree > div")[1]?.offsetWidth;
  const rightWidth = document.querySelectorAll(".tree > div")[2]?.offsetWidth;
  if (
    leftWidth &&
    rightWidth &&
    document.body.clientWidth < leftWidth + rightWidth
  ) {
    return `${leftWidth + rightWidth + 120}px`;
  } else {
    return "100%";
  }
};

const BinaryTree = ({ rootTree }) => {
  useEffect(() => {
    document.querySelector(".tree").style.width = getTreeWidth();
  }, [rootTree]);

  return (
    <div class="tree">
      <NodePoint rootTree={rootTree} />
    </div>
  );
};

export default BinaryTree;
