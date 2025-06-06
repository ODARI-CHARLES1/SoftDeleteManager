import mongoose from "mongoose";

const recycleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const recycle = mongoose.model("recycle", recycleSchema);

export default recycle;
