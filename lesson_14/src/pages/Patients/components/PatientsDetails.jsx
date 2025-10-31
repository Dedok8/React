import { useGetPatientsByIdQuery } from "@/api";
import { useNavigate, useParams } from "react-router";

function PatientsDetails() {
  const { id } = useParams();
  const {
    data: item,
    isLoading,
    isError,
  } = useGetPatientsByIdQuery(id, {
    skip: !id,
  });
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="text-center py-8 text-gray-500 font-medium">
        Завантаження деталей...
      </div>
    );

  if (isError)
    return (
      <div className="text-center py-8 text-red-600 font-medium">
        Помилка завантаження деталей.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Деталі пацієнта</h2>

      <div className="space-y-2">
        <p>
          <span className="font-semibold text-gray-700">ПІБ:</span>{" "}
          {item.fullName}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Дата народження:</span>{" "}
          {item.birthDate}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Стать:</span>{" "}
          {item.gender}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Телефон:</span>{" "}
          {item.phone}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          {item.email}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Адреса:</span>{" "}
          {item.address}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Примітки:</span>{" "}
          {item.notes || "Приміток нема"}
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
        >
          Повернутись
        </button>
      </div>
    </div>
  );
}

export default PatientsDetails;
