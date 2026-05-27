import { FaUserAlt } from "react-icons/fa";
import Header from "../common/Header";
import LinBar from "../common/LineBar";
import { Item } from "../types/items";
import MenuBar from "../common/MenuBar";
import UserMenu from "../components/UserMenu";

type userProps = {
  userName: string;
  cartData: Item[];
};

function User({ userName, cartData }: userProps) {
  return (
    <>
      <div className="w-full h-fit flex flex-col items-center">
        <Header text="마이페이지" />
        <div className="w-150 h-fit gap-3 mt-10 pt-27 flex justify-center items-center flex-col">
          <div className="w-22 h-22 rounded-full bg-[#77777747] flex justify-center items-center">
            <FaUserAlt className="w-15 h-15 text-white" />
          </div>
          <h2 className="font-semibold text-2xl mb-10">{userName}</h2>
        </div>
        <LinBar />
        <UserMenu cartData={cartData}/>
        <MenuBar/>
      </div>
    </>
  );
}

export default User;
