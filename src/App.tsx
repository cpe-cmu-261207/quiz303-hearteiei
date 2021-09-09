import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './component/Comment';
import { comments } from './data/comments';
function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileimages/Heart.jpg"></img>
            <span className='font-semibold text-lg'>kunasin techasueb 630610721</span>
          </div>

          {/* status message */}
          <p>Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหมครับ #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>100 คน</p>
          </div>

        </div>
        
        {/* comments section */}
        <div className=""> 
        {comments.map(x => {return (
                <Comments username={x.username} userImagePath={x.userImagePath}  commentText={x.commentText} 
                likeNum={x.likeNum} replies={x.replies}/>)
        })}

          {/* normal comment */}
          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">หมาน้อย</p>
              <p>เม้นค้าบ</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
