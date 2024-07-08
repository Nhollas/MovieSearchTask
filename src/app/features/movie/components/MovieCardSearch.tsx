import { Input, Label } from "@/app/components/ui"
type MovieCardSearchProps = {
  search: string
  setSearch: (value: string) => void
}
export const MovieCardSearch = ({
  search,
  setSearch,
}: MovieCardSearchProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="search">Search</Label>
      <Input
        id="search"
        type="search"
        placeholder="Search for movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
