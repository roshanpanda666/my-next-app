import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {connectionSRT} from "@/lib/db"
import { Product } from "@/lib/model/product";
export async function GET(){
    
    await mongoose.connect(connectionSRT)
    const data =await Product.find()
    return NextResponse.json({result:data,success:"true"})
}

//start post() api function

export async function POST(request){
    const payload=await request.json()
    await mongoose.connect(connectionSRT)
    let product=new Product(payload)
    const result=await product.save()
    return NextResponse.json({result,success:true})
}