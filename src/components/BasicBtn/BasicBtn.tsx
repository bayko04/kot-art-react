const BasicBtn = ({
  title,
  clickFn,
  bg,
}: {
  title: string;
  clickFn?: () => void;
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
