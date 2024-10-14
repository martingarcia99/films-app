import { NextResponse } from "next/server";

import { peliculas } from './datos.json';

export async function GET(){
    return NextResponse.json(peliculas);
}