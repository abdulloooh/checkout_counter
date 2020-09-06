import React, { useContext } from "react";
import UserContext from "./userContext";

const MovieRow = () => {
  const userContext = useContext(UserContext);

  console.log(userContext.currentUser);

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
