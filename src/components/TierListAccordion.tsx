import {
  Accordion,
  TypographyStylesProvider,
} from "@mantine/core";
import { Person } from "../types/model";
import AddPerson from "./AddPerson";

const TierListAccordion = ({
  employee,
}: {
  employee: Array<Person>;
}) => {
  if (employee.length === 0) {
    return <div></div>;
  }

  return (
    <Accordion
      defaultValue="customization"
      className="border-0 border-l-2"
    >
      {employee.map((item) => {
        return (
          <Accordion.Item
            value="customization"
            className="border-0 border-l-2"
            key={item.attributes.id}
          >
            <Accordion.Control className="flex justify-start border-[1px solid red]">
              <TypographyStylesProvider
                sx={{ fontSize: 14 }}
              >
                {item.name}, {item.attributes.position}
              </TypographyStylesProvider>
              <AddPerson person={item} />
            </Accordion.Control>
            <Accordion.Panel>
              <div>
                <TierListAccordion
                  employee={item.children}
                />
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default TierListAccordion;
