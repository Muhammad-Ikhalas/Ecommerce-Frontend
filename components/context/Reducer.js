import React, { useState } from "react";
import Mycontext from "./Context";

function Reducer(props) {
  const [images, setImages] = useState({
    game: "",
    robot: "",
    drown: "",
  });

  const [cartimages, setCartimages] = useState({
    cartgame: "",
    cartrobot: "",
    cartdrown: "",
  });

  const [countgame, setCountgame] = useState(0);
  const [countrobot, setCountrobot] = useState(0);
  const [countdrown, setCountdrown] = useState(0);

  return (
    <Mycontext.Provider
      value={{
        images,
        setImages,
        countgame,
        setCountgame,
        countrobot,
        setCountrobot,
        countdrown,
        setCountdrown,
        cartimages,
        setCartimages,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
}

export default Reducer;
