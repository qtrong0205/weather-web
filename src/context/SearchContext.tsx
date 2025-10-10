import { createContext } from "react";

interface SearchContextType {
    isSearch: boolean;
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchContextType>({
    isSearch: false,
    setIsSearch: () => { },
});
