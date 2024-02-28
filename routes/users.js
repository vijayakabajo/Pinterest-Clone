const mongoose= require("mongoose");
const plm= require("passport-local-mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("DB CONNECTED");
})
.catch((err)=>{
  console.log(err);
});

const userSchema=mongoose.Schema({
  name: String,
  username: String,
  email: String,
  contact: Number,
  password: String,
  profileImage: String,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm);

module.exports=mongoose.model("user", userSchema);
