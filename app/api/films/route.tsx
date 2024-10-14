import { NextRequest, NextResponse } from "next/server";

import { peliculas } from './datos.json';

export async function GET(request: NextRequest){

    return NextResponse.json(peliculas);
}

/*export async function POST(request: NextRequest){
    const body = await request.json();

    const validacion = schema.safeParse(body);

    if(!validacion.success)
        return NextResponse.json(validacion.error.errors, {status: 404})

    const product = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    });

    return NextResponse.json(product, {status: 201});
}*/