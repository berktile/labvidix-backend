import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required:true,
            unique:true,
            min:4,
        },
        email: {
            type: String,
            required:true,
            unique:true,

        },
        password: {
                type: String,
                required:true,
                min:6,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        

    },
    {timestamps: true}

)

export default mongoose.model('User', UserSchema);
