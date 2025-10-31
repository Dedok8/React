import {
  useCreateDoctorMutation,
  useGetDoctorsByIdQuery,
  useUpdateDoctorMutation,
} from "@/api";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function DoctorsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctorForm, setDoctorForm] = useState({
    fullName: "",
    specialty: "",
    email: "",
    phone: "",
    room: "",
    notes: "",
  });

  const {
    data: doctorsList,
    isLoading: isDoctorsLoading,
    isError: isDoctorsError,
  } = useGetDoctorsByIdQuery(id, { skip: !id });

  const [
    createDoctors,
    { isLoading: isAddingLoading, isError: isAddingError },
  ] = useCreateDoctorMutation();

  const [
    updateDoctors,
    { isLoading: isUpdatingDoctors, isError: isUpdateErrorDoctors },
  ] = useUpdateDoctorMutation();
  return <>Doctors f</>;
}

export default DoctorsForm;
