import { TreeItem } from "@mui/lab";
import { Person } from "../types/model";

const TierListAccordion = ({
  employee,
}: {
  employee: Person;
}) => {
  return (
    <TreeItem
      label={
        employee.name + ", " + employee.attributes.position
      }
      nodeId={employee.attributes.id}
    >
      {employee.children.map((item: Person) => {
        return (
          <TreeItem
            label={
              item.name + ", " + item.attributes.position
            }
            nodeId={item.attributes.id}
            key={item.attributes.id}
          >
            <TierListAccordion employee={item} />
          </TreeItem>
        );
      })}
    </TreeItem>
  );
};

export default TierListAccordion;
