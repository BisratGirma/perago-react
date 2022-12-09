import {
  Accordion,
  Button,
  TypographyStylesProvider,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Person } from "../types/model";
import AddPerson from "./AddPerson";
import TierListAccordion from "./TierListAccordion";

const TierList = ({ employee }: { employee: Person }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/4 py-5 flex flex-col justify-between">
      <Accordion
        defaultValue="customization"
        className="border-0 border-l-2"
      >
        <Accordion.Item value="customization">
          <Accordion.Control className="flex justify-between">
            <TypographyStylesProvider>
              {employee.name},{" "}
              {employee.attributes.position}
            </TypographyStylesProvider>
            <AddPerson person={employee} />
          </Accordion.Control>
          <Accordion.Panel>
            <div>
              <TierListAccordion
                employee={employee.children}
              />
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Button onClick={() => navigate("/")} color="blue">
        Back to Home
      </Button>
    </div>
  );
};

export default TierList;
