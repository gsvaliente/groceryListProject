export const SingleItem = ({
  id,
  name,
  completed,
  handleRemoveItem,
  handleEditCompleted,
}) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleEditCompleted(id)}
      />
      <p
        style={{
          textDecoration: completed ? 'line-through' : '',
          textTransform: 'capitalize',
        }}
      >
        {name}
      </p>
      <button
        type="button"
        onClick={() => handleRemoveItem(id)}
        className="btn remove-btn"
      >
        Delete
      </button>
    </div>
  );
};
