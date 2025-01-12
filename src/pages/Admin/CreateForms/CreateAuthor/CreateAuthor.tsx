import { useState } from "react";
import "./CreateAuthor.scss";
import BasicBtn from "../../../../components/BasicBtn/BasicBtn";
import Uploader from "../../../../shared/ui/Uploader/Uploader";

const CreateAuthor = () => {
  //   const { mutate: createCategoryFn, isSuccess } = useCreateCategory();

  const [formState, setFormState] = useState({
    title: "",
    image: null,
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
      image: e.target.files[0],
    });
  };

  //   const onSubmit = () => {
  //     createCategoryFn(formState);
  //   };

  //   if (isSuccess) {
  //     return <h1>Картинка успешно создана!</h1>;
  //   }
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
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="name">Artists bio</label>
          <textarea name="" id=""></textarea>
        </div>
        <div className="">
          <label htmlFor="image">Upload artists picture</label>
          {/* <input type="file" name="image" onChange={handleFileChange} /> */}
          <Uploader />
        </div>
      </form>

      <div className="create-author__btns">
        {/* <button type="button">Создать</button> */}
        <BasicBtn title="Create" />
      </div>
    </div>
  );
};

export default CreateAuthor;
