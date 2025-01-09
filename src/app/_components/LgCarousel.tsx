import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Movie, Credits } from "../constants/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type LgCarouselProps = {
  movieCredits: Credits[];
};

const LgCarousel = ({ movieCredits }: LgCarouselProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const stColor = "#FDE047";

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: "Bearer YOUR_API_KEY",
        },
      };
      const movie1 = await fetch(
        `https://api.themoviedb.org/3/movie/402431`,
        options
      ).then((res) => res.json());

      const movie2 = await fetch(
        `https://api.themoviedb.org/3/movie/1241982`,
        options
      ).then((res) => res.json());

      const movie3 = await fetch(
        `https://api.themoviedb.org/3/movie/558449`,
        options
      ).then((res) => res.json());

      setMovies([movie1, movie2, movie3]);
    };

    fetchMovies();
  }, []);

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {movies.map((movie, index) => {
          const credits = movieCredits.find((credit) => credit.id === movie.id);

          const title = movie?.title || "Untitled Movie";
          const releaseDate = movie?.release_date || "Release Date Unknown";
          const overview = movie?.overview || "No overview available";
          const runtime =
            movie?.runtime && movie?.runtime > 0
              ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60} min`
              : "N/A";
          const voteAverage = movie?.vote_average?.toFixed(1) || "N/A";
          const voteCount = movie?.vote_count || 0;

          return (
            <CarouselItem key={movie.id || index}>
              <div className="xl:px-[60px] py-8 grid gap-6">
                <div className="flex flex-col gap-6">
                  <div className="flex w-full justify-between gap-10">
                    <div>
                      <h3 className="text-2xl font-semibold">{title}</h3>
                      <p className="text-sm">
                        {releaseDate} • {movie?.adult ? "R" : "PG"} • {runtime}
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-1 items-center">
                        <Star
                          color={stColor}
                          fill={stColor}
                          width="20px"
                          height="20px"
                        />
                        <p className="text-sm">
                          <span>{voteAverage}</span>
                          <span className="text-gray-400">/10</span>
                          <span className="ml-1 text-xs text-gray-400">
                            ({voteCount})
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={title}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap gap-3">
                    {movie?.genres?.map((genre) => (
                      <Badge
                        key={genre?.id}
                        variant="outline"
                        className="border rounded-full "
                      >
                        {genre.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-gray-700">{overview}</div>
                </div>
                <div className="flex flex-col gap-5 mt-5">
                  <div className="flex gap-[53px] items-center border-b pb-5">
                    <h4 className="font-semibold">Director</h4>
                    <div className="flex flex-wrap gap-1">
                      {credits?.crew
                        .filter((crew) => crew.department === "Directing")
                        .map((crew, index, array) => (
                          <span
                            key={`directing` + crew.id}
                            className="flex gap-1"
                          >
                            <p>{crew.name}</p>
                            {index !== array.length - 1 ? <span>·</span> : null}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="flex gap-[53px] items-center border-b pb-5">
                    <h4 className="font-semibold">Writers</h4>
                    <div className="flex flex-wrap gap-1">
                      {credits?.crew
                        .filter((crew) => crew.department === "Writing")
                        .map((crew, index, array) => (
                          <span
                            key={`writing` + index}
                            className="flex flex-wrap gap-1"
                          >
                            <p>{crew.name}</p>
                            {index !== array.length - 1 ? <span>·</span> : null}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="flex gap-[53px] items-center border-b pb-5">
                    <h4 className="font-semibold">Stars</h4>
                    <div className="flex flex-wrap gap-1">
                      {credits?.cast.slice(0, 4).map((cast, index, array) => (
                        <span
                          key={`stars` + cast.id}
                          className="flex flex-wrap gap-1"
                        >
                          <p>{cast.name}</p>
                          {index !== array.length - 1 ? <span>·</span> : null}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default LgCarousel;
