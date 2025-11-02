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
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-violet-50/20 to-fuchsia-50/20 dark:from-gray-900 dark:via-violet-950/20 dark:to-fuchsia-950/20 p-10 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 mt-10 transition-colors duration-300 backdrop-blur-sm relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-400/10 to-fuchsia-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-400/10 to-violet-400/10 rounded-full blur-3xl -z-10"></div>

      {/* Заголовок */}
      <div className="text-center mb-10 relative">
        <div className="inline-block">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400 mb-2">
            {id ? "✏️ Редагування пацієнта" : "🏥 Додавання пацієнта"}
          </h1>
          <div className="h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-full"></div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200"
      >
        {/* ПІБ */}
        <div className="group">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">👤</span>
            ПІБ *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="Введіть повне ім'я"
          />
        </div>

        {/* Дата народження */}
        <div className="group">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">🎂</span>
            Дата народження *
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
          />
        </div>

        {/* Стать */}
        <div className="group">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">⚧</span>
            Стать *
          </label>
          <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md appearance-none cursor-pointer"
            >
              <option value="">Оберіть стать</option>
              <option value="male">👨 Чоловіча</option>
              <option value="female">👩 Жіноча</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </div>
          </div>
        </div>

        {/* Телефон */}
        <div className="group">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">📱</span>
            Телефон *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="+380..."
          />
        </div>

        {/* Email */}
        <div className="group">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">📧</span>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="example@gmail.com"
          />
        </div>

        {/* Адреса */}
        <div className="group">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">📍</span>
            Адреса
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="м. Київ, вул. ..."
          />
        </div>

        {/* Примітки */}
        <div className="md:col-span-2 group">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">📝</span>
            Примітки
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
            placeholder="Додаткові дані, алергії тощо..."
          ></textarea>
        </div>

        {/* Помилка */}
        {isSubmitError && (
          <div className="md:col-span-2 text-center bg-red-50/50 dark:bg-red-900/20 border border-red-200/50 dark:border-red-800/50 rounded-2xl p-4">
            <span className="text-red-600 dark:text-red-400 font-medium flex items-center justify-center gap-2">
              <span className="text-xl">⚠️</span>
              Помилка при збереженні. Спробуйте ще раз.
            </span>
          </div>
        )}

        {/* Кнопки */}
        <div className="md:col-span-2 flex justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => navigate("/patients")}
            className="px-8 py-3.5 rounded-2xl border-2 border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-md backdrop-blur-sm"
          >
            ← Скасувати
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3.5 rounded-2xl text-white font-bold transition-all duration-300 shadow-lg relative overflow-hidden ${
              isSubmitting
                ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-pink-700 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/30"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Збереження...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {id ? "💾 Оновити пацієнта" : "✨ Додати пацієнта"}
              </span>
            )}
            {!isSubmitting && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PatientsForm;
