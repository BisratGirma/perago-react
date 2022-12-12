import {
  Accordion,
  Button,
  TypographyStylesProvider,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newTree } from "../app/store";
import { Person } from "../types/model";
import AddPerson from "./AddPerson";
import TierListAccordion from "./TierListAccordion";

const TierList = ({ employee }: { employee: Person }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(newTree(employee));
  };

  return (
    <div className="w-1/4 h-screen border-r-[1px] border-r-slate-300 py-5 flex flex-col justify-between">
      <Accordion
        defaultValue="customization"
        className="border-0 border-l-2"
      >
        <Accordion.Item value="customization">
          <Accordion.Control
            className="flex justify-between"
            onClick={handleClick}
          >
            <TypographyStylesProvider>
              {employee.name},{" "}
              {employee.attributes.position}
            </TypographyStylesProvider>
            <div>
              <AddPerson person={employee} />
            </div>
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

      <div className="flex justify-center">
        <Button
          onClick={() => navigate("/")}
          className="bg-blue-700 hover:bg-blue-900 w-60"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default TierList;
