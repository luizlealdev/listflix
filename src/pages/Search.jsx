import List from "../components/items/List";

function Search() {
   const urlParams = new URLSearchParams(window.location.search);
   const query = urlParams.get("q");

   return (
      <List
         title={`Results for "${query}"`}
         fetchUrl={`https://api.themoviedb.org/3/search/multi?query=${query}`}
         reloadDocument={false}
         quantityItems={60}
      />
   );
}
export default Search;
