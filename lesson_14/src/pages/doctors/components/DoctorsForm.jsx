import {
  useCreateDoctorMutation,
  useGetDoctorsByIdQuery,
  useUpdateDoctorMutation,
} from "@/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function DoctorsForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctorForm, setDoctorForm] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    specialization: "",
    room: "",
    notes: "",
  });

  const {
    data: doctor,
    isLoading: isDoctorsLoading,
    isError: isDoctorsError,
  } = useGetDoctorsByIdQuery(id, { skip: !id });

  const [createDoctor, { isLoading: isAdding, isError: isAddError }] =
    useCreateDoctorMutation();

  const [updateDoctor, { isLoading: isUpdating, isError: isUpdateError }] =
    useUpdateDoctorMutation();

  useEffect(() => {
    if (doctor) {
      setDoctorForm({
        fullName: doctor.fullName || "",
        phone: doctor.phone || "",
        email: doctor.email || "",
        specialization: doctor.specialization || "",
        room: doctor.room || "",
        notes: doctor.notes || "",
      });
    }
  }, [doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateDoctor({ id, data: doctorForm }).unwrap();
      } else {
        await createDoctor(doctorForm).unwrap();
      }
      navigate("/admin/doctors");
    } catch (error) {
      console.error("Ошибка при сохранении доктора:", error);
    }
  };

  const isSubmitting = isAdding || isUpdating;
  const isSubmitError = isAddError || isUpdateError;

  if (isDoctorsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"></div>
          <p className="text-lg text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (isDoctorsError) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-600 font-medium mb-4">
            Ошибка загрузки доктора
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Вернуться к списку
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/20 dark:from-gray-900 dark:via-emerald-950/20 dark:to-teal-950/20 p-10 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 mt-10 transition-colors duration-300 backdrop-blur-sm relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-400/10 to-emerald-400/10 rounded-full blur-3xl -z-10"></div>

      {/* Заголовок */}
      <div className="text-center mb-10 relative">
        <div className="inline-block">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 mb-2">
            {id ? "✏️ Редагування лікаря" : "👨‍⚕️ Додавання лікаря"}
          </h1>
          <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full"></div>
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
            value={doctorForm.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="Введіть повне ім'я"
          />
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
            value={doctorForm.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
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
            value={doctorForm.email}
            onChange={handleChange}
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="example@gmail.com"
          />
        </div>

        {/* Спеціалізація */}
        <div className="group">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">🩺</span>
            Спеціалізація *
          </label>
          <input
            type="text"
            name="specialization"
            value={doctorForm.specialization}
            onChange={handleChange}
            required
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="Кардіолог, терапевт..."
          />
        </div>

        {/* Кабінет */}
        <div className="group md:col-span-2">
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <span className="text-lg">🚪</span>
            Кабінет
          </label>
          <input
            type="text"
            name="room"
            value={doctorForm.room}
            onChange={handleChange}
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3.5 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="№ 101"
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
            value={doctorForm.notes}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
            placeholder="Додаткові дані або графік прийому..."
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
            onClick={() => navigate("/admin/doctors")}
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
                : "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-500/30"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Збереження...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {id ? "💾 Оновити лікаря" : "✨ Додати лікаря"}
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

export default DoctorsForm;
