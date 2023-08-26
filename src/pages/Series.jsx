import List from "../components/items/List";

function Series() {
   return (
      <div>
         <List
            title="Popular Series"
            fetchUrl={`https://api.themoviedb.org/3/tv/popular`}
            textLink="View All"
            quantityItems={30}
            reloadDocument={true}
         />
         <List
            title="Airing Today"
            fetchUrl={`https://api.themoviedb.org/3/tv/airing_today`}
            textLink="View All"
            quantityItems={30}
            reloadDocument={true}
         />
         <List
            title="On the Air"
            fetchUrl={`https://api.themoviedb.org/3/tv/on_the_air`}
            textLink="View All"
            quantityItems={30}
            reloadDocument={true}
         />
         <List
            title="Top Rated Series"
            fetchUrl={`https://api.themoviedb.org/3/tv/top_rated`}
            textLink="View All"
            quantityItems={30}
            reloadDocument={true}
         />
      </div>
   );
}
export default Series;
