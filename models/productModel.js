import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
        maxLength : 8
    },
    rating : {
        type : Number,
        default : 0 
    },
    images : [
        {
            public_id : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
        }
    ],
    category : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        max : 4,
        default : 1,
        required : true
    },
    numOfReviews: {
        type : Number, // 110
        default : 0
    },
    reviews : [
        {
            name : {
                type : String,
                required : true
            },
            rating : {
                type : Number,
                required : true
            },
            comment : {
                type : String,
                required : true
            }
        }
    ]
,},{timestamps : true});

const Product = mongoose.model("Product", productSchema);
export default Product