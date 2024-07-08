import Link from "next/link"
import { forwardRef } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui"
import { cn } from "@/app/lib/utils"

import { Movie } from "../types"

import { MovieCardPoster } from "./MovieCardPoster"

export const MovieCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    movie: Movie
  }
>(({ className, movie, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn("flex flex-col bg-secondary", className)}
    {...props}
  >
    <Link href={`/movie/${movie.id}`}>
      <CardHeader className="p-2">
        <MovieCardPoster title={movie.title} posterPath={movie.poster_path} />
      </CardHeader>
      <CardContent className="p-2">
        <CardTitle className="text-balance text-center text-xl font-semibold leading-none tracking-tight">
          {movie.title}
        </CardTitle>
      </CardContent>
    </Link>
  </Card>
))

MovieCard.displayName = "MovieCard"
