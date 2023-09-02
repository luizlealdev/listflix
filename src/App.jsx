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
import Search from "./pages/Search";

function App() {
   return (
      <Router>
         <NavBar />
         <SkeletonTheme baseColor="#18181A" highlightColor="#222224">
            <Container>
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/movies/" element={<Movies />} />
                  <Route path="/movie/:name/:id" element={<Movie />} />
                  <Route path="/series/" element={<Series />} />
                  <Route path="/serie/:name/:id" element={<Serie />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/categories" element={<Movies />} />
               </Routes>
            </Container>
         </SkeletonTheme>
         <SideBar/>
      </Router>
   );
}

export default App;
