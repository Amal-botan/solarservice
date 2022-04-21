import React, { createContext, useState } from "react";

export const FormDisplayContext = createContext();

export const FormDisplayContextProvider = (props) => {

  const [roofLength, setLength] = useState(100);
  const [width, setWidth] = useState(100);

  const lengthSetter = (e) => setLength(e)

  const widthSetter = (e) => setWidth(e)

  return (
    <FormDisplayContext.Provider value={{ roofLength, width, lengthSetter, widthSetter }}>
      {props.children}
    </FormDisplayContext.Provider>
  );
}