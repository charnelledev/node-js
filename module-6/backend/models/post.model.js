const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
{
message: {
type: String,
required: true,
},
author: {
type: String,
required: true,
},
likers: {
type: [String],
},
},
{
timestamps: true,
}
);
export default mongoose.model("post",postSchema);
