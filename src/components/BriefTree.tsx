import React from "react";
import { Person } from "../types/model";
import Tree from "react-d3-tree";

const BriefTree = ({ person }: { person: Person }) => {
  return (
    <div className="h-screen w-3/4">
      <Tree
        data={person}
        pathFunc="step"
        orientation="vertical"
        nodeSize={{ x: 300, y: 210 }}
      />
    </div>
  );
};

export default BriefTree;
