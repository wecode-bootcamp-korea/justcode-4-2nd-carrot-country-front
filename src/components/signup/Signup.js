import React, { useState } from 'react';
import Modal from 'components/modal/Modal';
import styled from 'styled-components';

function Signup() {
  const [useVisible, setUseVisible] = useState(true);
  return (
    <Modal
      title="당근가입"
      visible={useVisible}
      setVisible={setUseVisible}
      // closeBtn={true}
      // width="100px"
      // height="700px"
    >
      <MainWrapper onClick={() => console.log('!!')}>
        <input type="text" placeholder="사용하실 아이디를 입력해주세요" />
        <input type="text" placeholder="사용하실 닉네임을 입력해주세요" />
        <input type="password" placeholder="사용하실 패스워드를 입력해주세요" />
        <select>
          <option>서울</option>
          <option>경기</option>
          <option>인천</option>
        </select>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button>가입하기</button>
      </MainWrapper>
    </Modal>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  h1 {
    font-size: 24px;
    padding-bottom: 20px;
  }
  input,
  select,
  button {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid;
    border-radius: 5px;
  }
  select {
    color: #666;
  }
`;
export default Signup;
