import { TreeItem } from "@mui/lab";
import { Person } from "../types/model";

const TierListAccordion = ({
  employee,
}: {
  employee: Person;
}) => {
  // if (employee.children.length === 0) {
  //   return (
  //     <TreeItem
  //       label={
  //         employee.name +
  //         ", " +
  //         employee.attributes.position
  //       }
  //       nodeId={employee.attributes.id}
  //     />
  //   );
  // }

  return (
    <TreeItem
      label={
        employee.name + ", " + employee.attributes.position
      }
      nodeId={employee.attributes.id}
    />
    // {/* {employee.children.map((item: Person) => {
    //   return <TierListAccordion employee={item} />;
    // })} */}
  );
};

export default TierListAccordion;
