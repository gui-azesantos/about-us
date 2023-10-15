import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutYou } from "./pages/AboutYou/AboutYou";
import { Experience } from "./pages/Experience/Experience";
import { Hobbies } from "./pages/Hobbies/Hobbies";
import { Home } from "./pages/Home";
import { Education } from "./pages/Education/Education";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutYou />} path="/sobre-voce" />
        <Route element={<Experience />} path="/experiencias" />
        <Route element={<Education />} path="/formacao" />
        <Route element={<Hobbies />} path="/hobbies" />
      </Routes>
    </BrowserRouter>
  );
};
