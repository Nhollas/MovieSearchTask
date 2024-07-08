"use client"
import { use } from "react"
import { useDebounce } from "use-debounce"

import { Button } from "@/app/components/ui"
import { SearchContext } from "@/app/providers/MovieSearchProvider"

import { useSearchMovies } from "../hooks/useSearchMovies"

import { MovieCard } from "./MovieCard"
import { MovieCardGrid } from "./MovieCardGrid"
import { MovieCardSkeleton } from "./MovieCardSkeleton"

export const MoviesContainer = () => {
  const { search } = use(SearchContext)
  const [debouncedSearch] = useDebounce(search, 1000)
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useSearchMovies(debouncedSearch)
  if (isLoading) {
    return (
      <MovieCardGrid>
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </MovieCardGrid>
    )
  }

  const movies =
    data?.pages
      .flat()
      .map((page) => page.results)
      .flat() || []

  const loadOptionRequired = movies.length > 0 || hasNextPage

  return (
    <>
      <MovieCardGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieCardGrid>
      {loadOptionRequired && (
        <Button onClick={() => fetchNextPage()}>Load More Movies</Button>
      )}
    </>
  )
}
