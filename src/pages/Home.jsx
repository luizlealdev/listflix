//Components
import Banner from "../components/items/Banner";
import List from "../components/items/List";

function Home() {
  document.title = "Home - ListFlix";

  return (
    <>
      <Banner fetchUrl="https://api.themoviedb.org/3/trending/all/day" />
      <List
        title="Trending"
        fetchUrl="https://api.themoviedb.org/3/trending/all/day"
        quantityItems={20}
        reloadDocument={true}
      />
      <List
        title="Top Rated Movies"
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated"
        quantityItems={15}
        textLink="View All"
        linkPath="/movies/top_rated"
        reloadDocument={true}
      />
      <List
        title="Top Rated series"
        fetchUrl="https://api.themoviedb.org/3/tv/top_rated"
        quantityItems={15}
        textLink="View All"
        linkPath="/series/top_rated"
        reloadDocument={true}
      />
    </>
  );
}
export default Home;
