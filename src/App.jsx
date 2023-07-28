import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

//Components
import Container from "./components/layout/Container";
import SideBar from "./components/layout/SideBar";
import NavBar from "./components/layout/NavBar";

//Pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import Serie from "./pages/Serie";

function App() {
   return (
      <Router>
         <NavBar />
         <SideBar />
         <SkeletonTheme baseColor="#313131" highlightColor="#525252">
            <Container>
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/movie/:name/:id" element={<Movie />} />
                  <Route path="/series" element={<Series />} />
                  <Route path="/serie/:name/:id" element={<Serie />} />
               </Routes>
            </Container>
         </SkeletonTheme>
      </Router>
   );
}

export default App;
