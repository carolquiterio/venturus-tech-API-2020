import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserActivityCommentDto } from '../dto/user-activity-comment.dto';

export interface UserActivity  extends Document{
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly userId: string;
    readonly userName: string;
    readonly filename: string;
    readonly timestamp: Date;
    likes: string[];
    comments: UserActivityCommentDto[];
}

const UserActivityComentsSchema = new mongoose.Schema({
    userId: String,
    userName: String,
    comment: String,
    timestamp: {
        type: Date,
        default: Date.now(),
    },
});

export const UserActivitySchema = new mongoose.Schema({
    userId: String,
    userName: String,
    filename: String,
    likes: [String],
    timestamp:{
        type: Date,
        defalut: Date.now(),
    },
    comments: [UserActivityComentsSchema],
    
});

