import mongoose from "mongoose";

const productModel = new mongoose.Schema({
 // inside this we gonna declare the type of every fields present in the database 

 name:String,
 price:String,
 company:String,
 color:String,
 category:String,

});

export const Product= mongoose.models.products || mongoose.model("products",productModel)

// exporting on a variable and model.('products') means the cluster
//and mongoose.model.products checks if it already exists or not if not create a new model