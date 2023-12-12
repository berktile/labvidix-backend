
import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    fileType:{
        type: String,
    },
    uploadDate:{
        type: Date,
        default: Date.now,
    },
    documentName:{
        type: String,
    },
    s3Key:{
        type: String,

    }

},
{timestamps: true}
)


export default mongoose.model('Document', DocumentSchema);