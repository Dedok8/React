import {
  useCreatePatientsMutation,
  useGetPatientsByIdQuery,
  useUpdatePatientsMutation,
} from "@/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function PatientsForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const {
    data: patient,
    isLoading: isPatientLoading,
    isError: isPatientError,
  } = useGetPatientsByIdQuery(id, { skip: !id });

  const [createPatient, { isLoading: isAdding, isError: isAddError }] =
    useCreatePatientsMutation();

  const [updatePatient, { isLoading: isUpdating, isError: isUpdateError }] =
    useUpdatePatientsMutation();

  useEffect(() => {
    if (patient) {
      setFormData({
        fullName: patient.fullName || "",
        birthDate: patient.birthDate ? patient.birthDate.split("T")[0] : "",
        gender: patient.gender || "",
        phone: patient.phone || "",
        email: patient.email || "",
        address: patient.address || "",
        notes: patient.notes || "",
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updatePatient({ id, data: formData }).unwrap();
      } else {
        await createPatient(formData).unwrap();
      }
      navigate("/patients");
    } catch (error) {
      console.error("Помилка при збереженні пацієнта:", error);
    }
  };

  const isSubmitting = isAdding || isUpdating;
  const isSubmitError = isAddError || isUpdateError;

  if (isPatientLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"></div>
          <p className="text-lg text-gray-600">Завантаження...</p>
        </div>
      </div>
    );
  }

  if (isPatientError) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-600 font-medium mb-4">
            Помилка завантаження пацієнта
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Повернутись до списку
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        {id ? "Редагування пацієнта" : "Додавання пацієнта"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* ПІБ */}
        <div>
          <label className="block text-sm font-medium text-gray-700">ПІБ</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="Введіть повне ім'я"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Дата народження
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Стать
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2"
          >
            <option value="">Оберіть стать</option>
            <option value="male">Чоловіча</option>
            <option value="female">Жіноча</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Телефон
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="+380..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="example@gmail.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Адреса
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="м. Київ, вул. ..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Примітки
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="Додаткові дані, алергії тощо..."
          ></textarea>
        </div>

        {isSubmitError && (
          <div className="md:col-span-2 text-center text-red-600">
            Помилка при збереженні. Спробуйте ще раз.
          </div>
        )}

        <div className="md:col-span-2 flex justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate("/patients")}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Скасувати
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-lg text-white transition ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting
              ? "Збереження..."
              : id
                ? "Оновити пацієнта"
                : "Додати пацієнта"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PatientsForm;
