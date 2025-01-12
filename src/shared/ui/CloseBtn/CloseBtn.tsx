import "./CloseBtn.scss";

const CloseBtn = ({ closeFn }: { closeFn: any }) => {
  return <div onClick={closeFn} className="close-btn"></div>;
};

export default CloseBtn;
