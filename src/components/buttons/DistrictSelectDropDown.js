import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import theme from 'styles/theme';

const DistrictSelectDropDown = () => {
  return (
    <DistrictWrapper>
      <CityDropDown>
        <option value={`지역을 선택하세요`}>지역을 선택하세요</option>
      </CityDropDown>
      <DistrictDropDown>
        <option value={`동네를 선택하세요`}>동네를 선택하세요</option>
      </DistrictDropDown>
    </DistrictWrapper>
  );
};

export default DistrictSelectDropDown;

const DistrictWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CityDropDown = styled.select`
  @media (max-width: 690px) {
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
  }
  // 모니터
  @media (min-width: 891px) {
    width: 179px;
    height: 45px;
  }
`;

const DistrictDropDown = styled.select`
  @media (max-width: 690px) {
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
  }
  // 모니터
  @media (min-width: 891px) {
    width: 179px;
    height: 45px;
  }
`;
