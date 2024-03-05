import mongoose from 'mongoose';

const salesSchema = new mongoose.Schema({
    nama: {
      type: String,
      required: true
    },
    alamat: {
        type: String,
        required: true
    },
    tanggalLahir: {
        type: Date,
        required: true
    },
  });

const User = mongoose.model('Sales', salesSchema);

export default User;
