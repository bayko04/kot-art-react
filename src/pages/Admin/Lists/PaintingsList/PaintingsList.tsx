import { FC } from "react";
import { useGetPaintings } from "./api/usePaintings";
import { useNavigate } from "react-router-dom";
import someImg from "../../../shared/assets/images/content/back.jpg";
import CreateHeader from "../../ui/CreateHeader/CreateHeader";
import ListTemplate from "../../../../shared/ui/ListTemplate/ListTemplate";
import { useDispatch } from "react-redux";

const PaintingsList: FC = () => {
  const { data, isFetching } = useGetPaintings();
  const navigate = useNavigate();

  const handleCreatePainting = () => {
    navigate("/admin/create-painting");
  };

  return (
    <div className="paintings-list">
      <CreateHeader
        title="Paintings"
        btnText="Create painting"
        handleClick={handleCreatePainting}
      />
      {/* 
      <div className="paintings-list__cards">
        {data.map((item: IPainting) => (
          <PaintingCard
            image={item.image}
            title={item.title}
            key={item.id}
            price={item.price}
            currency={item.currency}
            description={item.description}
            follow={item.follow}
          />
        ))}
      </div> */}

      <ListTemplate isFetching={isFetching} data={data} admin />
    </div>
  );
};

export default PaintingsList;
