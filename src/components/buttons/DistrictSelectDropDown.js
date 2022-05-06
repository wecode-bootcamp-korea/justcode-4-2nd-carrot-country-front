import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from 'components/loading/Loading';

const DistrictSelectDropDown = props => {
  const { cities, districts, onDistrictChange, onCityChange } = props;
  return cities.length > 0 ? (
    <DistrictWrapper>
      <CityDropDown onChange={e => onCityChange(e)}>
        <option value={`지역을 선택하세요`}>지역을 선택하세요</option>
        {cities.map(cities => (
          <option value={cities.id} key={cities.id}>
            {cities.cityName}
          </option>
        ))}
      </CityDropDown>
      <DistrictDropDown onChange={e => onDistrictChange(e)}>
        <option value={`동네를 선택하세요`}>동네를 선택하세요</option>
        {districts.districts &&
          districts.districts.map(districts => (
            <option value={districts.id} key={districts.id}>
              {districts.districtName}
            </option>
          ))}
      </DistrictDropDown>
    </DistrictWrapper>
  ) : (
    <Loading />
  );
};
export default DistrictSelectDropDown;

const DistrictWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  width: auto;
`;

const CityDropDown = styled.select`
  border: 1px solid lightgray;
  border-radius: 7px;
  margin-right: 10px;
  @media (max-width: 690px) {
    font-size: 15px;
    height: 30px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 20%;
    height: 30px;
    font-size: 15px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 179px;
    height: auto;
    font-size: 17px;
  }
`;

const DistrictDropDown = styled.select`
  border: 1px solid lightgray;
  border-radius: 7px;
  @media (max-width: 690px) {
    font-size: 15px;
    height: 30px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 20%;
    height: 30px;
    font-size: 15px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 179px;
    height: 47px;
    font-size: 17px;
  }
`;
