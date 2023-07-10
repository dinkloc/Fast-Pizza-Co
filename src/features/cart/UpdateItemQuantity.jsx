import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice';
const UpdateItemQuantity = (props) => {
  const dispatch = useDispatch();
  const handleIncreseItem = () => {
    dispatch(increaseItemQuantity(props.pizzaId));
  };
  const handleDecreseItem = () => {
    dispatch(decreaseItemQuantity(props.pizzaId));
  };
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={handleDecreseItem} type="round">
        -
      </Button>
      <span className="text-sm font-medium">{props.currentQuantity}</span>
      <Button onClick={handleIncreseItem} type="round">
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
