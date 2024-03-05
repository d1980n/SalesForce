import mongoose from 'mongoose';

// Definisikan skema tabel barang
const barangSchema = new mongoose.Schema({
    nama: {
      type: String,
      required: true
    },
    harga: {
      type: Number,
      required: true
    },
    stok: {
      type: Number,
      required: true
    }
  });

const User = mongoose.model('Barang', barangSchema);

export default User;
