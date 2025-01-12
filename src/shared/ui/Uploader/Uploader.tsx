import "./Uploader.scss";
import uploaderImg from "../../../images/svg/admin/upload.svg";

const Uploader = () => {
  const handleFileChange = () => {};

  return (
    <div className="uploader">
      <div className="uploader__upload">
        <input
          name="picture"
          onChange={handleFileChange}
          type="file"
          accept="image/*"
        />
        <img src={uploaderImg} alt="" />
      </div>
    </div>
  );
};

export default Uploader;
