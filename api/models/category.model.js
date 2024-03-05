import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryId:{
    type: String,
    require: true
  },
  categoryName: {
    type: Date,
    require: true,
  },
  });

const category = mongoose.model('category', categorySchema);

export default category;
