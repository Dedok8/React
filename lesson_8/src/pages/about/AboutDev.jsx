import { useNavigate } from "react-router";

function AboutDev() {
  const navigate = useNavigate();
  return (
    <>
      AboutDev
      <hr />
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}

export default AboutDev;
