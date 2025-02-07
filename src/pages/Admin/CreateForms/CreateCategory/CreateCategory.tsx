import { useState } from "react";
import { useCreateCategory } from "./api/useCreateCategory";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../components/BasicBtn/BasicBtn";
import "./CreateCategory.scss";

const CreateCategory = () => {
  const { mutate: createCategoryFn, isSuccess } = useCreateCategory();

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

  const onSubmit = () => {
    createCategoryFn(formState);
  };

  if (isSuccess) {
    return <h1>Картинка успешно создана!</h1>;
  }

  return (
    <div className="create-category">
      <div className="create-pain__header">
        <h1 className="create-category__title">Create category</h1>
      </div>

      <form className="create-category__form">
        <div className="">
          <label htmlFor="name">Category name</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="image">Select a painting</label>
          {/* <input type="file" name="image" onChange={handleFileChange} /> */}
          <Uploader onFileChange={handleFileChange} />
        </div>
      </form>

      <div className="create-category__btns">
        {/* <button type="button" onClick={onSubmit}>
          Создать
        </button> */}
        <BasicBtn clickFn={onSubmit} title="Create" />
      </div>
    </div>
  );
};

export default CreateCategory;
