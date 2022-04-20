import SubmitButton from 'components/buttons/SubmitButton';
import ListTitle from 'components/list/ListTitle';
import AreaTag from 'components/list/AreaTag';
import DistrictInfoList from 'components/list/DistrictInfoList';

function DistrictInfo() {
  return (
    <>
      <ListTitle title={'우리 동네 소식'} />
      <AreaTag
        maxWidth={1024}
        city={mockdata[0].city}
        district={mockdata[0].district}
      />
      <DistrictInfoList maxWidth={1024} data={mockdata} />
      <SubmitButton />
    </>
  );
}

export default DistrictInfo;

const mockdata = [
  {
    id: 1,
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '포켓몬빵 파는 편의점 알려주세요',
    content:
      '포켓몬빵 파는 편의점 알려주세요.포켓몬빵 파는 편의점 알려주세요포켓몬빵 파는 편의점 알려주세요포켓몬빵 파는 편의점 알려주세요포켓몬빵 파는 편의점 알려주세요포켓몬빵 파는 편의점 알려주세요포켓몬빵 파는 편의점 알려주세요.포켓몬빵 파는 편의점 알려주세요',
    city: '경기도',
    district: '의정부시',
    commentCount: 1,
  },
  {
    id: 2,
    imageUrl: '',
    title: '포켓몬빵 파는 편의점 알려주세요',
    content: '.포켓몬빵 파는 편의점 알려주세요',
    city: '경기도',
    district: '의정부시',
    commentCount: 1,
  },
];
