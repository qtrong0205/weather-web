
import Switch from "../components/header/DarkLightToggle"
import SearchBar from "../components/header/SearchBar"

const Header = () => {
    return (
        <div className="flex p-5 justify-center items-center sm:gap-20">
            <SearchBar />
            <Switch />
        </div>
    )
}

export default Header