import Magnifier from "react-magnifier";

const ImageZoomer: React.FC = () => {
  return (
    <Magnifier
      src="https://via.placeholder.com/600"
      mgWidth={300}
      mgHeight={300}
      zoomFactor={2}
    />
  );
};

export default ImageZoomer;
