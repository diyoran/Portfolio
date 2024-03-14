import { Fragment } from "react";
import AppStyle from "./App.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contacts from "./pages/Contacts"

const App = () => {
  return (
    <Fragment>
      <header className={AppStyle["header"]}>
        <h1 className={AppStyle["title-1"]} >
          Nigmanjanova Diyora nemo - front-end developer
        </h1>

        <p className={AppStyle["subtitle"]}>
          Hi there! I'm interested in programming. I'm always into trying smth new and creative! :)
         I want to become a full-stack developer 
        </p>

        <nav className={AppStyle["header-menu"]}>
          <Link to={"/Portfolio"}>Main</Link>
          <Link to={"/Portfolio/Services"}>Services</Link>
          <Link to={"/Portfolio/Portfolio"}>Portfolio</Link>
          <Link to={"/Portfolio/Contacts"}>Contacts</Link>
        </nav>
      </header>

      <main className={AppStyle["main"]}>

        <Routes>
          <Route path="/Portfolio" index element={<Home />} />

          <Route path="/Portfolio/Services" element={<Services />} />

          <Route path="/Portfolio/Portfolio" element={<Portfolio />} />

          <Route path="/Portfolio/Contacts" element={<Contacts />} />
        </Routes>

      </main>

      <footer className={AppStyle["footer"]}>
        &copy; 2024 Nigmanjanova Diyora 
      </footer>

    </Fragment>
  )
}

export default App;