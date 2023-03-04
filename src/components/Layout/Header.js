import mealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="meals table" />
      </div>
    </>
  );
};

export default Header;
