import "./Uploader.scss";
import uploaderImg from "../../../images/svg/admin/upload.svg";
import { useState } from "react";
import img2 from "../../../images/content/authBg.png";

const Uploader = ({
  onFileChange,
  multiply,
  images,
}: {
  onFileChange?: any;
  multiply?: boolean;
  images?: string[];
}) => {
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
              multiple={multiply}
              name="picture"
              onChange={handleOnChange}
              type="file"
              accept="image/*"
            />
            <img src={uploaderImg} alt="" />
          </div>
        </div>
        {/* <p>{fileName}</p> */}
        <p>Uploaded</p>

        {/* <div className="uploader__images">
          {images?.map((img: any, index: number) => (
            <div key={index} className="image-preview">
              <img
                src={URL.createObjectURL(img.image)}
                alt={`Preview ${index}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Uploader;
