import { model, models, mongoose } from 'mongoose';

const postModel = new mongoose.Schema({
    title: String,
    info: String
})

const PostModel = models.PostModel || model('PostModel', postModel);

export default PostModel;