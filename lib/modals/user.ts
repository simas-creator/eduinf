import  mongoose from  "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
      select: false
    },
    role: {
      type: String,
      default: "user",
    },
    authProviderId: {type: String}
  },
  {
    timestamps: true,
  }
);
export const User  =  mongoose.models?.User  ||  mongoose.model("User", userSchema);