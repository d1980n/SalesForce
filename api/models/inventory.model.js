import mongoose from 'mongoose';

const inventSchema = new mongoose.Schema({
  inventId:{
    type: String,
    require: true
  },
  vendorId:{
    type: String,
    require: true
  },
  tanggal: {
    type: Date,
    require: true,
  },
  item:[{
    itemID: String,
    jumlah: Number
  }],

  });

const Invent = mongoose.model('inventory', inventSchema);

export default Invent;
