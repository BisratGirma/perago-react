import { Company } from "../types/model";

const CompanyCard = ({ name, bio }: Company) => {
  return (
    <div className="w-44 h-28 p-3 shadow-4side rounded-lg cursor-pointer">
      <h6>{name}</h6>
      <p>{bio}</p>
    </div>
  );
};

export default CompanyCard;
