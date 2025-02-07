import { ClipLoader } from "react-spinners";
import "./BasicLoader.scss";

const BasicLoader = () => {
  return (
    <div className="basic-loader">
      <ClipLoader size={"4vw"} />
    </div>
  );
};

export default BasicLoader;
