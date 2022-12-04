import TierList from "../components/TierList";
import { Person } from "../types/model";

const Tree = () => {
  const person: Array<Person> = [
    {
      id: 1,
      name: "Abel King",
      position: "CEO",
      parent: "head",
      childrens: [
        {
          id: 3,
          name: "Siefu Warrior",
          position: "CFO",
          parent: 1,
          childrens: [],
        },
      ],
    },
  ];
  return (
    <div>
      <TierList employee={person} />
    </div>
  );
};

export default Tree;
