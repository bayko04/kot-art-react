import React, { useState } from "react";
import { useGetAuthors, useGetCategories } from "./api/useAuthors";
import { useCreatePaint } from "./api/useCreatePaint";
import "./CreatePainting.scss";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../components/BasicBtn/BasicBtn";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const CreatePainting = () => {
  const { data: authorsList } = useGetAuthors();
  const { data: categoriesList } = useGetCategories();
  const { mutate: createPaintFn, isSuccess, isPending } = useCreatePaint();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<any>({
    title: "",
    price: "",
    currency: "",
    description: "",
    width: "",
    height: "",
    author: "",
    categories: "",
    images: [],
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
      images: [
        {
          is_main: true,
          image: e.target.files[0],
        },
      ],
    });
  };

  const onSubmit = () => {
    createPaintFn(formState);
  };

  if (isSuccess) {
    navigate("/admin/paintings-list");
  }

  return (
    <div className="create-paint">
      <div className="create-pain__header">
        <h1 className="create-paint__title">Create painting</h1>
      </div>

      <form className="create-paint__form">
        <div className="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={formState.price}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="currency">Currency</label>

          <select
            name="currency"
            value={formState.currency}
            onChange={handleChange}
          >
            <option value="USD">USD</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            value={formState.width}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            value={formState.height}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="author">Select an artist</label>
          <select
            name="author"
            value={formState.author}
            onChange={handleChange}
          >
            <option value="">Select an artist</option>
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
            name="categories"
            value={formState.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {categoriesList?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label htmlFor="image">Select a paint</label>
          {/* <input type="file" name="image" onChange={handleFileChange} /> */}
          <Uploader onFileChange={handleFileChange} />
        </div>
      </form>

      <div className="create-paint__btns">
        {isPending ? (
          <ClipLoader />
        ) : (
          <BasicBtn clickFn={onSubmit} title="Create" />
        )}
      </div>
    </div>
  );
};

export default CreatePainting;
