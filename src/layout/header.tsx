import Switch from "../components/header/DarkLightToggle"
import SearchBar from "../components/header/SearchBar"
import type { HeaderProps } from "../helper/prop";



const Header = (props: HeaderProps) => {
    const { setIsSearch } = props;
    return (
        <div className="flex p-5 justify-center items-center sm:gap-20">
            <SearchBar
                setIsSearch={setIsSearch}
            />
            <Switch />
        </div>
    )
}

export default Header