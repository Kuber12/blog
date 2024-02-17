/**
 * This is a React component that provides a search context to its children components.
 * @returns The SearchContentProvider component is returning the SearchContext.Provider component with
 * the children prop passed as its children.
 */
import React, { useContext, useState } from "react";
import SearchContext from "./SearchContext";
const SearchContentProvider = ({ children }) => {
  const [searchTxt, SetSearchTxt] = useState("");
  const [inputFocued, setIsInputFocused] = useState(false);
  return (
    <SearchContext.Provider
      value={{ searchTxt, SetSearchTxt, inputFocued, setIsInputFocused }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContentProvider;
