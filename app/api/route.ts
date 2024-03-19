import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export async function POST(request:Request) {
    try {
        const {data} = await request.json()
        const postImg = await prisma.img.createMany({
            data
        })
        return Response.json(postImg)
        
    } catch (error) {
        return new Response(error as BodyInit,{
            status:500
        })
    }
}
export async function GET(request:Request) {
    try {
        const result = await prisma.img.findMany({}) 
        return Response.json(result)
        
    } catch (error) {
        return new Response(error as BodyInit,{
            status:500
        })
    }
}