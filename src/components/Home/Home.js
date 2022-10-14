import React from "react";
import { Link } from "react-router-dom";
import Topics from "../Topics/Topics";
import img1 from "../Images/img.gif"
const Home = () => {
  return (
    <nav>
      <div className="pt-14">
      <div  className="flex justify-center items-center flex-col ">
        <h1 className="font-extrabold text-4xl text-center mt-10 text-cyan-500">A Quize Site Platform for The Digital World!</h1>
        <p className="text-center mt-10 mx-40 w-[60%]   font-bold">Advanced quiz builder that includes SETTINGS and QUESTIONS sections. Settings control WHAT, WHEN, FOR WHOM, and HOW the quiz will function. The questions section allows the creation ofÂ various question types with images, GIFs, and videos</p>
        <img src={img1} alt="" />
      </div>
        <Topics></Topics>
      </div>

      {/* Footer Start */}
      <div>
        
<footer class="p-4 mt-20 bg-slate-200 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-center">
        <ul class="flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6 text-xl text-orange-400 ">About</Link>
            </li>
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6 text-xl  text-orange-400">Privacy Policy</Link>
            </li>
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6 text-xl  text-orange-400">Licensing</Link>
            </li>
            <li>
                <Link href="#" class="hover:underline text-xl  text-orange-400">Contact</Link>
            </li>
        </ul>
    </div>
</footer>

      </div>
    </nav>
  );
};

export default Home;
