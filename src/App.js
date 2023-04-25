import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import HomeScreen from './Components/homeComponents/HomeScreen'
import NewRecipeScreen from "./Components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from './Components/detailComponents/DetailScreen'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="newRecipe" element={<NewRecipeScreen />} />
        <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      {/* This is where you will code for some of Part 1. */}
      <Footer />
    </div>
  );
}

export default App;
