import {
  Button,
  Modal,
  TextInput,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Person } from "../types/model";

interface PersonForm {
  name: string;
  position: string;
}

const AddPerson = ({ person }: { person: Person }) => {
  const [open, handleOpen] = useState(false);
  const handleModal = () => handleOpen(!open);

  const { register, handleSubmit } = useForm<PersonForm>();
  const onSubmit: SubmitHandler<PersonForm> = (data) => {
    const req = {
      name: data.name,
      attributes: {
        position: data.position,
        parent: person.attributes.id,
      },
      children: [],
    };
    // api
    //   .post("", {
    //     name: data.name,
    //     bio: data.bio,
    //   })
    //   .then((r) => {
    //     console.log(r);
    //   });
    console.log(data);
  };

  return (
    <>
      <IconPlus size={16} onClick={() => handleModal()} />

      {/* Add Person Modal */}
      <Modal opened={open} onClose={handleModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TypographyStylesProvider>
            Full Name *
          </TypographyStylesProvider>
          <TextInput type="text" {...register("name")} />
          <TypographyStylesProvider>
            Position *
          </TypographyStylesProvider>
          <TextInput
            type="text"
            {...register("position")}
          />
          <div className="flex justify-end m-3 mb-1">
            <Button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900"
            >
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddPerson;
