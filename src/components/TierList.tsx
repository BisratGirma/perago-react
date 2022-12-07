import { Accordion } from "@mantine/core";
import { Person } from "../types/model";
import TierListAccordion from "./TierListAccordion";

const TierList = ({ employee }: { employee: Person }) => {
  return (
    <Accordion defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>
          {employee.name}, {employee.position}
        </Accordion.Control>
        <Accordion.Panel>
          <div>
            <TierListAccordion
              employee={employee.childrens}
            />
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default TierList;
