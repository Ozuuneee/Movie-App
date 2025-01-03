// "use client";

// import { options } from "../constants/api";
// import { Movie } from "../constants/types";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// type SearchResultListProps = {
//     searchValue: string;
// };

// const SearchResultList = ({searchValue}: SearchResultListProps ) => {
//     const { movie, setMovies } = useState<Movie[]>();

//     useEffect(() => {
//         async function fetchMovies() {
//             const response = await fetch(
//                 `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
//                 options
//             );
//             const data = await response.json();
//             setMovies(data.results?.slice(0, 5));
//         };
//         fetchMovies();
//     }, [searchValue]);

// return (
//     <div className="absolute top-16, md: top-14 w-full max-w-[577px] bg-background rounded-lg shadow-lg">
//         {!movie ? (
//             <p>Loading...</p>
//         ) : (
//             <>
//                <div className="p-3">
//                 {movie.map((movie) => (
//                     <Link key={movie.id} href={`/movie/${movie.id}`} className="my-4">
//                         <div>{movie.title}<div/>
//                     </Link>
//                 ))}
//                </div>
//                <div className="p-3 pt-0">
//                  <Link href={`/search?query=${searchValue}`}
//                      className="text-foreground py-2.5 px-4"
//                  >
//                      See all results for &#34;{searchValue}&#34;
//                  </Link>
//                </div>
//             </>
//     </div>
// )
// }

// export default SearchResultList;
