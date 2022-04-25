import { useState, useEffect } from 'react';
import SubmitButton from 'components/buttons/RegisterButton';
import ListTitle from 'components/list/ListTitle';
import AreaTag from 'components/list/AreaTag';
import DistrictInfoList from 'components/list/DistrictInfoList';
import { getDistrictList } from 'apis/district';

function DistrictInfo() {
  const [districtInfoData, setDistrictInfoData] = useState(mockdata);

  useEffect(() => {
    getDistrictList().then(data => setDistrictInfoData(data.districtInfos));
  }, []);

  return (
    <div>
      <ListTitle title="우리 동네 소식" />
      <AreaTag
        maxWidth={1024}
        city={districtInfoData[0].city.cityName}
        district={districtInfoData[0].district.districtName}
      />
      <DistrictInfoList maxWidth={1024} data={districtInfoData} />
      <SubmitButton />
    </div>
  );
}

export default DistrictInfo;

const mockdata = [
  {
    id: 1,
    title: '맛집알려주세요.',
    content: '이동네 이사 처음왔는데 맛집 어딨나요?',
    viewCount: 1,
    city: {
      id: 1,
      cityName: '서울',
    },
    district: {
      id: 1,
      districtName: '중구',
    },
    districtInfoImage: [],
    districtInfoLiked: [
      {
        id: 3,
      },
    ],
  },
];
