import TierList from "../components/TierList";
import { Person } from "../types/model";
import api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BriefTree from "../components/BriefTree";
import AddPerson from "../components/AddPerson";
import { TypographyStylesProvider } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { newTree } from "../app/store";

const Tree = () => {
  const dispatch = useDispatch();
  const { companyId } = useParams();
  const { tree } = useSelector((state: any) => state.tree);

  const [person, setPerson] = useState<Person>();
  useEffect(() => {
    api.get(companyId!).then((r) => {
      setPerson(r.data);
      dispatch(newTree(r.data));
    });
  }, [companyId, dispatch]);

  if (!person) {
    return (
      <div className="flex flex-col justify-center items-center">
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
      <BriefTree person={tree} />
    </div>
  );
};

export default Tree;
