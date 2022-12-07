import { useNavigate } from "react-router-dom";
import { Company } from "../types/model";

const CompanyCard = ({ id, name, bio }: Company) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(id);
  };

  return (
    <div
      className="w-44 h-28 p-3 shadow-4side rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      <h6>{name}</h6>
      <p>{bio}</p>
    </div>
  );
};

export default CompanyCard;
