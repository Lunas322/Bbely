import LinBar from "../common/LineBar";
import Banner from "../components/Banner";
import Category from "../components/Cartegory/Category";
import Header from "../common/Header";
import ItemContainer from "../components/ItemList/ItemContainer";
import MenuBar from "../common/MenuBar";
import Recommend from "../components/Recommend";

function Home() {
    return(
        <>
        <div className="w-full flex flex-col items-center">
            <Header Page="home"/>
            <Banner/>
            <Category/>
            <LinBar/>
            <Recommend userName="허성진" sponSoerd="Tomato"/>
            <ItemContainer/>
            <MenuBar/>
        </div>
        </>
    )

}

export default Home;