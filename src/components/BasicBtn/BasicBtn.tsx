const BasicBtn = ({
  title,
  clickFn,
}: {
  title: string;
  clickFn?: () => void;
}) => {
  return (
    <div className="basic-btn">
      <button onClick={clickFn}>{title}</button>
    </div>
  );
};

export default BasicBtn;
