import { useDispatch } from "react-redux";

import { addToCart } from "../store/cart-slice";
import { useCartDispatch } from "../store/hooks";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  //const dispatch = useDispatch();

  const dispatch = useCartDispatch();
  function handleAddToCart() {
    /**
     * And here you now need an action object.Now I could create one, on my own, but here TypeScript
      is actually just expecting a type property.now I can also add a payload property to action and give it any type.
      Instead of creating that on my own, it's better to use this 'add to cart' function. Which is exported by 
      the cartSlice file.
     */
    //dispatch({ type: "abc", payload: { id: 1 } });

    /**
     * Now, it's actually recommended to not use the useDispatch hook like this though,
      but to instead create your own version of that hook,for extra type safety. see figure 1.
     */

    dispatch(addToCart({ id, title, price }));
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
