import React, { useContext, useState } from 'react'
import SearchContext from './SearchContext'
const SearchContentProvider = ({children}) => {
  const [searchTxt,SetSearchTxt] = useState("Helo");
  const [inputFocued,setIsInputFocused] = useState(false);
  return (
    <SearchContext.Provider value={{searchTxt,SetSearchTxt,inputFocued,setIsInputFocused}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContentProvider
