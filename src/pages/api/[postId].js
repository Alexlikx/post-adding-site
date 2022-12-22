import PostModel from "../../../models/PostModel";
import ConnectDB from "../../../utils/connectDB"

export default async function GetPost(req, res) {
    try {
        const { postId } = req.query
        await ConnectDB();
        const post = await PostModel.findOne({ _id: postId + '' }).then((user) => {
            res.json(user)
        })
        if (!post) {
            return res.status(404).json({ message: "Not Found" })
        }
        return res.json(post)
    } catch (e) {
        console.log(e);
    }
}