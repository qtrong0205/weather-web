import Switch from "../components/header/DarkLightToggle"
import SearchBar from "../components/header/SearchBar"
import type { HeaderProps } from "../helper/prop";



const Header = (props: HeaderProps) => {
    const { isSearch, setIsSearch } = props;
    return (
        <div className="flex p-5 justify-center items-center sm:gap-20">
            <SearchBar
                isSearch={isSearch}
                setIsSearch={setIsSearch}
            />
            <Switch />
        </div>
    )
}

export default Header