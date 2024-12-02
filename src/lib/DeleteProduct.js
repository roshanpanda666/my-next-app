"use client"
export default function DeleteProduct(props){
    console.log(props.id);

    const deleteRecord=async()=>{
        let response=await fetch("http://localhost:3000/api/products/"+props.id,{
            method:"DELETE",
        })
        response = await response.json()
        if(response.success){
            alert("Product deleted successfully");
        }
    }
    return(
        <div>
            <button onClick={deleteRecord}>delete</button>
        </div>
    )
}