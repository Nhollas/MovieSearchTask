import Image from "next/image"

type MovieCardPosterProps = {
  title: string
  posterPath: string | null
}
const baseUrl = "https://image.tmdb.org/t/p/w200/"

export const MovieCardPoster = ({
  title,
  posterPath,
}: MovieCardPosterProps) => {
  return (
    <Image
      src={`${baseUrl}${posterPath}`}
      alt={title}
      width={300}
      height={300}
      className="rounded-md"
    />
  )
}
