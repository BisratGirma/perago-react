import TierList from "../components/TierList";
import { Person } from "../types/model";
import api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BriefTree from "../components/BriefTree";
import AddPerson from "../components/AddPerson";
import { TypographyStylesProvider } from "@mantine/core";

const Tree = () => {
  const { companyId } = useParams();

  const [person, setPerson] = useState<Person>();
  useEffect(() => {
    api.get(companyId!).then((r) => {
      console.log(r.data);

      setPerson(r.data);
    });
  }, [companyId]);

  if (!person) {
    return (
      <div className="flex justify-center items-center">
        <AddPerson
          size="large"
          person={{
            name: "",
            attributes: {
              id: "",
              parent: "head",
              position: "",
            },
            children: [],
          }}
        />
        <TypographyStylesProvider>
          no Person is added yet, press the plus button to
          add one{" "}
        </TypographyStylesProvider>
      </div>
    );
  }

  return (
    <div className="flex">
      <TierList employee={person} />
      <BriefTree person={person} />
    </div>
  );
};

export default Tree;
