import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from 'context/context';
import moment from 'moment';
// import { SERVER_PORT } from 'config';
import { getCommentList } from 'apis/comment';
import UserProfile from 'components/profile/UserProfile';
import { BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';

function CommentInput() {
  const location = useLocation();
  const [comment, setComment] = useState([]);
  // const [input, setInput] = useState();
  // const { userData } = useContext(UserContext);
  const [data, setData] = useState();
  const user = useContext(UserContext);

  useEffect(() => {
    // fetch('http//localhost:3000/district-info/detail')
    // .then(res => {
    //   return res.json();
    // })
    getCommentList(1).then(data => {
      if (data.message === 'SUCCESS') {
        setData(data.infoComments);
      }
    });
  }, []);

  // const onChange = e => {
  //   setInput(e.target.value);
  // };

  console.log('data >>> ', data);
  return data ? (
    <Comments>
      {/* {comment.map()} */}
      <UserProfile user={data.user} />
      <BsFillTrashFill
        className="trashIcon"
        // onClick={() => this.handleRemove(e.id)}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `<p>${data.comment}</p>`,
        }}
      />
      <span>{moment(data.createdAt).format('YYYY-MM-DD')}</span>
    </Comments>
  ) : (
    <div></div>
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
