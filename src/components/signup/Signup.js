import React, { useState } from 'react';
import Modal from 'components/modal/Modal';
import { AiFillCheckSquare } from 'react-icons/ai';

import {
  InputIdWrapper,
  SelectWrapper,
  Block,
  InputWrapper,
  MainWrapper,
  SignupBtn,
  PolicyAgreed,
} from 'components/signup/SignupStyle';

function Signup() {
  // input state
  const [useVisible, setUseVisible] = useState(false);
  const [useId, setUseId] = useState('');
  const [useIdCheck, setUseIdCheck] = useState(false);
  const [usePw, setUsePw] = useState('');
  const [usePwCheck, setUsePwCheck] = useState('');
  const [useName, setUseName] = useState('');

  const idRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,12}$/;
  const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
  const nameRegExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]{0,10}$/;
  const idChecked = idRegExp.test(useId) || useId.trim() === '';
  const pwChecked = pwRegExp.test(usePw) || usePw.trim() === '';
  const pwCheckChecked = usePw === usePwCheck || usePwCheck.trim() === '';
  const nameChecked = nameRegExp.test(useName) || useName.trim() === '';

  // select state
  const [useCity, setUseCity] = useState('서울');
  const [useDistrict, setUseDistrict] = useState('');
  const [usePolicy, setUsePolicy] = useState(false);

  const handleId = e => {
    const { value } = e.target;
    setUseId(value);
  };
  const handlePw = e => {
    const { value } = e.target;
    setUsePw(value);
  };
  const handlePwCheck = e => {
    const { value } = e.target;
    setUsePwCheck(value);
  };
  const handleName = e => {
    const { value } = e.target;
    setUseName(value);
  };
  const handleCheckId = () => {
    alert('사용 가능한 아이디 입니다.');
    setUseIdCheck(true);
  };
  const handleCity = e => {
    const { value } = e.target;
    setUseCity(value);
  };
  const handleDistrict = e => {
    const { value } = e.target;
    setUseDistrict(value);
  };
  const handlePolicy = () => {
    setUsePolicy(!usePolicy);
  };
  const handleSignup = () => {
    if (useId === '' || usePw === '') {
      return alert('아이디 또는 패스워드를 입력 해주세요');
    }
    if (useId !== '' && !useIdCheck) {
      return alert('아이디 중복확인을 해주세요');
    }
    if (!idChecked || !pwChecked) {
      return alert('아이디 또는 패스워드를 확인 해주세요');
    }
    if (usePw !== usePwCheck) {
      return alert('동일한 패스워드를 입력 해주세요');
    }
    if (useName === '' || !nameChecked) {
      return alert('닉네임을 확인 해주세요');
    }
    if (useDistrict === '' || useDistrict === '지역선택') {
      return alert('지역을 선택 해주세요');
    }
    if (!usePolicy) {
      return alert('이용약관을 동의 해주세요');
    }
    console.log('sign up!');
  };
  return (
    <Modal
      title="당근가입"
      visible={useVisible}
      setVisible={setUseVisible}
      // closeBtn={true}
      // width="100px"
      // height="700px"
    >
      <MainWrapper>
        <Block>
          <InputWrapper isChecked={idChecked}>
            <span>아이디</span>
            <span>영문 숫자 포함 5자 이상</span>
            <InputIdWrapper idChecked={idChecked}>
              <input
                type="text"
                value={useId}
                onChange={handleId}
                maxLength={12}
                placeholder="로그인 시 사용할 아이디를 입력 해주세요"
              />
              <button
                onClick={handleCheckId}
                disabled={!idChecked || useId === ''}
              >
                중복확인
              </button>
            </InputIdWrapper>
          </InputWrapper>
          <InputWrapper isChecked={pwChecked}>
            <span>패스워드</span>
            <span>영문 숫자 포함 8자 이상</span>
            <input
              type="password"
              value={usePw}
              onChange={handlePw}
              maxLength={15}
              placeholder="로그인 시 사용할 패스워드를 입력 해주세요"
            />
          </InputWrapper>
          <InputWrapper isChecked={pwCheckChecked}>
            <span>패스워드 확인</span>
            <span>위에 입력한 패스워드와 동일</span>
            <input
              type="password"
              value={usePwCheck}
              onChange={handlePwCheck}
              placeholder="위에 입력한 패스워드와 동일하게 입력 해주세요"
            />
          </InputWrapper>
          <InputWrapper isChecked={nameChecked}>
            <span>닉네임</span>
            <span>한글 또는 영문 10자 이하</span>
            <input
              type="text"
              value={useName}
              onChange={handleName}
              maxLength={10}
              placeholder="당근나라에서 활동할 닉네임을 입력 해주세요"
            />
          </InputWrapper>
        </Block>
        <Block>
          <span>지역 선택</span>
          <SelectWrapper>
            <select value={useCity} onChange={handleCity}>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="인천">인천</option>
            </select>
          </SelectWrapper>
          <SelectWrapper>
            <select value={useDistrict} onChange={handleDistrict}>
              <option>지역선택</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </SelectWrapper>
          <PolicyAgreed isChecked={usePolicy}>
            <AiFillCheckSquare size={18} onClick={handlePolicy} />
            <span>이용약관 동의</span>
          </PolicyAgreed>
        </Block>
        <SignupBtn onClick={handleSignup}>가입하기</SignupBtn>
      </MainWrapper>
    </Modal>
  );
}

export default Signup;
