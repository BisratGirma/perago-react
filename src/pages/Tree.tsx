import React from "react";
import TierList from "../components/TierList";
import { Person } from "../types/model";
import api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BriefTree from "../components/BriefTree";

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
    return <div></div>;
  }

  return (
    <div className="flex">
      <TierList employee={person} />
      <BriefTree person={person} />
    </div>
  );
};

export default Tree;
