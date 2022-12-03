/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconPlus } from "@tabler/icons";

const style = css({
  border: "1px solid #DCDCDC",
  borderRadius: "50%",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#eeeeee",
  },
});

const AddButton = ({ label }: { label: string }) => {
  return (
    <div
      css={{
        width: 200,
        height: 70,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconPlus size={36} css={style} />
      <p>{label}</p>
    </div>
  );
};

export default AddButton;
