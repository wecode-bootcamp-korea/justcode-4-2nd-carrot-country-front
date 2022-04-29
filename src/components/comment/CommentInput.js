import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { deleteTrash, getCommentList } from 'apis/comment';
import { postComment } from 'apis/comment';
import { UserContext } from 'context/context';

import UserProfile from 'components/profile/UserProfile';

import { BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

function CommentInput(props) {
  const { districtInfoId } = props;
  const [data, setData] = useState([]);
  const [commentID, setCommentID] = useState(0);
  // const [trash, setTrash] = useState();
  const myInfo = useContext(UserContext);
  const [comment, setComment] = useState('');

  useEffect(() => {
    getCommentList(districtInfoId).then(data => {
      if (data.message === 'SUCCESS') {
        setData(data.infoComments);
      }
    });
  }, [districtInfoId]);

  // useEffect(() => {
  //   deleteTrash(getCommentList).then(data => {
  //     console.log('sss', deleteTrash)
  //     if (data.message === "SUCCESS DELETE COMMENT") {
  //       // setData(data.infoComments);
  //     }
  //   });
  // }, []);

  // }

  // let trashDelete = null;

  // const handleRemove = e => {
  //   // console.log('key', e.target.key);
  //   console.log('data', data.id);
  //   trashDelete = e.target.key;
  //   deleteTrash(trashDelete);
  // };
  const handleComment = e => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    comment !== '' && postComment(districtInfoId, comment);
    setComment('');
  };

  const handleRemove = id => {
    setCommentID(id);
    deleteTrash(commentID).then(data => console.log(data));
  };

  const handleEnter = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return data.length > 0 ? (
    <>
      {data.map(item => {
        return (
          <Comments key={item.id}>
            <UserProfile user={item.user} />
            <div className="commentBox">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<p>${item.comment}</p>`,
                }}
              />
              {myInfo.id === item.user.id && (
                <BsFillTrashFill
                  className="trashIcon"
                  method="delete"
                  // onClick={onRemove}
                  onClick={() => handleRemove(item.id)}
                />
              )}
            </div>
            <span className="date">
              {moment(item.createdAt).format('YYYY-MM-DD')}
            </span>
          </Comments>
        );
      })}
      <CommentSignup>
        <div>
          <input
            type="text"
            value={comment}
            onChange={e => handleComment(e)}
            onKeyDown={handleEnter}
            placeholder="댓글을 입력해주세요"
          />
          <BsFillArrowUpCircleFill
            className="submitIcon"
            onClick={handleSubmit}
          />
        </div>
      </CommentSignup>
    </>
  ) : (
    <div />
  );
}

const Comments = styled.div`
  padding: 5px 6px 10px 6px;
  border-bottom: 1px solid #99999940;
  .commentBox {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3px;
  }
  .date {
    font-size: 13px;
    color: #71717199;
  }
  .trashIcon {
    /* margin-left: 10px; */

    width: 15px;
    color: #ababab;
    cursor: pointer;
  }
`;

const CommentSignup = styled.div`
  @media (max-width: 890px) {
  }
  @media (min-width: 891px) {
    width: 100%;
    margin: 0px auto;
  }
  div {
    display: flex;
    align-items: center;
    margin: 20px 0px;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #f6f6f6;
    :focus {
      outline: none;
      border: 0.5px solid black;
    }
  }
  .submitIcon {
    margin-left: 10px;
    font-size: 25px;
    color: #ff8a3d96;
  }
  .submitIcon:hover {
    color: #ff8a3d;
  }
`;

export default CommentInput;
