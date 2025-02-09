import React, { useEffect, useState } from "react";
import { useGetAuthors, useGetCategories } from "./api/useAuthors";
import "./EditPainting.scss";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../components/BasicBtn/BasicBtn";
import { useGetPaintings } from "../../Lists/PaintingsList/api/usePaintings";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPaint } from "./api/useGetPaint";
import { useDeletePaint } from "./api/useDeletePaint";
import BasicLoader from "../../../../shared/ui/BasicLoader/BasicLoader";
import {
  setIsDelete,
  setIsDeleteUrl,
} from "../../../../shared/store/reducers/usePopupsStore";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useEditPaint } from "./api/useEditPaint";

const EditPainting = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data: authorsList } = useGetAuthors();
  const { data: categoriesList } = useGetCategories();
  const { mutate: editPaintFn, isSuccess, isPending } = useEditPaint();
  const { data: paintingData } = useGetPaint(Number(params.id));
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    title: "",
    price: "",
    currency: "",
    description: "",
    width: "",
    height: "",
    author: "",
    category: "",
    image: null,
  });

  // useEffect(() => {
  //   const filtered = paintingsList.filter(
  //     (item: any) => item.id === Number(params.id)
  //   );
  //   setData(filtered);
  // }, [isSuccessPaintList]);

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
    editPaintFn({ data: formState, id: Number(params.id) });
  };

  const handleDelete = () => {
    dispatch(setIsDelete(true));
    if (params.id) {
      dispatch(setIsDeleteUrl(`/painting/admin/delete/${+params.id}/`));
    }
  };

  if (isSuccess) {
    navigate("/admin/paintings-list");
  }

  return (
    <div className="edit-paint">
      <div className="edit-pain__header">
        <h1 className="edit-paint__title">Create painting</h1>
      </div>

      {false ? (
        <BasicLoader />
      ) : (
        <form className="edit-paint__form">
          <div className="">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="title"
              value={formState.title || paintingData?.title}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={formState.price || paintingData?.price}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="currency">Currency</label>
            <input
              type="text"
              name="currency"
              value={formState.currency || paintingData?.currency}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={formState.description || paintingData?.description}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="width">Width</label>
            <input
              type="text"
              name="width"
              value={formState.width || paintingData?.width}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              value={formState.height || paintingData?.height}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="author">Select an artist</label>
            <select name="author" onChange={handleChange}>
              <option value={paintingData?.author?.name}>
                {paintingData?.author?.name}
              </option>
              {authorsList?.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label htmlFor="category">Select a category</label>
            <select
              name="category"
              value={formState.category}
              onChange={handleChange}
            >
              <option value={paintingData?.categories?.title}>
                {paintingData?.category?.title}
              </option>
              {categoriesList?.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label htmlFor="image">Select a paint</label>

            <Uploader onFileChange={handleFileChange} />
          </div>
        </form>
      )}

      <div className="edit-paint__btns">
        {isPending ? (
          <ClipLoader />
        ) : (
          <>
            <BasicBtn clickFn={onSubmit} title="Edit" />
            <BasicBtn bg="red" clickFn={handleDelete} title="Delete" />
          </>
        )}
      </div>
    </div>
  );
};

export default EditPainting;
