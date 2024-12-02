"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
const Page = (props) => {
    const nameref = useRef();
    const priceref = useRef();
    const companyref = useRef();
    const colourref = useRef();
    const categoryref = useRef();

    const addProductManage = async () => {
        const nameaf = nameref.current?.value;
        const priceaf = priceref.current?.value;
        const companyaf = companyref.current?.value;
        const colouraf = colourref.current?.value;
        const categoryaf = categoryref.current?.value;


        if (!nameaf || !priceaf || !companyaf || !colouraf || !categoryaf) {
            alert("Please fill all fields.");
            return;
        }
        

       
            let response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nameaf,
                    price: priceaf,
                    company: companyaf,
                    color: colouraf,
                    category: categoryaf,
                }),


            });
            const result = await response.json();
            if (result.success) {
                alert("Data added successfully!");
                clearInputs();
            } else {
                alert("Failed to add data.");
            }
        
    };

    const clearInputs = () => {
        nameref.current.value = "";
        priceref.current.value = "";
        companyref.current.value = "";
        colourref.current.value = "";
        categoryref.current.value = "";
    };
    useEffect(()=>{
        getProductDetail()
    },[])

    const getProductDetail = async()=>{
        let productData =await fetch("http://localhost:3000/api/products/67464e370b5346b7d231215a")
        productData = await productData.json()
    }

    return (
        <div className="flex justify-center items-center h-[90vh] flex-col gap-2">
            <div className="mb-3">update Products</div>
            <div>
                <input
                    type="text"
                    placeholder="Enter product name"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={nameref}
                />
                <input
                    type="text"
                    placeholder="Enter product price"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={priceref}
                />
                <input
                    type="text"
                    placeholder="Enter product company"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={companyref}
                />
                <input
                    type="text"
                    placeholder="Enter product colour"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={colourref}
                />
                <input
                    type="text"
                    placeholder="Enter product category"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={categoryref}
                />
            </div>
            <div className="flex space-x-4 mt-4">
                <button
                    onClick={addProductManage}
                    className="text-cyan-400 hover:border-2 hover:border-cyan-300 w-32 text-center p-2"
                >
                    edit Product
                </button>
                <button
                    onClick={clearInputs}
                    className="text-red-400 hover:border-2 hover:border-red-300 w-32 text-center p-2"
                >
                    Clear
                </button>
            </div>
            <div className='flex justify-center items-center mt-5'> 
          <Link href='/productlist'>product list</Link>
                </div>
            

        </div>
    );
};

export default Page;
