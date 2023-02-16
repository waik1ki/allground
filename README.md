## **💻 올그라운드**

진행 기간 : 2021 / 04 / 10 ~ 2021 / 07 / 27

팀 구성 : 프론트엔드 1명, 백엔드 1명

## **📄 서비스 소개**

올그라운드 회사가 제공하는 서비스를 소개하는 사이트 입니다.

사이트 주소 : [http://allground.co.kr/](http://allground.co.kr/)

## 👨🏻‍💻 역할

프론트엔드

## 🛠 기술 스택

- Front-End
    - Vue.js
    - Vuetify
- Back-End
    - Node.js
    - Express
- Database
    - MongoDB

## ****📌 주요 기능****

- 데스크탑, 태블릿, 모바일 반응형 웹사이트
- 메일 전송
- 어드민 페이지
    - 로그인, 로그아웃
    - 게시글 CRUD 시스템
    - 헤더 메뉴 ON / OFF

### 1. ****반응형****

데스크탑

![1](https://user-images.githubusercontent.com/79083202/219433535-39692da4-e5e3-447b-9b48-7b490f4d929a.gif)

태블릿

![2](https://user-images.githubusercontent.com/79083202/219433544-b7094569-a70d-488f-a8dc-205cec0a3c9d.gif)

모바일

![3](https://user-images.githubusercontent.com/79083202/219433549-45c37e31-5d2b-437b-b170-7f61e900d78f.gif)

### 2. 메일 발송

![4](https://user-images.githubusercontent.com/79083202/219433588-0c697ea5-38df-4b8b-afc0-98e4d2fe25d2.gif)

### 3. 어드민 페이지

![5](https://user-images.githubusercontent.com/79083202/219433591-6dddd67b-6cf8-4f4e-a038-94d96f851bb9.gif)

## ****⚠️ 개발 이슈****

- 메일 전송
    
    처음 메일 전송 기능을 구현할 당시 SEND 버튼을 클릭하였을 때 어떠한 인증 절차 없이 메일이 전송이 되도록 제작하였습니다.
    
    하지만 이런 방식은 메일 전송 기능을 악용할 수 있다는 사실을 인지하게 되었고, 메일 전송시 간단한 더하기 문제를 통해 정답을 맞출 시 전송되도록 수정하였습니다.
    
    **개선 전**
    
    ![6](https://user-images.githubusercontent.com/79083202/219434520-a9a701b2-2b08-4481-ae93-f500e650aa3e.gif)
    
    **개선 후**
    
    ![7](https://user-images.githubusercontent.com/79083202/219434532-449868bf-770b-4d4f-93e0-04b73517ea30.gif)
