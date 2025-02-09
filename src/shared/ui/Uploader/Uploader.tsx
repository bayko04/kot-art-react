import "./Uploader.scss";
import uploaderImg from "../../../images/svg/admin/upload.svg";
import { useState } from "react";
import img2 from "../../../images/content/authBg.png";

const Uploader = ({ onFileChange }: { onFileChange?: any }) => {
  const [fileName, setFileName] = useState("");

  const handleOnChange = (e: any) => {
    onFileChange(e);

    setFileName(e.target.value);
  };

  return (
    <div className="uploader">
      <div className="uploader__row">
        <div className="uploader__content">
          <div className="uploader__upload">
            <input
              name="picture"
              onChange={handleOnChange}
              type="file"
              accept="image/*"
            />
            <img src={uploaderImg} alt="" />
          </div>
        </div>
        <p>{fileName}</p>
        {/* <div className="uploader__img">
          <img src={img2} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Uploader;
