import List from "../components/items/List";

function Movies() {
   return (
      <div>
         <List
            title="Popular Movies"
            fetchUrl={`https://api.themoviedb.org/3/movie/popular`}
            textLink="View All"
            quantityItems={30}
            reloadDocument={false}
         />
         <List
            title="Now Playing"
            fetchUrl={`https://api.themoviedb.org/3/movie/now_playing`}
            textLink="View All"
            quantityItems={30}
            reloadDocument={false}
         />
         <List
            title="Upcoming Movies"
            fetchUrl={`https://api.themoviedb.org/3/movie/upcoming`}
            textLink="View All"
            quantityItems={30}
            reloadDocument={false}
         />
         <List
            title="Top Rated Movies"
            fetchUrl={`https://api.themoviedb.org/3/movie/top_rated`}
            textLink="View All"
            quantityItems={30}
            reloadDocument={false}
         />
      </div>
   );
}
export default Movies;
