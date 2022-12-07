import { Accordion, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Person } from "../types/model";
import TierListAccordion from "./TierListAccordion";

const TierList = ({ employee }: { employee: Person }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/4 py-5 flex flex-col justify-between">
      <Accordion defaultValue="customization">
        <Accordion.Item value="customization">
          <Accordion.Control>
            {employee.name}, {employee.attributes.position}
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
