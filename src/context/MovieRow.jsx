import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

const MovieRow = () => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  console.log(userContext.currentUser, cartContext.counter);

  return (
    <div>
      <h6>Movie Row heading</h6>
      <p>
        Logged in User:
        {userContext.currentUser ? userContext.currentUser.name : ""}
      </p>
    </div>
  );
};

export default MovieRow;
