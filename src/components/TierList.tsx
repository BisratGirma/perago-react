import { Button } from "@mantine/core";
import { TreeView } from "@mui/lab";
import {
  IconArrowBarDown,
  IconArrowBarUp,
} from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { Person } from "../types/model";
import TierListAccordion from "./TierListAccordion";

const TierList = ({ employee }: { employee: Person }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/4 py-5 flex flex-col justify-between">
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<IconArrowBarUp />}
        defaultExpandIcon={<IconArrowBarDown />}
      >
        <TierListAccordion employee={employee} />
      </TreeView>

      <Button onClick={() => navigate("/")} color="blue">
        Back to Home
      </Button>
    </div>
  );
};

export default TierList;
