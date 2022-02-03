import { useDispatch } from 'react-redux'
import { types } from '../../store/types';
const Text = ({ children = "", group = "", name = "", href = "" }) => {
  const dispatch = useDispatch();
  const doubleClick = () => {
    dispatch({ type: types.updateText, payload: { open: true, clickText: children } })
  };
  if (href) {
    return (
      <span onDoubleClick={doubleClick}>
        <a href={href}>{children}</a>
      </span>
    );
  }
  return <span onDoubleClick={doubleClick}>{children}</span>;
};
export default Text;
