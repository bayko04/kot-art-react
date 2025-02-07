import { useEffect, useState } from "react";
import { useEditCategory } from "./api/useEditCategory";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../components/BasicBtn/BasicBtn";
import "./EditCategory.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDeleteCategory } from "./api/useDeleteCategory";
import { useGetCategories } from "../EditPainting/api/useAuthors";
import BasicLoader from "../../../../shared/ui/BasicLoader/BasicLoader";

const EditCategory = () => {
  const [data, setData] = useState<any>({});
  // const { data: categoryData } = useSelector((state: any) => state.category);
  const { data: categoryData, isFetching } = useGetCategories();
  const { mutate: editCategoryFn, isSuccess } = useEditCategory();
  const { mutate: deleteFn } = useDeleteCategory();
  const params = useParams();

  useEffect(() => {
    const filtered = categoryData.filter(
      (item: any) => item.id === Number(params.id)
    );
    setData(filtered);
  }, []);

  const [formState, setFormState] = useState({
    title: "",
    image: "",
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
    editCategoryFn({ data: formState, id: Number(params.id) });
  };

  const handleDelete = () => {
    deleteFn({ id: Number(params.id) });
  };

  console.log(formState);

  if (isSuccess) {
    return <h1>Картинка успешно создана!</h1>;
  }

  return (
    <div className="edit-category">
      <div className="edit-pain__header">
        <h1 className="edit-category__title">Create category</h1>
      </div>

      {isFetching ? (
        <BasicLoader />
      ) : (
        <form className="edit-category__form">
          <div className="">
            <label htmlFor="name">Category name</label>
            <input
              type="text"
              name="title"
              value={formState.title || data[0]?.title}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="image">Select a painting</label>
            {/* <input type="file" name="image" onChange={handleFileChange} /> */}
            <Uploader onFileChange={handleFileChange} />
          </div>
        </form>
      )}

      <div className="edit-category__btns">
        {/* <button type="button" onClick={onSubmit}>
          Создать
        </button> */}
        <BasicBtn clickFn={onSubmit} title="Edit" />
        <BasicBtn bg="red" clickFn={handleDelete} title="Delete" />
      </div>
    </div>
  );
};

export default EditCategory;
