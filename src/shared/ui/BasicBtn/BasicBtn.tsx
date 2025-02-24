import "./BasicBtn.scss";

const BasicBtn = ({
  title,
  clickFn,
  bg,
}: {
  title: string;
  clickFn?: any;
  bg?: string;
}) => {
  return (
    <div className="basic-btn">
      <button style={{ background: bg }} onClick={clickFn}>
        {title}
      </button>
    </div>
  );
};

export default BasicBtn;
