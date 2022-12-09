import { Person } from "../types/model";
import Tree from "react-d3-tree";

const BriefTree = ({ person }: { person: Person }) => {
  return (
    <div className="h-screen w-3/4 flex justify-center items-center">
      <Tree
        data={person}
        pathFunc="step"
        orientation="vertical"
        nodeSize={{ x: 240, y: 210 }}
      />
    </div>
  );
};

export default BriefTree;
