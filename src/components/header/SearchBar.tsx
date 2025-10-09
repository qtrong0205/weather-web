import { useState } from "react";
import { getCityCoords } from "../../service/api";
import { createData } from "../../helper/getData";
import type { HeaderProps } from "../../helper/prop";

const SearchBar = (props: HeaderProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const { setIsSearch } = props;
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await getCityCoords(inputValue);
        if (res) {
            await createData(res.lat, res.lon);
        }
        setIsSearch(true)
        setInputValue("");
    }

    return (
        <form className="w-full max-w-md px-3 sm:px-0" onSubmit={handleSubmit}>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative flex items-center">
                {/* icon */}
                <div className="absolute left-3 flex items-center pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>

                {/* input */}
                <input
                    id="default-search"
                    placeholder="Search..."
                    required
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg
                     bg-gray-50 pl-10 pr-20 py-2.5 focus:ring-blue-500 focus:border-blue-500 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                     sm:py-3 sm:pr-28 transition-all duration-300"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />

                {/* button */}
                <button
                    type="submit"
                    className="absolute right-2.5 bg-blue-600 text-white font-medium rounded-md 
                     text-sm px-3 py-1.5 sm:px-5 sm:py-2 hover:bg-blue-700 
                     focus:outline-none focus:ring-4 focus:ring-blue-300 
                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
