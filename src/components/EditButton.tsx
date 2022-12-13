import {
  Button,
  Modal,
  TextInput,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { newTree } from "../app/store";
import { Person } from "../types/model";

interface PersonForm {
  name: string;
  position: string;
}

const EditButton = ({
  person,
  setEmployee,
  employees,
  setValues,
}: {
  person: Person;
  employees: Array<Person>;
  setValues: React.Dispatch<React.SetStateAction<Person>>;
  setEmployee: React.Dispatch<
    React.SetStateAction<Person[]>
  >;
}) => {
  const [open, handleOpen] = useState(false);
  const handleModal = () => handleOpen(!open);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<PersonForm>();
  const onSubmit: SubmitHandler<PersonForm> = (data) => {
    const {
      name,
      attributes: { position, ...remaining },
      ...filtred
    } = person;
    const updatedPerson = {
      name: data.name,
      attributes: { position: data.position, ...remaining },
      ...filtred,
    };
    setValues(updatedPerson);
    dispatch(newTree(updatedPerson));
    handleModal();
  };

  const handleDelete = () => {
    const filtered = employees.filter(
      (item) => person.attributes.id !== item.attributes.id
    );
    setEmployee(filtered);
    handleModal();
  };

  return (
    <>
      <IconEdit size={16} onClick={() => handleModal()} />

      {/* Add Person Modal */}
      <Modal opened={open} onClose={handleModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TypographyStylesProvider>
            Full Name *
          </TypographyStylesProvider>
          <TextInput
            type="text"
            defaultValue={person.name}
            {...register("name")}
          />
          <TypographyStylesProvider>
            Position *
          </TypographyStylesProvider>
          <TextInput
            defaultValue={person.attributes.position}
            type="text"
            {...register("position")}
          />
          <div className="flex justify-between m-3 mb-1">
            <IconTrash
              className="hover:fill-red-600"
              onClick={handleDelete}
            />
            <Button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900"
            >
              update
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditButton;
