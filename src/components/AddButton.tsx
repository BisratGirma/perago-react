import {
  Button,
  Modal,
  TextInput,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../api";

interface CompanyForm {
  name: string;
  bio: string;
}

const AddButton = ({ label }: { label: string }) => {
  const [open, handleOpen] = useState(false);
  const handleModal = () => handleOpen(!open);

  const { register, handleSubmit } = useForm<CompanyForm>();
  const onSubmit: SubmitHandler<CompanyForm> = (data) => {
    api
      .post("", {
        name: data.name,
        bio: data.bio,
      })
      .then((r) => {
        console.log(r);
      });
    console.log(data);
  };
  return (
    <>
      <div className="w-52 h-20 p-1 flex flex-col justify-center items-center">
        <IconPlus
          className="border-[1px_solid_#dcdcdc] rounded-full cursor-pointer hover:bg-[#eeeeee]"
          size={36}
          onClick={handleModal}
        />
        <p>{label}</p>
      </div>

      {/* Add Company Modal */}
      <Modal opened={open} onClose={handleModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TypographyStylesProvider>
            Company Name *
          </TypographyStylesProvider>
          <TextInput type="text" {...register("name")} />
          <TypographyStylesProvider>
            Bio *
          </TypographyStylesProvider>
          <TextInput type="text" {...register("bio")} />
          <div className="flex justify-end m-3 mb-1">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddButton;
