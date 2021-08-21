# MOME

## 개요

[배포 사이트 확인(Check the deployed Web)](https://react-mome.herokuapp.com/)

영어단어 및 여러 개념들을 기록 하고 외울 수 있게 도와주는 웹앱입니다.  
단어 추가,수정,삭제,모두삭제가 가능하고 얼마나 외웠는지 확인 할 수 있는
테스트를 해 볼 수 있습니다. 테스트 결과에 따라서 다양한 밈(Meme)들이 나타납니다.
테스트 결과의 등급은 'Good','So So','Bad'로 나뉘며
각 등급마다 5개의 밈들이 무작위로 하나씩 나타납니다.
<br>

React.Js flashcard WebApp
You can add, edit, remove , remove all and test yourself.
You will see a meme according to your test score.
There are 3 categories of memes. "Good", "So So", "Bad"
You will see one of them randomly according the your test score
<br>
<br>

## 개발 스택 (Technical Stack)

### 프론트엔드(Frontend): React.js, Redux, Redux-Thunk, styled-components,axios

<br>

### 유닛 테스트(Unit Test): jest

<br>

### UI : Figma

<br>

### 계획(Development Plans): github projects

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

I used **TDD** and have done tests and refactoring on **redux**,**redux thunk** functions.

I use JSON-Server as a mocking backend and store user inputs on db.json.
and Redux-thunk and Axios is used for asynchronous requests.
<br>
<br>

## 기능 (Features)

### 단어 추가 (Add a word)

![add](https://user-images.githubusercontent.com/40737888/129669277-c4e86c89-8eb8-43f5-9305-19aa80fff0e2.gif)
<br>

### 단어 수정 (Edit a word)

![edit](https://user-images.githubusercontent.com/40737888/129669706-5d361621-8f29-4cf9-b684-4ae6b689e682.gif)
<br>

### 단어 삭제 (Delete a word)

![delete](https://user-images.githubusercontent.com/40737888/129670375-74f1bf40-f855-4b57-bf18-14382691cc88.gif)
<br>

### 단어 관리 (Manage your words)

![manage](https://user-images.githubusercontent.com/40737888/129671486-44c1bf27-85b2-47a9-a705-38b902fb519e.gif)
<br>

### 테스트 시작 (Test yourself)

#### GOOD

![good](https://user-images.githubusercontent.com/40737888/129672461-33260d24-5495-4626-9bd4-cf992a3859e7.gif)

#### SO-SO

![soso](https://user-images.githubusercontent.com/40737888/129672758-1cac81f5-e67b-47b9-9217-a80c3c0f442e.gif)

#### BAD

![bad](https://user-images.githubusercontent.com/40737888/129673425-bc9d3a0c-8d73-4aee-827c-bb8699082d1c.gif)
