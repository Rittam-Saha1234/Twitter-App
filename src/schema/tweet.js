import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true, //remove white space from the begining and end of the string
        maxlength: 280
    },
    image: {
        type: String,
        default: null
    }
}, {timestamps: true});

const Tweet = mongoose.model("Tweet", tweetSchema) // Tweet collection

export default Tweet;