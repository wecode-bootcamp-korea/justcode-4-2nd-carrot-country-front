import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import SubmitButton from 'components/buttons/RegisterButton';
import ListTitle from 'components/list/ListTitle';
import AreaTag from 'components/list/AreaTag';
import DistrictInfoList from 'components/list/DistrictInfoList';
import { getDistrictList } from 'apis/district';
import { UserContext } from 'context/context';
import { FaRegSadTear } from 'react-icons/fa';
import Loading from 'components/loading/Loading';

function DistrictInfoDelay() {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(Boolean(user.id));
  const [districtInfoData, setDistrictInfoData] = useState(null);

  useEffect(() => {
    setIsLogin(Boolean(user.id));
  }, [user]);

  useEffect(() => {
    getDistrictList()
      .then(data => {
        setDistrictInfoData(data.districtInfos);
        return Boolean(data.message);
      })
      .then(isOkay => {
        isOkay && setLoading(false);
      });
  }, [isLogin]);

  return loading ? (
    <Loading />
  ) : isLogin ? (
    <DistrictInfo data={districtInfoData} user={user} />
  ) : (
    <DistrictInfoNoLogin />
  );
}

function DistrictInfoNoLogin() {
  return (
    <NoLoginWrapper>
      <FaRegSadTear />
      <p>우리 동네 소식은 로그인 후에 볼 수 있습니다</p>
    </NoLoginWrapper>
  );
}

function DistrictInfo(props) {
  const { data, user } = props;

  return (
    <div>
      <ListTitle title="우리 동네 소식" />
      <AreaTag
        maxWidth={1024}
        city={user.city.cityName}
        district={user.district.districtName}
      />
      {data.length ? (
        <DistrictInfoList maxWidth={1024} data={data} />
      ) : (
        <NoDistrictInfoData />
      )}
      <SubmitButton />
    </div>
  );
}

function NoDistrictInfoData() {
  return (
    <NoDataTextWrapper>
      <FaRegSadTear />
      <p>이 지역에는 게시글이 없습니다</p>
      <p>우리 동네 첫 소식을 등록해주세요!</p>
    </NoDataTextWrapper>
  );
}

export default DistrictInfoDelay;

const NoLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0 200px 0;
  font-size: 150px;
  color: silver;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  :first-child {
    padding-bottom: 200px;
  }
  p {
    color: silver;
    font-size: 20px;
    padding-top: 10px;
  }
`;

const NoDataTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0 140px 0;
  font-size: 150px;
  color: silver;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  :first-child {
    padding-bottom: 200px;
  }
  p {
    color: silver;
    font-size: 20px;
    padding-top: 10px;
  }
`;
