import { revalidatePath } from "next/cache"

import { env } from "@/app/lib/env"

const { REVALIDATE_SECRET } = env

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")

  if (secret !== REVALIDATE_SECRET) {
    return new Response("Invalid Secret", { status: 401 })
  }

  const path = searchParams.get("path") || "/"

  revalidatePath(path)

  return new Response("Revalidated", { status: 200 })
}
