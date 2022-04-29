import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { deleteTrash, getCommentList } from 'apis/comment';

import UserProfile from 'components/profile/UserProfile';
import { BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';
import { UserContext } from 'context/context';

function CommentInput(props) {
  const { districtInfoId, forceUpdate } = props;
  const [data, setData] = useState();
  const [commentID, setCommentID] = useState(0);
  // const [trash, setTrash] = useState();
  const myInfo = useContext(UserContext);

  useEffect(() => {
    getCommentList(districtInfoId).then(data => {
      if (data.message === 'SUCCESS') {
        setData(data.infoComments);
      }
      console.log(data);
    });
  }, [districtInfoId, forceUpdate]);

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

  const handleRemove = id => {
    setCommentID(id);
    deleteTrash(commentID).then(data => console.log(data));
  };

  return data ? (
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

export default CommentInput;
