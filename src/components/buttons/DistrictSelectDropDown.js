import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCities, getDistricts } from 'apis/category';

const DistrictSelectDropDown = () => {
  const [cities, setCities] = useState({
    message: '',
    cities: [],
  }); //도시 정보 가져와서 담을 state

  const [selectedCity, setSelectedCity] = useState(); //선택된 도시 정보

  const [districts, setDistricts] = useState({
    message: '',
    districts: [],
  }); //구 정보 담을 state

  const [selectedDistricts, setSelectedDistricts] = useState(); //선택된 구 정보

  useEffect(() => {
    getCities().then(data => setCities(data));
  }, []);

  useEffect(() => {
    console.log('selectedCity>>', selectedCity);
    getDistricts(selectedCity).then(data => setDistricts(data));
    console.log('useEffect>>', districts);
  }, [selectedCity]); //도시 선택시 구 정보 불러오는 이펙트

  const onCityChange = e => {
    console.log(e.target.value);
    setSelectedCity(e.target.value); //도시 선택시
  };

  const onDistritcChange = e => {
    setSelectedDistricts(e.target.value);
    console.log(selectedDistricts);
  };
  return (
    cities.cities && (
      <DistrictWrapper>
        <CityDropDown onChange={e => onCityChange(e)}>
          <option value={`지역을 선택하세요`}>지역을 선택하세요</option>
          {cities.cities.map(cities => (
            <option value={cities.id} key={cities.id}>
              {cities.cityName}
            </option>
          ))}
        </CityDropDown>
        <DistrictDropDown onChange={e => onDistritcChange(e)}>
          <option value={`동네를 선택하세요`}>동네를 선택하세요</option>
          {selectedCity > 0
            ? districts.districts.map(data => (
                <option value={data.id} key={data.id}>
                  {data.districtName}
                </option>
              ))
            : null}
        </DistrictDropDown>
      </DistrictWrapper>
    )
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
