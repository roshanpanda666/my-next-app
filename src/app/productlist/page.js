"use client"
import DeleteProduct from "@/lib/deleteProduct"
import Link from "next/link"
const getproducts =async()=>{
    let data=await fetch("http://localhost:3000/api/products",{cache:"no-cache"})
    data=await data.json()
    if(data.success){
        return data.result
    }
    else{
        return{success:false}
    }
}


export default async function Page(){

    let productlist=await getproducts()
    console.log(productlist);

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-3xl text-cyan-300"> product list</div>
            </div>
            <div>
                <div className="justify-center items-center flex gap-4">
              
                
               <table className="border-2 w-[90vw] border-cyan-300 text-2xl gap-10">
                    <thead className="border-2">
                        <tr className="border-gray-600 mb-6">
                            <td className="border-2 border-r-cyan-100">name</td>
                            <td className="border-2 border-cyan-100">price</td>
                            <td className="border-2 border-cyan-100">company</td>
                            <td className="border-2 border-cyan-100">colour</td>
                            <td className="border-2 border-cyan-100">category</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productlist.map((item)=>(
                                <tr className="border-gray-600">
                                    <td className="border-2 border-gray-400">{item.name}</td>
                                    <td className="border-2 border-gray-400">{item.price}</td>
                                    <td className="border-2 border-gray-400">{item.company}</td>
                                    <td className="border-2 border-gray-400">{item.color}</td>
                                    <td className="border-2 border-gray-400">{item.category}</td>
                                    <td className="border-2 border-gray-400">
                                        <Link href={"/productlist/"+item._id}>Edit</Link>
                                    </td>
                                    <td className="border-2 border-gray-400 text-red-600">
                                        <DeleteProduct id={item._id}>.</DeleteProduct>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
               </table>

                </div>

                <div className='flex justify-center items-center mt-5'> 
                    <Link href='/addproduct'>add product</Link>
                </div>
            </div>
            
        </div>
    )
}