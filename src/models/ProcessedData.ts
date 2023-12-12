import mongoose from 'mongoose';

const ProcessedDataSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    extractedData:{
        type: Object,
        required: true,
    },
    document:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
    },
    status:{
        type: String,
        default: 'pending',
        enum: ['pending', 'completed', 'failed'],
        required: true,
    },
    processedDate:{
        type: Date,
        default: Date.now,
    },
    

},

{timestamps: true}

)


export default mongoose.model('ProcessedData', ProcessedDataSchema);