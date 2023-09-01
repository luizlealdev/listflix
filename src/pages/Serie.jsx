import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import Banner from "../components/items/Banner";
import Infors from "../components/details/series/Infors";
import Videos from "../components/details/Videos";
import Cast from "../components/details/Cast";
import Reviews from "../components/details/Reviews";
import List from "../components/items/List";

//Skeleton Loading components
import { BannerSkeleton } from "../components/items/BannerSkeleton";
import { InforsSkeleton } from "../components/details/series/InforsSkeleton";

function Serie() {
  const { name, id } = useParams();
  const [serieData, setSerieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let titleName = name[0].toUpperCase() + name.substr(1);
  titleName = titleName.replace(/-/g, " ");
  document.title = `${titleName} - ListFlix`;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQxNDVjMmRhZjAyNGY0OTg1MTcwY2U5MzJkYzc1MiIsInN1YiI6IjYzYWUxOWQ4N2VmMzgxMWY4ZGNkMDYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNozGWnwBIbnaMQMQQYd688m4FQDwT_wB-sHZDvSLLg",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSerieData(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isLoading && (
        <>
          <BannerSkeleton />
          <InforsSkeleton />
        </>
      )}
      {Object.values(serieData).length > 0 && (
        <>
          <Banner
            imageId={serieData.backdrop_path}
            title={serieData.name}
            overview={serieData.overview}
            year={serieData.first_air_date.slice(0, 4)}
            voteAverage={
              serieData.vote_average.toString().length > 3
                ? serieData.vote_average.toString().slice(0, 3)
                : serieData.vote_average.toString()
            }
          />
          <Infors
            releaseDate={serieData.first_air_date}
            status={serieData.status}
            type={serieData.type}
            createdBy={serieData.created_by}
            genres={serieData.genres}
            productionCompanies={serieData.production_companies}
          />
        </>
      )}

      <Cast id={id} type="tv" />
      <Videos id={id} type="tv" />
      <Reviews id={id} type="tv" />
      <List
        title="Recommendations"
        fetchUrl={`https://api.themoviedb.org/3/tv/${id}/recommendations`}
        errorMessage="Does not exist recommendations for this movie"
        quantityItems={15}
        reloadDocument={true}
      />
    </div>
  );
}
export default Serie;
