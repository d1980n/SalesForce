import mongoose from 'mongoose';

// Definisikan skema tabel sales
const ActivityOutSchema = new mongoose.Schema({
    tanggal: {
      type: Date,
      required: true
    },
    salesId:{
        type: String,
        required: true
    },
    barang:[{
        barangId: String,
        jumlah: Number,
        hargaJual: Number
    }],
  });
const User = mongoose.model('ActivityOut', ActivityOutSchema);

export default User;
