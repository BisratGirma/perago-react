import { IconPlus } from "@tabler/icons";

const AddButton = ({ label }: { label: string }) => {
  return (
    <div className="w-52 h-20 p-1 flex flex-col justify-center items-center">
      <IconPlus
        className="border-[1px_solid_#dcdcdc] rounded-full cursor-pointer hover:bg-[#eeeeee]"
        size={36}
      />
      <p>{label}</p>
    </div>
  );
};

export default AddButton;
