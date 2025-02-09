import { useState } from "react";
import "./CreateAuthor.scss";
import BasicBtn from "../../../../components/BasicBtn/BasicBtn";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import { useCreateAuthor } from "./api/useCreateAuthor";
import { useNavigate } from "react-router-dom";
import BasicLoader from "../../../../shared/ui/BasicLoader/BasicLoader";
import { ClipLoader } from "react-spinners";

const CreateAuthor = () => {
  const navigate = useNavigate();
  const { mutate: createAuthorFn, isSuccess, isPending } = useCreateAuthor();
  const [formState, setFormState] = useState({
    name: "",
    bio: "",
    avatar: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFileChange = (e: any) => {
    setFormState({
      ...formState,
      avatar: e.target.files[0],
    });
  };

  const onSubmit = () => {
    createAuthorFn(formState);
  };

  if (isSuccess) {
    navigate("/admin/authors-list");
  }
  return (
    <div className="create-author">
      <div className="create-author__header">
        <h1 className="create-author__title">Create artist</h1>
      </div>

      <form className="create-author__form">
        <div className="">
          <label htmlFor="name">Artists fullname</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="name">Artists bio</label>

          <textarea
            value={formState.bio}
            onChange={handleChange}
            name="bio"
            id=""
          ></textarea>
        </div>
        <div className="">
          <label htmlFor="image">Upload artists picture</label>
          {/* <input type="file" name="image" onChange={handleFileChange} /> */}
          <Uploader onFileChange={handleFileChange} />
        </div>
      </form>

      <div className="create-author__btns">
        {isPending ? (
          <ClipLoader />
        ) : (
          <BasicBtn clickFn={onSubmit} title="Create" />
        )}
      </div>
    </div>
  );
};

export default CreateAuthor;
