"use client";

import { useEffect, useState } from "react";
import { Movie, Credits } from "../constants/types";
import LgCarousel from "../_components/LgCarousel";
import { SmCarousel } from "../_components/SmCarousel";

const Page = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieCredits, setMovieCredits] = useState<Credits[]>([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const fetchMoviesAndCredits = async () => {
      const options = {
        method: "GET",
      };

      try {
        const moviePromises = [
          fetch(`https://api.themoviedb.org/3/movie/402431`, options).then(
            (res) => res.json()
          ),
          fetch(`https://api.themoviedb.org/3/movie/1241982`, options).then(
            (res) => res.json()
          ),
          fetch(`https://api.themoviedb.org/3/movie/558449`, options).then(
            (res) => res.json()
          ),
        ];

        const creditsPromises = [
          fetch(
            `https://api.themoviedb.org/3/movie/402431/credits`,
            options
          ).then((res) => res.json()),
          fetch(
            `https://api.themoviedb.org/3/movie/1241982/credits`,
            options
          ).then((res) => res.json()),
          fetch(
            `https://api.themoviedb.org/3/movie/558449/credits`,
            options
          ).then((res) => res.json()),
        ];

        const fetchedMovies = await Promise.all(moviePromises);
        const fetchedCredits = await Promise.all(creditsPromises);

        setMovies(fetchedMovies);
        setMovieCredits(fetchedCredits);
      } catch (error) {
        console.error("Failed to fetch movies or credits", error);
      }
    };

    fetchMoviesAndCredits();

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <SmCarousel />
      ) : (
        <LgCarousel movieCredits={movieCredits} />
      )}
    </>
  );
};

export default Page;
