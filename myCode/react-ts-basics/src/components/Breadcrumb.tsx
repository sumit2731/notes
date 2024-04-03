// import  from "./assets/slash.png";
import { Link } from "react-router-dom";

const SlashImg = "";

export default function Breadcrumb() {
  return (
    <div className="bg-white ">
      <ul className=" flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <Link
          to={"home"}
          className=" cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md"
        >
          Home
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to={"products"}
          className=" cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300"
        >
          Products
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to={"about"}
          className=" cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300"
        >
          About
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to={"faq"}
          className=" cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300"
        >
          FAQ
        </Link>
      </ul>
    </div>
  );
}
