import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import RecentSearch from "../components/RecentSearch";
import SearchLank from "../components/SearchLank";

function Search () {
    return(
        <>
        <div className="w-full h-screen flex flex-col items-center">
            <Header Page="search" />
            <RecentSearch/>
            <SearchLank/>
            <MenuBar/>
        </div>
        </>
    )
}

export default Search