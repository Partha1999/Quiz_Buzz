import React from "react";
import { Link } from "react-router-dom";
import Topics from "../Topics/Topics";
const Home = () => {
  return (
    <nav>
      <div>
      <div>
        <h1 className="font-extrabold text-4xl text-center mt-10">A Quize Site Platform for The Digital World!</h1>
        <p className="text-center mt-10 mx-40">Advanced quiz builder that includes SETTINGS and QUESTIONS sections. Settings control WHAT, WHEN, FOR WHOM, and HOW the quiz will function. The questions section allows the creation ofÂ various question types with images, GIFs, and videos</p>
        <img src="" alt="" />
      </div>
        <Topics></Topics>
      </div>

      {/* Footer Start */}
      <div>
        
<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-center">
        <ul class="flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</Link>
            </li>
            <li>
                <Link href="#" class="hover:underline">Contact</Link>
            </li>
        </ul>
    </div>
</footer>

      </div>
    </nav>
  );
};

export default Home;
