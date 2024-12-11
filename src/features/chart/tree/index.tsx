import { Tree } from "./components/tree";
import { TreeRefactored } from "./components/treeRefactored";

import style from "./styles/tree.module.scss";

export const TreeExample = () => {
  return (
    <div className="flexCol">
      <h1>Tree </h1>
      <div className={style.treeContainer}>
        <Tree />
      </div>
      <div className={style.treeContainer}>
        <TreeRefactored />
      </div>
    </div>
  );
};
