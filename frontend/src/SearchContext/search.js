import { useContext, createContext } from "react";

export const SearchContext = createContext({
  handleInputFocus: () => {},
  handleSearch: () => {},
  handleInputBlur: () => {},
});
export const SearchProvider = SearchContext.Provider;

export default function useSearch() {
  return useContext(SearchContext);
}
