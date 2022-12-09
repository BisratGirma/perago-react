import {
  Accordion,
  TypographyStylesProvider,
} from "@mantine/core";
import { useState } from "react";
import { Person } from "../types/model";
import AddPerson from "./AddPerson";
import EditButton from "./EditButton";

const TierListAccordion = ({
  employee,
}: {
  employee: Array<Person>;
}) => {
  const [empList, setEmployee] =
    useState<Array<Person>>(employee);

  if (employee.length === 0) {
    return <div></div>;
  }

  return (
    <Accordion
      defaultValue="customization"
      className="border-0 border-l-2"
    >
      {empList.map((item) => {
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
              <div className="flex">
                <AddPerson person={item} />
                <EditButton
                  person={item}
                  employees={empList}
                  setEmployee={setEmployee}
                />
              </div>
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
