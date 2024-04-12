import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true, 
        trim: true, 
        maxlength:[40, 'Title can not be more than 40 characters'],
    },
    description: {
        type: String,
        required: true, 
        maxlength: [200, 'Description cannot be more than 200 characters']
    }
}, {
    timestamps:true
})

export default mongoose.models.Post || mongoose.model("Post", PostSchema);