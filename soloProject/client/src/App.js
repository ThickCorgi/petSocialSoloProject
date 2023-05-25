import "./App.css";
import PetOftheMonth from "./PetOftheMonth.js";
import Header from "./Header.js";
import SectionColor from "./SectionColor.js";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout.js";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePage from "./pages/CreatePage";

import ellie from "./images/ellie.JPG";
import king from "./images/king.jpeg";
import { UserContextProvider } from "./UserContext";

function App() {
  const style = {
    border: "solid",
  };
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={`/create`} element={<CreatePage />} />
        </Route>
      </Routes>

      <SectionColor />
    </UserContextProvider>
  );
}

export default App;
