import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    roleId: {
      type: String,
      required: true
    },
    userId: {
        type: String,
        required: true
    },
  });

const Role = mongoose.model('role', roleSchema);

export default Role;
