const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </>
  );
};

export default Cart;
