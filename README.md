![logo](/public/images/logo/logo2.png)

# 당근나라 소개

> 온 국민이 알고 있는 중고 거래 사이트이며, 동네 정보까지 나눠 이웃과 가깝고 따뜻한 온기를 나눌 수 있는 어플리케이션 입니다.

### 개발 인원 및 기간

> 개발 기간: 2022-04-18 ~ 2022-04-29
> 
> 개발 인원: 프론트 4명, 백엔드 1명

> [당근나라](http://3.34.139.60:3000/)
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

**Header**
- 로고 클릭시 메인으로
- 동네매물, 동네소식, 마이페이지, 당근채팅으로 이동

**메인화면**
- 인기매물 보러가기, 동네정보 보러가기

**회원가입**
- 중복아이디 확인
- 패스워드 일치 확인
- 동네선택

**로그인**

**마이페이지**

**매물 리스트**
- 로그인시 해당 유저의 지역의 인기 매물 리스트
- 비로그인시 지역 선택 드롭다운에 따라 선택된 지역의 인기 매물 리스트
- 게시물 클릭시 상세 정보로 이동

**매물 상세정보**
- 판매자와 채팅하기
- 매물 이미지 클릭 시 원본 보기
- 하단 다른 매물 리스트 컴포넌트 제공
- 관심 등록 기능

**매물 등록**
- 모든 종류의 이미지 파일 10장까지 업로드 가능
- 업로드 후 프리뷰에서 삭제 가능
- 프리뷰 클릭시 이미지 확대 가능
- 제목 1글자 이상 입력, 카테고리 선택, 이미지 최소 1장 등록, 게시글 내용 5자 이상이어야 등록 가능
- 가격 최대 금액 999999999원

**동네소식 리스트** 
- 글 좋아요, 댓글 수 보이기
- 글 클릭시 동네소식 상세정보로 이동

**동네소식 상세정보**

**동네소식 등록**
- 이미지 업로드는 선택사항
- 제목 1글자 이상, 게시글 내용 5자 이상 등록가능

**매물/동네정보 검색 리스트**
- 입력된 검색어에 맞는 매물/동네정보 리스트 출력

**채팅 리스트**
- 유저 사진과 닉네임 보이기
- 최신순으로 정렬
- 마지막 대화 표시

**채팅 룸**
- 날짜별로 라인 표시
- 자신 채팅과 상대 채팅 UI 구분
- 현재 채팅 중인 매물 보이기

**Footer**
- 팀 노션, 팀원 블로그로 이동
