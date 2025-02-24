import { useState } from "react";
import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import "./CreateAdmin.scss";

const CreateAdmin = () => {
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
    <div className="create-admin">
      <div className="create-admin__header">
        <h1 className="create-admin__title">Give role</h1>
      </div>

      <form className="create-admin__form">
        <div className="">
          <label htmlFor="name">Users</label>
          <select name="" id="">
            <option value="">superkolo2017@gmail.com</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="name">Roles</label>
          <select name="" id="">
            <option value="">User</option>
            <option value="">Artist</option>
            <option value="">Admin</option>
          </select>
        </div>
      </form>

      <div className="create-admin__btns">
        {/* <button type="button">Создать</button> */}
        <BasicBtn title="Save" />
      </div>
    </div>
  );
};

export default CreateAdmin;
