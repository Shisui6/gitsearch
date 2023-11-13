import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Home = () => {

  return ( 
    <div className="w-full h-screen text-center pt-44" style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}>
      <h1 className="text-4xl text-gray-800 font-extrabold mb-5 sm:text-5xl">Discover GitHub Repositories</h1>
      <p className=" w-1/2 my-0 mx-auto text-[#4b5563]">Welcome to GitSearch. Here you can simply enter the username of a GitHub user to view their repositories. Try it using the search bar below</p>
      <div className="mt-10 w-1/4 my-0 mx-auto bg-white h-12 rounded-3xl border-[1.2px] border-gray-300 focus-within:border-purple-600 flex justify-between py-1 pr-1 items-center min-w-[285px]">
        <div>
          <AiOutlineSearch className="inline-block text-gray-400 ml-3 mr-3" size={22} />
          <input className=" h-full border-none outline-none"  type="text" placeholder="Enter a username" />
        </div>
        <div className=" bg-purple-600 w-9 h-9 rounded-full flex items-center justify-center hover:bg-purple-800 cursor-pointer duration-150">
          <BsArrowRightShort className=" text-white" size={22} />
        </div>
      </div>
    </div>
  );
}
 
export default Home;