import { connectionSRT } from "@/lib/db"
import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { Product } from "@/lib/model/product"
export async function PUT(request,content){
   
    const filtered=content.params.putapi
    console.log(filtered)
    const data={_id:filtered}
    const payload=await request.json()
    console.log(payload);
    await mongoose.connect(connectionSRT)
    const result= await Product.findOneAndUpdate(data,payload)
    return NextResponse.json({result,success:true})
}

export async function GET(request,content){
   
    const filtered=content.params.putapi
    const record={_id:filtered};
    await mongoose.connect(connectionSRT)
    const result= await Product.findById(record)
    return NextResponse.json({result,success:true})
}

export async function DELETE(request,content){
    const productId= content.params.putapi
    const record={_id:productId}
    await mongoose.connect(connectionSRT)
    const result =await Product.deleteOne(record)
    return NextResponse.json({result,success:true})
}