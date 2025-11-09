import Add_Edit_DreamBtn from "@/features/Add_edit-dream/ui/Add_Edit_DreamBtn";
import { useParams } from "react-router";

function EditPage() {
  const { id } = useParams();

  return <Add_Edit_DreamBtn id={id} />;
}

export default EditPage;
