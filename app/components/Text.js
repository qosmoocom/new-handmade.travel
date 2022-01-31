const Text = ({ children = "", group = "", name = "" }) => {
  const changeTextHandler = () => {};
  return <span onDoubleClick={changeTextHandler}>{children}</span>;
};
export default Text;
