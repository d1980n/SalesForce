import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
    tanggal: {
      type: Date,
      required: true
    },
    barangId: {
        type: String,
        required: true
    },
    jumlah: {
      type: Number,
      required: true
    }
  });
  
const User = mongoose.model('ActivityIn', ActivitySchema);

export default User;
