
import mongoose from 'mongoose';

const RawDocumentSchema = new mongoose.Schema({

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

    },
    processedDocument :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProcessedData',
    },
    documentUrl:{
        type: String,
    }


},
{timestamps: true}
)


export default mongoose.model('Document', RawDocumentSchema);