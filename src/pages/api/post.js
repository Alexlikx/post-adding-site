import PostModel from "../../../models/PostModel";
import ConnectDB from "../../../utils/connectDB";

export default async function Post(req, res) {
    if (req.method == 'POST' && !req.body.id) {
        try {
            const { title, info } = req.body;
            if (!(title && info)) {

            }
            await ConnectDB();
            const post = await PostModel.create(req.body);
            return res.json({ post });
        } catch (e) {
            console.log(e);
        }
    } else if (req.method == 'GET' && !req.body) {
        await ConnectDB();
        const Posts = await PostModel.find();
        return res.json(Posts);
    }
}