import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

const DeleteItem = (props) => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(deleteItem(props.pizzaId))} type="small">
      Delete
    </Button>
  );
};

export default DeleteItem;
