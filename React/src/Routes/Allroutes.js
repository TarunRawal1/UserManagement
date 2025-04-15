import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Listusers from "../Pages/Listusers";
import Updateuser from "../Pages/Updateuser";
import Deleteuser from "../Pages/Delete";
import Search from "../Pages/Search";
import Pagenotfound from "../Pages/Pagenotfound";
export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listusers" element={<Listusers />} />
        <Route path="/update" element={<Updateuser />} />
        <Route path="/delete" element={<Deleteuser />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};
