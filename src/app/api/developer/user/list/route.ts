import prisma from "@/lib/prisma/prisma"

export async function GET() {
    const user = await prisma.user.findMany()
    return new Response(JSON.stringify(user))
}