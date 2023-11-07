import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between intems-center bg-black  sm:px-8 px-4 py-4 border-b border-b-white/20">
        <Link to="/" className="flex items-center justify-center ">
          <img src={logo} alt="logo" className="w-12 object-contain" />
          <h1 className="text-xl font-extrabold text-white mt-1.5">Wall <span className="text-white">.</span> <span className="px-3 py-1.5  rounded-[50%] bg-gradient-to-r from-lime-600 to-lime-400  text-white ">E</span></h1>
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-gradient-to-r from-lime-600 to-lime-400  text-white px-4 py-2 rounded-md"
        >
          Crear
        </Link>
      </header>
      <main className="sm:px-8 px-4 py-8 w-full bg-black min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
