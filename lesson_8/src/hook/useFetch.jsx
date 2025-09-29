import { useCallback, useState } from "react";
import axios from "axios";
import apiRoutes from "../api/apiRoutes";

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeacher = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(apiRoutes.getAllTeachers);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addTeacher = async (teacherData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(apiRoutes.addTeacher, teacherData);
      setData((prev) => [...prev, res.data]);
      return res.data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateTeacher = async (id, updateData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.put(apiRoutes.updateTeacher(id), updateData);
      const updated = res.data;
      setData((prev) =>
        prev.map((t) => (String(t.id) === String(id) ? updated : t))
      );
      return updated;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTeacher = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(apiRoutes.deleteTeacher(id));
      setData((prev) => prev.filter((t) => String(t.id) !== String(id)));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getTeacherById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(apiRoutes.getTeacherById(id));
      return res.data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchTeacher,
    addTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherById,
  };
}

export default useFetch;
