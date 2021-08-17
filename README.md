# MOME

## 개요

영어단어 및 여러 개념들을 기록 하고 외울 수 있게 도와주는 웹앱입니다.  
단어 추가,수정,삭제,모두삭제가 가능하고 얼마나 외웠는지 확인 할 수 있는
테스트를 해 볼 수 있습니다. 테스트 결과에 따라서 다양한 밈(Meme)들이 나타납니다.
테스트 결과의 등급은 'Good','So So','Bad'로 나뉘며
각 등급마다 5개의 밈들이 무작위로 하나씩 나타납니다.
<br>
<br>

## 개발 스택

### 프론트엔드: React.js, Redux, Redux-Thunk, styled-components,axios

<br>

### 유닛 테스트: jest

<br>

### UI : Figma

<br>

### 계획: github projects

<br>

기본적으로 **TDD** 로 개발을 하였으며
**redux**, **redux thunk** 함수에 대해 리팩토링 및 유닛테스트를 하였습니다.
<br>
<br>
json-server를 이용해 백엔드 서버가 있다고 가정했고
db.json파일에 단어들을 따로 저장하고 있으며
**redux-thunk** 와 **axios** 를 이용하여 비동기적으로 데이터를 가져옵니다.
테스트 결과는 **Giphy API** 를 이용하여 비동기적으로 가져옵니다.
<br>
<br>

<br>
<br>

## 기능

### 단어 추가

![add](https://user-images.githubusercontent.com/40737888/129669277-c4e86c89-8eb8-43f5-9305-19aa80fff0e2.gif)
<br>

### 단어 수정

![edit](https://user-images.githubusercontent.com/40737888/129669706-5d361621-8f29-4cf9-b684-4ae6b689e682.gif)
<br>

### 단어 삭제

![delete](https://user-images.githubusercontent.com/40737888/129670375-74f1bf40-f855-4b57-bf18-14382691cc88.gif)
<br>

### 단어 관리

![manage](https://user-images.githubusercontent.com/40737888/129671486-44c1bf27-85b2-47a9-a705-38b902fb519e.gif)
<br>

### 테스트 시작

#### GOOD

![good](https://user-images.githubusercontent.com/40737888/129672461-33260d24-5495-4626-9bd4-cf992a3859e7.gif)

#### SO-SO

![soso](https://user-images.githubusercontent.com/40737888/129672758-1cac81f5-e67b-47b9-9217-a80c3c0f442e.gif)

#### BAD

![bad](https://user-images.githubusercontent.com/40737888/129673425-bc9d3a0c-8d73-4aee-827c-bb8699082d1c.gif)
