![logo](/public/images/logo/logo2.png)

# 당근나라 소개

> 온 국민이 알고 있는 중고 거래 사이트이며, 동네 정보까지 나눠 이웃과 가깝고 따뜻한 온기를 나눌 수 있는 어플리케이션 입니다.

### 개발 인원 및 기간

> 개발 기간: 2022-04-18 ~ 2022-04-29
> 
> 개발 인원: 프론트 4명, 백엔드 1명
> 
> [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/justcode-4-2nd-carrot-country-back)

### 프로젝트 선정 이유

> 2주라는 짧은 기간 안에 복잡한 데이터베이스와, 어려운 기능보다는 프론트, 백엔드 포지션 모두가 만족할 수 있는 기본에 충실한 웹 사이트로 클린한 코드와 지금까지 배웠던 기술들을 잘 녹여낼 수 있는 프로젝트라 생각합니다.

### 데모 이미지

> 메인화면

![screencapture-1485543](public/images/thump/screencapture-1485543.png)

> 로그인

![screencapture-1485571](public/images/thump/screencapture-1485571.png)

> 회원가입

![screencapture-1485596](public/images/thump/screencapture-1485596.png)

> 매물 리스트

![screencapture-1485833](public/images/thump/screencapture-1485898.png)

> 매물 상세보기

![screencapture-1485866](public/images/thump/screencapture-1485866.png)

> 매물 등록

![screencapture-1485933](public/images/thump/screencapture-1485933.png)

> 동네소식 리스트

![screencapture-1485951](public/images/thump/screencapture-1485951.png)

> 동네소식 상세보기

![screencapture-1485989](public/images/thump/screencapture-1485989.png)

> 동네소식 등록

![screencapture-1485123](public/images/thump/screencapture-1485123.png)

> 매물/동네정보 검색 리스트

![screencapture-1486032](public/images/thump/screencapture-1486032.png)

> 채팅

![screencapture-1486060](public/images/thump/screencapture-1486060.png)

# 적용 기술 및 구현 기능

### 적용 기술

> 프론트엔드 : React, styled-comonpents, Context API, socket.io-client, jest, React-Quill
>
> 백엔드 : Node.js, Express.js, MySQL, bcrypt, jsonwebtoken, prisma, multer, socket.io
>
> 공통 : RESTful API, MVC Pattern, Github, Slack, Notion

### 구현 기능

**메인화면**
- 인기매물 보러가기, 동네정보 보러가기

**회원가입**
- 중복아이디 확인
- 패스워드 일치 확인
- 동네선택

**로그인**

**마이페이지**

**매물 리스트**
- 로그인시 해당 유저의 지역의 인기 매물 불러옴
- 비로그인시 지역 선택 드롭다운에 따라 선택된 지역의 인기 매물을 불러옴
- 리스트 자체 컴포넌트화 후 다른 페이지에서 재사용
- 글 클릭시 상세 정보로 이동 

**매물 상세정보**
- 판매자와 채팅하기
- 매물 이미지 클릭 시 원본 보기
- 하단 다른 매물 리스트 컴포넌트 제공
- 관심 기능
- 조획 기능

**매물 등록**
- 모든 종류의 이미지 파일 10장까지 업로드 가능
- 업로드 후 프리뷰에서 삭제 가능
- 프리뷰 클릭시 이미지 확대 모달창 구현
- 제목 1글자 이상 입력, 카테고리 선택, 이미지 최소 1장 등록, 게시글 내용 5자 이상이어야 등록 가능
- 이미지 서버에 저장 구현
- 가격 최대 금액 999999999원으로 설정

**동네소식 리스트** 
- 글 이미지 유무에 따라 다른 UI 구성
- 글 좋아요, 댓글 수 보이기
- 로그인 안한 경우, 우리동네 매물 없는경우 조건부 렌더링
- 글 클릭시 동네소식 상세정보로 이동

**동네소식 상세정보**

**동네소식 등록**
- 이미지 업로드는 선택사항
- 제목 1글자 이상, 게시글 내용 5자 이상 등록가능
- Multer 이용해 이미지 서버에 저장 구현

**매물/동네정보 검색 리스트**
- 입력된 검색어에 맞는 데이터 불러옴
- 일치하는 검색어 없을 시 검색결과 없음 창 띄움
- 새로운 검색어 입력시 매물과 동네 정보 새로 불러옴

**채팅 리스트**
- 유저 사진과 닉네임 보이기
- 최신순으로 정렬
- 마지막 대화 표시

**채팅 룸**
- 중복되는 시간 표시 제거
- 날짜별로 라인 표시
- 자신 채팅과 상대 채팅 UI 구분
- 현재 채팅 중인 매물 보이기

**페이지 공통**
- 페이지 이동시 스크롤 가장 상위로 고정

**리스트 공통** 
- 리스트 타이틀 컴포넌트
- 유저 동네 보이는 컴포넌트

**새 글 등록 공통**
- 글 등록 전 새로고침, 뒤로가기, 글 등록 취소 클릭시 경고
- 글 등록 후 해당 글 상세정보 페이지로 이동 

**버튼 공통**
- 글 등록 버튼. 클릭 애니메이션, 각 등록 페이지로 이동
- 글 등록 취소 버튼.

**로딩 컴포넌트**
- 데이터 렌더링 전 로딩 컴포넌트

**Footer**
- 팀 노션, 팀원 블로그로 이동
- 반응형 
