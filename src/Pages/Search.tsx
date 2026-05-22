import { useState } from "react";
import Header from "../common/Header";
import MenuBar from "../common/MenuBar";
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