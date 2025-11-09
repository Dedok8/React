import {
  useGetDreamByIdQuery,
  useAddNewDreamMutation,
  useUpdateDreamMutation,
} from "@/entities";
import { frontRoutes } from "@/shared/config/frontRoutes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const emptyData = {
  title: "",
  description: "",
  year: "",
  withWhom: "",
  category: "",
};

function useAdd_Edit_Dream({ id }) {
  const [formData, setFormData] = useState(emptyData);
  const [emptyInputs, setEmptyInputs] = useState([]);
  const editMode = Boolean(id);
  const navigate = useNavigate();

  const {
    data: dreamData,
    isLoading: isLoadingDreams,
    isError: isErrorDreams,
  } = useGetDreamByIdQuery(id, {
    skip: !editMode,
  });

  const [addDream, { isLoading: isLoadingAdd, isError: isErrorAdd }] =
    useAddNewDreamMutation();
  const [editDream, { isLoading: isLoadingEdit, isError: isErrorEdit }] =
    useUpdateDreamMutation();

  useEffect(() => {
    if (editMode && dreamData && Object.keys(dreamData).length > 0) {
      setFormData((prev) => ({
        ...prev,
        ...dreamData,
      }));
    }
  }, [dreamData, editMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const empty = Object.entries(formData)
      .filter(([, value]) => !value?.toString().trim())
      .map(([key]) => key);

    if (empty.length > 0) {
      setEmptyInputs(empty);
      return false;
    }

    setEmptyInputs([]);

    try {
      if (editMode) {
        await editDream({ id, data: formData }).unwrap();
        navigate(frontRoutes.navigate.dreamList);
      } else {
        await addDream(formData).unwrap();
        setFormData(emptyData);
      }

      return true;
    } catch (error) {
      console.error("Помилка при збережені:", error);
      return false;
    }
  };

  const loading = isLoadingDreams || isLoadingAdd || isLoadingEdit;
  const error = isErrorDreams || isErrorAdd || isErrorEdit;

  return {
    formData,
    dreamData,
    handleChange,
    handleSubmit,
    loading,
    error,
    editMode,
    emptyInputs,
  };
}

export default useAdd_Edit_Dream;
