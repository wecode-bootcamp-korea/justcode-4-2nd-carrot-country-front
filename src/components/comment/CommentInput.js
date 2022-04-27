import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';
import { UserContext } from 'context/context';
// import { SERVER_PORT } from 'config';
import { getCommentDetail } from 'apis/comment';
import UserProfile from 'components/profile/UserProfile';
import { BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';

function CommentInput() {
  const user = useContext(UserContext);
  const [comment, setComment] = useState([]);
  // const [input, setInput] = useState();
  // const { userData } = useContext(UserContext);
  const [data, setData] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // fetch('http//localhost:3000/district-info/detail')
    // .then(res => {
    //   return res.json();
    // })
    getCommentDetail(1).then(data => {
      setComment(data.comments);
    });
  }, []);

  // useEffect(() => {
  //   getDistrictComment(1).then(data => {
  //     if (data.message === 'SUCCESS') {
  //       setData(data.comments);
  //     }
  //   });
  // }, []);

  // const onChange = e => {
  //   setInput(e.target.value);
  // };

  // const addComment = () => {
  //   setComments(
  //     comments.commnetsconcat({
  //       id: comments.length + 1,
  //       // content: input,
  //       // userName: userDate,
  //     })
  //   );
  // };

  return (
    <Comments>
      {/* {comment.map()} */}
      <UserProfile user={data.user} />
      <BsFillTrashFill
        className="trashIcon"
        // onClick={() => this.handleRemove(e.id)}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `<p>${data.content}</p>`,
        }}
      />
      <span>{moment(data.createdAt).format('YYYY-MM-DD')}</span>
    </Comments>
  );
}

const Comments = styled.div`
  padding: 20px 6px 20px 6px;
  border-bottom: 1px solid #99999940;
  div {
    padding: 15px 0px;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -0.5px;
  }
  span {
    font-size: 13px;
    color: #71717199;
  }
  .trashIcon {
    /* margin-left: 10px; */
    width: 15px;
    color: #ababab;
  }
`;

export default CommentInput;
