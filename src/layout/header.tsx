import { useContext } from "react";
import Switch from "../components/header/DarkLightToggle"
import SearchBar from "../components/header/SearchBar"
import { SearchContext } from "../context/SearchContext";
import { TypeAnimation } from "react-type-animation";

interface IHeaderProps {
    lat: number
    lon: number
}

const Header = (props: IHeaderProps) => {
    const { setIsSearch } = useContext(SearchContext);
    const { lat, lon } = props
    return (
        <>
            {lat === 0 && lon === 0
                ?
                (

                    <div className="h-[100vh] flex flex-col justify-center items-center gap-10">
                        <TypeAnimation
                            sequence={[
                                'My Weather App', 1500, 'Find Weather of any City', 1500, 'Just Type and Search', 1500
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block', color: 'white', textAlign: 'center', fontWeight: 'bold' }}
                            repeat={Infinity}
                        />
                        <div className="flex p-5 justify-center items-center sm:gap-20">
                            <SearchBar
                                setIsSearch={setIsSearch}
                            />
                            <Switch />
                        </div>
                    </div>
                )
                :
                (
                    <>
                        <div className="flex p-5 justify-center items-center sm:gap-20">
                            <SearchBar
                                setIsSearch={setIsSearch}
                            />
                            <Switch />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Header