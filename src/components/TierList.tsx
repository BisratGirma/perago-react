import { Accordion } from "@mantine/core";
import { Person } from "../types/model";
import TierListAccordion from "./TierListAccordion";

const TierList = ({
  employee,
}: {
  employee: Array<Person>;
}) => {
  if (employee.length === 0) {
    return <div></div>;
  }

  return (
    <Accordion defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>
          {employee[0].name}
        </Accordion.Control>
        <Accordion.Panel>
          <div>
            <TierListAccordion
              employee={employee[0].childrens}
            />
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default TierList;
