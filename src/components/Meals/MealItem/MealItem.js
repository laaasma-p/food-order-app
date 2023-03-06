const MealItem = ({ name, description, price }) => {
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>${price.toFixed(2)}</div>
      </div>
    </li>
  );
};

export default MealItem;
