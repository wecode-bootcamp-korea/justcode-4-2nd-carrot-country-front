import React from 'react';
import styled from 'styled-components';

function CommentInput() {
  const [input, setInput] = useState();
  const { userData } = useContext(UserContext);
  const [comments, setComments] = useState([]);

  const onChange = e => {
    setInput(e.target.value);
  };

  const addComment = () => {
    setComments(
      comments.concat({
        id: comments.length + 1,
        content: input,
        userName: userDate,
      })
    );
  };

  return (
    <Comments>
      <div>
        {comment.map}
        <UserInfo>
          <UserProfile user={user} />
          <BsFillTrashFill
            className="trashIcon"
            // onClick={() => this.handleRemove(e.id)}
          />
        </UserInfo>
      </div>
      <p>와~ 굉장히 넓네요! 케이크도 맛있어보여요^^</p>
      <span className="time">56분 전</span>
    </Comments>
  );
}

const Comments = styled.div`
  padding: 20px 6px 20px 6px;
  border-bottom: 1px solid #99999940;
  p {
    padding: 15px 0px;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -0.5px;
  }
  .time {
    font-size: 13px;
    color: #71717199;
  }
  .trashIcon {
    margin-left: 10px;
    width: 15px;
    color: #ababab;
  }
`;

export default CommentInput;
