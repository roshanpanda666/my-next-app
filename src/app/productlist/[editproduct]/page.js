"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Page = (props) => {
    const nameref = useRef();
    const priceref = useRef();
    const companyref = useRef();
    const colourref = useRef();
    const categoryref = useRef();

    const getProductDetail = async () => {
        try {
            const productId = props.params.editproduct;
            const response = await fetch(`http://localhost:3000/api/products/${productId}`);
            const productData = await response.json();
            const result = productData.result;

            if (result) {
                nameref.current.value = result.name || "";
                colourref.current.value = result.color || "";
                priceref.current.value = result.price || "";
                companyref.current.value = result.company || "";
                categoryref.current.value = result.category || "";
            }
        } catch (error) {
            console.error("Error fetching product details:", error);
            alert("Failed to fetch product details.");
        }
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    const updateProduct = async () => {
        try {
            const productId = props.params.editproduct;
            const updatedData = {
                name: nameref.current.value,
                price: priceref.current.value,
                company: companyref.current.value,
                color: colourref.current.value,
                category: categoryref.current.value,
            };

            const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });

            const data = await response.json();

            if (data.result) {
                alert("Product updated successfully!");
            } else {
                alert("Product update failed.");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Failed to update product.");
        }
    };

    const clearInputs = () => {
        nameref.current.value = "";
        priceref.current.value = "";
        companyref.current.value = "";
        colourref.current.value = "";
        categoryref.current.value = "";
    };

    return (
        <div className="flex justify-center items-center h-[90vh] flex-col gap-2">
            <div className="mb-3">Update Product</div>
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
                    onClick={updateProduct}
                    className="text-cyan-400 hover:border-2 hover:border-cyan-300 w-32 text-center p-2"
                >
                    Edit Product
                </button>
                <button
                    onClick={clearInputs}
                    className="text-red-400 hover:border-2 hover:border-red-300 w-32 text-center p-2"
                >
                    Clear
                </button>
            </div>
            <div className="flex justify-center items-center mt-5">
                <Link href="/productlist">Product List</Link>
            </div>
        </div>
    );
};

export default Page;
