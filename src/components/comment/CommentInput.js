import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { getCommentList } from 'apis/comment';

import UserProfile from 'components/profile/UserProfile';
import { BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';
import { UserContext } from 'context/context';

function CommentInput(props) {
  const { districtInfoId, forceUpdate } = props;
  const [data, setData] = useState();
  const myInfo = useContext(UserContext);

  useEffect(() => {
    getCommentList(districtInfoId).then(data => {
      if (data.message === 'SUCCESS') {
        setData(data.infoComments);
      }
    });
  }, [districtInfoId, forceUpdate]);

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
                  // onClick={() => this.handleRemove(e.id)}
                />
              )}
            </div>
            <span>{moment(item.createdAt).format('YYYY-MM-DD')}</span>
          </Comments>
        );
      })}
    </>
  ) : (
    <div />
  );
}

const Comments = styled.div`
  padding: 10px 6px 10px 6px;
  border-bottom: 1px solid #99999940;
  .commentBox {
    display: flex;
    justify-content: space-between;
  }
  span {
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
