import { useState } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import RecentSearch from "../components/RecentSearch";
import SearchLank from "../components/SearchLank";
import ItemContainer from "../components/ItemList/ItemContainer";

function Search () {
    const [search, setSearch] = useState('')
    console.log(search)
    return(
        <>
        <div className="w-full h-screen flex flex-col items-center">
            <Header Page="search" setSearch={setSearch}/>
            {search ?
            <div className="pt-27"><ItemContainer search={search}/></div>:<div><RecentSearch/> <SearchLank/></div>
            }
            <MenuBar/>
        </div>
        </>
    )
}

export default Search