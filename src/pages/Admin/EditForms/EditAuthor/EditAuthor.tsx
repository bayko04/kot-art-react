import { useEffect, useState } from "react";
import "./EditAuthor.scss";
import BasicBtn from "../../../../components/BasicBtn/BasicBtn";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import { useGetAuthors } from "../EditPainting/api/useAuthors";
import { useParams } from "react-router-dom";
import { useEditAuthor } from "./api/useEditAuthor";
import { useDeleteAuthor } from "./api/useDeleteAuthor";
import BasicLoader from "../../../../shared/ui/BasicLoader/BasicLoader";

const EditAuthor = () => {
  const { data: authorsData, isFetching } = useGetAuthors();
  const [data, setData] = useState<any>({});
  const [formState, setFormState] = useState({
    name: "",
    bio: "",
    avatar: "",
  });
  const params = useParams();
  const { mutate: editAuthorFn } = useEditAuthor();
  const { mutate: deleteFn } = useDeleteAuthor();

  useEffect(() => {
    const filtered = authorsData.filter(
      (item: any) => item.id === Number(params.id)
    );
    setData(filtered);
  }, [params]);

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
    editAuthorFn({ data: formState, id: Number(params.id) });
  };

  const handleDelete = () => {
    deleteFn({ id: Number(params.id) });
  };

  return (
    <div className="edit-author">
      <div className="edit-author__header">
        <h1 className="edit-author__title">Create artist</h1>
      </div>

      {isFetching ? (
        <BasicLoader />
      ) : (
        <form className="edit-author__form">
          <div className="">
            <label htmlFor="name">Artists fullname</label>
            <input
              type="text"
              name="name"
              value={formState.name || data[0]?.name}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="name">Artists bio</label>
            <textarea
              name="bio"
              onChange={handleChange}
              value={formState.bio || data[0]?.bio}
              id=""
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="image">Upload artists picture</label>
            <Uploader onFileChange={handleFileChange} />
          </div>
        </form>
      )}

      <div className="edit-author__btns">
        <BasicBtn clickFn={onSubmit} title="Edit" />
        <BasicBtn bg="red" clickFn={handleDelete} title="Delete" />
      </div>
    </div>
  );
};

export default EditAuthor;
