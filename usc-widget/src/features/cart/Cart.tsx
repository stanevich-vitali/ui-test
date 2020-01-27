import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { RootState } from "../../app/rootReducer";

export const Cart: FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() =>
                    dispatch(
                        addToCart({
                            id: Math.random(),
                            text: "description"
                        })
                    )
                }
            >
                Add to cart
            </button>
            <div>Items in cart: {cart.products.length}</div>
            {cart.products.map(product => (
                <div key={product.id}>
                    {product.id}: {product.text}
                </div>
            ))}
        </div>
    );
};
