import style from "./Error.module.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    //no-background esta en App.css
    <div className="no-background">
      <h1 className={style.error_h1}>44</h1>
      <button onClick={() => navigate("/home")} className={style.error_button}>
        Go to Home
      </button>
    </div>
  );
};

export default Error;
