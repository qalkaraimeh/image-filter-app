import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [tabFilter, setTabFilter] = useState("instaFilter");
  const [filter, setFilter] = useState("");
  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });
  console.log(customFilter);
  return (
    <FilterContext.Provider
      value={{
        tabFilter,
        setTabFilter,
        filter,
        setFilter,
        customFilter,
        setCustomFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
