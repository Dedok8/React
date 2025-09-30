import { useNavigate } from "react-router";

function AboutApp() {
  const navigate = useNavigate();
  return (
    <>
      AboutApp
      <hr />
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}

export default AboutApp;
