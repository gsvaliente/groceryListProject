import { SingleItem } from './SingleItem';

const Items = ({ items, handleRemoveItem, handleEditCompleted }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            handleRemoveItem={handleRemoveItem}
            handleEditCompleted={handleEditCompleted}
          />
        );
      })}
    </div>
  );
};

export default Items;
