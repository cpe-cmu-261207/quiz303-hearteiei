import { comments, CommentType } from "../data/comments";
const Comments = ({username,userImagePath,commentText,likeNum,replies}: CommentType) => {

	const like = () => {
        if(likeNum>0)
        return (
            <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{likeNum} คน</p>
            </div>
        )
	}

	return (
		<div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">{username}</p>
              <p>{commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              {like()}
            </div>        
          </div>
    )
}
export default Comments