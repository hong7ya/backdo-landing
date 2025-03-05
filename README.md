# BackDo

- 다음 이미지를 클릭하면 프로젝트 사이트로 이동합니다.

[![backdo_banner](https://github.com/user-attachments/assets/e8da2d08-a16d-44af-b4b3-83ce91d551ad)](https://landing.BackDo.site/)

# 레포지토리 링크

[개발자도구 프론트엔드 레포지토리](https://github.com/GoToPrevLine/devtools-frontend) | [랜딩 페이지 레포지토리](https://github.com/GoToPrevLine/landing) | [서버 레포지토리](https://github.com/GoToPrevLine/server)

# 목차

<!-- toc -->

- [아이디어 선정 배경](#%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%EC%84%A0%EC%A0%95-%EB%B0%B0%EA%B2%BD)
  * [디버거에서 앞으로 가기가 있는 데, 왜 거꾸로 가기는 없는 지에 대한 의문](#%EB%94%94%EB%B2%84%EA%B1%B0%EC%97%90%EC%84%9C-%EC%95%9E%EC%9C%BC%EB%A1%9C-%EA%B0%80%EA%B8%B0%EA%B0%80-%EC%9E%88%EB%8A%94-%EB%8D%B0-%EC%99%9C-%EA%B1%B0%EA%BE%B8%EB%A1%9C-%EA%B0%80%EA%B8%B0%EB%8A%94-%EC%97%86%EB%8A%94-%EC%A7%80%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%98%EB%AC%B8)
  * [자유롭게 거꾸로 가고, 이후에는 새로운 경로로 탐색 희망](#%EC%9E%90%EC%9C%A0%EB%A1%AD%EA%B2%8C-%EA%B1%B0%EA%BE%B8%EB%A1%9C-%EA%B0%80%EA%B3%A0-%EC%9D%B4%ED%9B%84%EC%97%90%EB%8A%94-%EC%83%88%EB%A1%9C%EC%9A%B4-%EA%B2%BD%EB%A1%9C%EB%A1%9C-%ED%83%90%EC%83%89-%ED%9D%AC%EB%A7%9D)
- [기능](#%EA%B8%B0%EB%8A%A5)
  * [for 문에서 BackDo](#for-%EB%AC%B8%EC%97%90%EC%84%9C-backdo)
  * [if 문에서 BackDo](#if-%EB%AC%B8%EC%97%90%EC%84%9C-backdo)
  * [함수에서 BackDo](#%ED%95%A8%EC%88%98%EC%97%90%EC%84%9C-backdo)
- [기술 스택](#%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
- [개발 과정 중 챌린지 요소](#%EA%B0%9C%EB%B0%9C-%EA%B3%BC%EC%A0%95-%EC%A4%91-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EC%9A%94%EC%86%8C)
  * [디버거에 새로운 기능 넣기](#%EB%94%94%EB%B2%84%EA%B1%B0%EC%97%90-%EC%83%88%EB%A1%9C%EC%9A%B4-%EA%B8%B0%EB%8A%A5-%EB%84%A3%EA%B8%B0)
    + [구글 크롬 오픈 소스 접근 방법](#%EA%B5%AC%EA%B8%80-%ED%81%AC%EB%A1%AC-%EC%98%A4%ED%94%88-%EC%86%8C%EC%8A%A4-%EC%A0%91%EA%B7%BC-%EB%B0%A9%EB%B2%95)
    + [코드 베이스 탐구 영역 한정](#%EC%BD%94%EB%93%9C-%EB%B2%A0%EC%9D%B4%EC%8A%A4-%ED%83%90%EA%B5%AC-%EC%98%81%EC%97%AD-%ED%95%9C%EC%A0%95)
    + [기존 로직 활용 여부](#%EA%B8%B0%EC%A1%B4-%EB%A1%9C%EC%A7%81-%ED%99%9C%EC%9A%A9-%EC%97%AC%EB%B6%80)
  * [BackDo 기능 구현하기](#backdo-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
    + [방향 : JavaScript 흐름과 breakpoint 흐름 맞추기](#%EB%B0%A9%ED%96%A5--javascript-%ED%9D%90%EB%A6%84%EA%B3%BC-breakpoint-%ED%9D%90%EB%A6%84-%EB%A7%9E%EC%B6%94%EA%B8%B0)
      - [for 문의 흐름](#for-%EB%AC%B8%EC%9D%98-%ED%9D%90%EB%A6%84)
      - [for 문 body와 조건 부여](#for-%EB%AC%B8-body%EC%99%80-%EC%A1%B0%EA%B1%B4-%EB%B6%80%EC%97%AC)
      - [for 문 head의 afterthought part와 현재 위치](#for-%EB%AC%B8-head%EC%9D%98-afterthought-part%EC%99%80-%ED%98%84%EC%9E%AC-%EC%9C%84%EC%B9%98)
      - [for 문 head의 condition part와 세 가지 상태](#for-%EB%AC%B8-head%EC%9D%98-condition-part%EC%99%80-%EC%84%B8-%EA%B0%80%EC%A7%80-%EC%83%81%ED%83%9C)
    + [정도 : 거꾸로 가야하는 최소한의 정도를 구하기](#%EC%A0%95%EB%8F%84--%EA%B1%B0%EA%BE%B8%EB%A1%9C-%EA%B0%80%EC%95%BC%ED%95%98%EB%8A%94-%EC%B5%9C%EC%86%8C%ED%95%9C%EC%9D%98-%EC%A0%95%EB%8F%84%EB%A5%BC-%EA%B5%AC%ED%95%98%EA%B8%B0)
      - [한 단계 이전을 적용하여 시뮬레이션 실행](#%ED%95%9C-%EB%8B%A8%EA%B3%84-%EC%9D%B4%EC%A0%84%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%98%EC%97%AC-%EC%8B%9C%EB%AE%AC%EB%A0%88%EC%9D%B4%EC%85%98-%EC%8B%A4%ED%96%89)
      - [시뮬레이션 결과 판별과 반복할지 여부 결정](#%EC%8B%9C%EB%AE%AC%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B2%B0%EA%B3%BC-%ED%8C%90%EB%B3%84%EA%B3%BC-%EB%B0%98%EB%B3%B5%ED%95%A0%EC%A7%80-%EC%97%AC%EB%B6%80-%EA%B2%B0%EC%A0%95)
    + [범위 : 이동할 레벨을 한정시키기](#%EB%B2%94%EC%9C%84--%EC%9D%B4%EB%8F%99%ED%95%A0-%EB%A0%88%EB%B2%A8%EC%9D%84-%ED%95%9C%EC%A0%95%EC%8B%9C%ED%82%A4%EA%B8%B0)
  * [Chrome에서 WebSocket URL 얻기](#chrome%EC%97%90%EC%84%9C-websocket-url-%EC%96%BB%EA%B8%B0)
- [회고](#%ED%9A%8C%EA%B3%A0)

<!-- tocstop -->

# 아이디어 선정 배경

## 디버거에서 앞으로 가기가 있는 데, 왜 거꾸로 가기는 없는 지에 대한 의문

기존 디버거는 여러가지 버전으로 앞으로 가는 기능을 제공하고 있습니다. step, step into, step out, step over… 그런데 왜 거꾸로 가는 기능은 없는 지 이따금씩 의문이 생깁니다. 바쁘게 코드를 디버깅하다가 순간 들러야 하는 줄을 지나치게 될 때는 아쉽기도 합니다. 이러한 순간들을 모아 BackDo 프로젝트로 승화했습니다. 디버거의 도구모음중 하나로 이질감없는 위치에 BackDo 버튼이 있습니다. 직관적으로 버튼 한 번만 누르면 작동합니다.

## 자유롭게 거꾸로 가고, 이후에는 새로운 경로로 탐색 희망

BackDo는 resume로 지나쳤다거나, step을 누르면서 지나쳤다거나 상관없이, 즉 사전 조건 필요 없이 언제나 코드 흐름 상 한 단계 거꾸로 간 모습을 표현해줍니다. 이전에는 들어가지 않았던 함수 내부로 들어가 볼 수도 있고 또는 스킵할 수도 있는 기회를 제공합니다. 비디오 녹화 처럼 단순히 기억을 되짚고 정해진 시나리오만 볼 수 있는 것이 아닌, 실제로 소스 코드와 상호작용할 수 있습니다.

# 기능

## for 문에서 BackDo

- for loop body 내부에서 loop counter를 유지한 상태로 한 단계씩 거꾸로 갈 수 있습니다.
- for loop body 첫 번째 줄에서 condition part로 이동할 수 있습니다.
- condition part에서 loop counter가 초기값이 아닐 경우 afterthought part로 이동할 수 있습니다.
  - afterthought part에서 for loop body 마지막 줄로 이동할 수 있습니다.
- condition part에서 loop counter가 초기값일 경우 initialization part로 이동할 수 있습니다.
  - initialization part에서 for 문 이전의 줄로 이동할 수 있습니다.
- for loop 문 밖에서 재진입시 마지막 loop counter를 가진 condition part로 이동할 수 있습니다.

[![for문에서BackDo](https://github.com/user-attachments/assets/7cbbb28e-a626-4951-b8e6-64b76f41bb44)](https://landing.BackDo.site/)

## if 문에서 BackDo

- 조건에 의해 도달 할 수 없는 줄은 건너뜁니다.

[![if문에서BackDo](https://github.com/user-attachments/assets/1625cb7e-54c8-42fa-8a66-23c7f6a2f89f)](https://landing.BackDo.site/)

## 함수에서 BackDo

- 함수 스코프를 지킵니다.
  - 함수 첫 번째 줄에서는 paused 상태를 유지합니다.
  - 내부에 함수 선언문이 존재 할 경우 건너뜁니다.
- 함수 호출하기 이전의 줄로 이동할 수 있습니다.
- 중첩 함수 내부에서 한 단계씩 거꾸로 갈 수 있습니다.
- 콜백 함수 내부에서 한 단계씩 거꾸로 갈 수 있습니다.

[![중첩에서BackDo](https://github.com/user-attachments/assets/e1313daa-f32d-497d-9301-d2f1b8dab41a)](https://landing.BackDo.site/)
[![콜백에서BackDo](https://github.com/user-attachments/assets/4e7cbccb-1847-45dc-82e6-df46b815d95a)](https://landing.BackDo.site/)

# 기술 스택

[![chrome_devtools_protocol](https://img.shields.io/badge/chrome_devtools_protocol-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chromedevtools.github.io/devtools-protocol)
[![typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![puppeteer](https://img.shields.io/badge/puppeteer-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white)](https://pptr.dev/)
[![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![tailwind css](https://img.shields.io/badge/tailwind_css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![daisy ui](https://img.shields.io/badge/daisy_ui-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![netlify](https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com)

# 개발 과정 중 챌린지 요소

## 디버거에 새로운 기능 넣기

### 구글 크롬 오픈 소스 접근 방법

구글 크롬 개발자도구는 건강한 개발 생태계를 위해 오픈소스로 제공되고 있습니다. LICENSE 파일을 보면 수정 여부와 상관없이 Copyright만 고지하면 재배포가 가능하다고 설명하고 있습니다. 오픈소스로 제공되는 방대하고 복잡한 웹앱을 수정하기 위해 코드베이스를 분석했습니다. 공식문서를 수도 없이 읽으며 해석하고 직접 코드를 치며 다음과 같이 접근했습니다.

평소에 **공식 문서를 바탕으로 직접 코드를 치고 수정하는 방식**이 저에게는 기술을 습득하는 데 가장 빠르다고 생각합니다. 오픈 소스에도 제작자들이 만들어놓은 문서들이 존재하여 특히 [Get the Code](https://chromium.googlesource.com/devtools/devtools-frontend/+/main/docs/get_the_code.md), [Contribution Guide](https://chromium.googlesource.com/devtools/devtools-frontend/+/main/docs/contributing/README.md), [Architecture of DevTools](https://chromium.googlesource.com/devtools/devtools-frontend/+/main/docs/architecture_of_devtools.md), [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) 문서가 많은 도움이 되고 있습니다. 이렇게 새롭게 얻게 된 지식을 소화시키기 위해 바로 코드베이스로 넘어가 확인했습니다.

코드베이스를 로컬 환경에서 구동되도록 설정하고 냅다 코드를 수정하기 위해서는 오픈 소스 제작자들이 사용하는 새로운 빌드 툴을 써야합니다. 구글은 [depot_tools](https://commondatastorage.googleapis.com/chrome-infra-docs/flat/depot_tools/docs/html/depot_tools_tutorial.html#_setting_up)를 만들어 사용하고 있고 코드를 받고 빌드하는데 필수라 depot_tools 문서를 탐독하며 다시 여러 시행착오를 거치면서 설정을 진행했습니다.

Chrome DevTools frontend 부분을 수정하지만 벡엔드와의 연결도 필요해 별도의 크롬을 remote-debugger-port로 열어 CDP 통신을 가능하게 해주는 웹소켓 주소를 얻어야 합니다. **해당 작업에 있어 3개의 터미널 창이 필요하고 복잡하고 긴 명령어를 매일 입력해야 하는 점이 번거롭게 느껴지는 순간이 있습니다. 이때 작업 환경 개선을 위해 Puppeteer를 사용해서 크롬을 조작 하고 해당 명령을 Express을 사용해 API로 만들기도 했습니다.** 해당 API는 배포할 때도 요긴하게 사용할 수 있습니다.

### 코드 베이스 탐구 영역 한정

실제로 작업할 수 있는 코드를 확보하고 오픈 소스 문서들을 비교해서 읽어보면서 그 방대함과 복잡함에 **저만의 기준을 세울 필요성**을 느끼는 순간이 있었습니다. 영향을 미칠 수 있는 영역을 한정하기 위해 제가 관심 있는 부분 부터 선정했습니다.

- 사용자가 직관적으로 사용할 수 있는 버튼이 렌더링되고 있는 파일과 그 경로
- CDP 통신을 요청하는 함수를 가져올 수 있는 경로

위의 질문들에 스스로 답하기 위해 필요한 도구를 발견했습니다.

- 디버거의 디버거
- protocol monitor

개발자 도구는 웹 앱이기 때문에 **개발자 도구의 개발자 도구**를 열 수 있습니다. 1. 개발자도구의 Element 탭을 엽니다. 2. 오른쪽 상단의 점 세개를 눌러 Dock side를 별도의 창으로 undock 합니다. 3. Element 탭이 제대로 작동하고 있는 지 확인 후 cmd + option + I 를 누릅니다. 새로이 열린 디버거의 디버거를 통해 click 이벤트에 Event Listener Breakpoint를 겁니다. 기존 디버거의 step 버튼을 클릭한 후 paused 상태로 나타난 소스코드를 따라가면서 관심있는 함수와 파일을 발견했습니다.

개발자도구가 만드는 모든 CDP 요청과 응답을 [**protocol monitor**](https://developer.chrome.com/docs/devtools/protocol-monitor)로 직접 보고 요청도 할 수 있습니다. 1. 개발자 도구의 오른쪽 상단의 톱니바퀴 버튼을 클릭합니다. 2. Experiments에서 Protocol Monitor를 선택합니다. 3. 개발자 도구를 껐다 키고, 오른쪽 상단의 점 세개를 눌러 More tools에서 Protocol Monitor를 선택합니다. protocol monitor를 사용하면서 step 버튼 클릭 시 어떤 요청과 응답이 발생하는 지 추적할 수 있습니다. Chrome DevTools frontend가 CDP를 어떻게 활용하는 지 확인합니다. 그리고 직접 간단한 요청을 보내면서 동작 원리를 체감했습니다.

이후 VSCode에서 제어 버튼을 렌더링하는 위치로 이동해 냅다 새로운 코드를 작성하고 타입에러를 발생시켰습니다. 타입에러를 잡으면서 먼저 버튼 팩토리 함수를 사용하는 방법을 습득했고 이어 자연스럽게 이벤트리스너 콜백에 접근하고, CDP 요청을 하는 함수가 특정 모델과 연결되어 있음을 인지하는 방식으로 진행했습니다. 결과적으로 SourcesPanel.ts 파일에서 작업하고 UI.Toolbar.ToolbarButton, SDK.RuntimeModel, SDK.DebuggerModel 등을 주로 활용하는 것에 초점을 맞췄습니다.

### 기존 로직 활용 여부

오픈소스로 작업하는 장점은 기존 코드베이스의 풍부한 함수들이라고 생각합니다. 핵심 기능 개발에 집중하기 위해 도움이 될 수도 있는 코드를 탐색했습니다.

실제로 호출하고 여러 인수를 넣어보면서 적용한 결과 활용성을 점쳐보았을 때 실제로 재활용한 로직은 버튼의 호버와 툴팁 등이 미리 설정되어 있는 툴바 버튼 팩토리 함수입니다.

그 이외의 액션 로직들은 커스텀이 들어가 있는 부분이 많아 재활용은 어려웠습니다. 대신 기존 로직에서 좀 더 로우 레벨의 함수 존재 여부와 특정 데이터를 얻을 수 있는 위치 등을 알아내는데 활용했습니다. 그리고 해체해서 얻은 정보를 기반으로 원하는 기능이 첨가된 새로운 함수들을 생성했습니다.

## BackDo 기능 구현하기

BackDo 기능은 디버거가 이전 줄의 위치에서 멈추도록 하는 기능입니다. 적절한 위치에 breakpoint를 부여합니다. 현재 실행 중인 함수를 다시 실행시키고 멈춰야 하는 위치에 도달할 때까지 재개시킵니다. BackDo 기능에서 가장 중요한 점은 디버거에게 멈춰야 하는 적절한 위치를 알리는 것입니다. 멈춰야 하는 적절한 위치를 선정할 때 고려해야 하는 점은 다음 3가지입니다.

- 방향 : JavaScript 흐름에 맞춰야 합니다.
- 정도 : 최소한의 정도로만 거꾸로 가야 합니다.
- 범위 : 이동할 레벨을 한정시켜야 합니다.

### 방향 : JavaScript 흐름과 breakpoint 흐름 맞추기

JavaScript 방향과 breakpoint의 방향은 같지 않을 때가 있습니다. 이를 맞추기 위해서 현재 위치를 감지하고 이동할 좌표를 얻었습니다. 그리고 이동할 좌표에 필요한 데이터를 취득한 후 이를 바탕으로 조건을 생성했습니다. 상황을 설명하기 위해 예시로 for 문을 들어보겠습니다.

#### for 문의 흐름

다음 이미지와 같이 for 문에서의 JavaScript 흐름과 breakpoint의 흐름은 많이 다릅니다. breakpoint는 위에서 아래로 순서대로 흐르고 단순히 나열만 되어 있습니다. 이와 반대로 JavaScript는 for 문에서 다음과 같은 특이점들이 있습니다.

1. for 문의 body에서 같은 줄을, 변경된 loop counter를 가지고 다시 방문합니다.
2. for 문의 body의 마지막 줄에서, afterthought part로 올라가 이동합니다.
3. for 문의 afterthought part에서 condition part로 이동합니다.
4. for 문의 condition part에서, 몇 번째 순회인지 여부에 따라, for 문의 body의 첫 번째 줄로 이동 할 수도 있고 아니면 for 문을 탈출 할 수도 있습니다.

![Group 1](https://github.com/user-attachments/assets/de126fdd-71c7-485e-8f29-6c55ce0f9c0d)
![Group 2](https://github.com/user-attachments/assets/b1ff1c47-3af8-4953-8c44-41d235d2a32a)

위의 차이로 인해 문제상황이 발생되어 다음과 같이 해결했습니다.

#### for 문 body와 조건 부여

JavaScript 흐름을 고려하지 않았을 경우, breakpoint가 조건없이 부여되어 loop counter가 0으로 리셋되는 문제가 발생합니다. 이에 현재의 loop counter를 취득해 조건을 부여한 Conditional Breakpoint로 만들어서 문제를 해결했습니다.

loop counter 취득은 callFrame 객체에 있는 scopeChain 배열 내부에서 얻었습니다. Conditional Breakpoint는 조건을 문자열로 만들어 breakpoint를 부여할 때 옵션으로 함께 제공해 만들었습니다. 이때 특이한 사항은 다음과 같습니다.

1. 현재 scope가 아닌 부모의 scope에 접근하여야 loop counter를 얻을 수 있습니다.
2. breakpoint는 2개를 나란히 부여해야 합니다.
3. 조건은 문자열로 변환시켜서 부여해야 Conditional Breakpoint가 됩니다.

현재 scope가 아닌 부모의 scope에 접근한 이유는 for 문의 initailzation part에서 let을 사용해 loop counter를 선언하면 별도의 렉시컬 스코프를 생성하기 때문입니다. 즉 디버거에서 for 문은 소괄호 부분(head)에 진입하자마자 block scope를 생성하고 중괄호 부분(body)에 진입하면 또 새로운 block scope를 생성합니다. 결과적으로 먼저 생성된 block scope에서 loop counter를 찾았습니다.

breakpoint를 2개 부여한 이유는 디버거에 암시적인 auto resumed 현상이 있기 때문입니다. 대표적인 예로 최상단 callFrame을 restart 할 경우 발생합니다. 이는 protocol monitor로 최상단 callFrame을 restart하여 관찰 하여 발견할 수 있었습니다. 때문에 첫 번째 breakpoint까지는 임의로 수동 resume를 시키고 두 번째 breakpoint까지는 resume하지 않았습니다. 자동으로 resumed 될 것이기 때문입니다.

Conditional Breakpoint를 만들 때 조건을 부여하는 부분이 문자열로 변환되야 하는 부분은 다소 의아했습니다. 이런저런 실험을 해본 결과 그 이유는 디버거가 내부적으로 표현식을 평가할 때 eval을 사용하고 있기 때문이라는 것을 발견했습니다. 디버거에 Conditional breakpoint를 부여할 때 throw Error() 를 해서 다음과 같은 오류 메시지를 확인했습니다.

<p align="center" width="100%">
  <img width="33%" src="https://github.com/user-attachments/assets/0ee4b912-4e00-4bae-94f4-d8b21abf3582" />
</p>

오류 스택을 보면 at eval 부분이 있습니다. 그러므로 문자열로 표현해도 eval이 잘 통할 수 있게 조건을 만들어야 했고 결과적으로 loop counter의 이름과 value를 일치 연산자를 사용해 비교했습니다(예: `${key} === ${value}`를 백틱으로 감쌈).

#### for 문 head의 afterthought part와 현재 위치

JavaScript 흐름을 고려하지 않았을 경우, breakpoint 입장에서는 condtion part이후에 afterthought part가 오는 흐름이기 때문에 문제가 발생합니다. BackDo 버튼 클릭 시 afterthought part에서 conditional part로 이동하는 문제입니다. for 문의 head의 일부분인 afterthought part에 위치해있다는 사실을 감지하고 for 문 body의 마지막 위치를 얻어내서 정상적인 위치, for 문 body의 마지막 줄로 이동시켜 해결했습니다.

afterthought part에 위치해있다는 사실은 searchInContent를 활용하여 현재 scope의 시작 지점에 for 키워드가 존재하는 지 확인해서 감지했습니다. for 문 body의 마지막 위치는 현재 scope에서 가능한 breakpoint들 중 마지막 것을 사용했습니다. 이때 자세히 설명할 사항은 다음과 같습니다.

1. searchInContent는 스크립트에 내가 원하는 텍스트가 있는지 검색하고 싶을 때 사용할 수 있습니다.
2. 현재 for 문의 body가 아니라 for 문의 head 부분에 있음에도 불구하고 body의 마지막 부분을 얻어낼 수 있습니다.

debugger 도메인의 searchInContent는 스크립트에 내가 원하는 텍스트가 있는지 검색하고 싶을 때 사용할 수 있는데, 이때 정확성을 위해 간단하지만 정규식문자열을 처음 배워 사용했습니다. Chrome DevTools frontend는 StringUtilities.ts 파일에 정규식 객체를 생성하는 createSearchRegex 유틸함수가 존재합니다. 해당 함수를 재활용해보려 했으나 searchInContent는 문자열만 받기에 그대로 쓸 수는 없었습니다. 그리고 정규식을 사용할 때가 두 번 이상 없었기 때문에 import하는 것도 내키지는 않았습니다. 그래서 createSearchRegex 함수를 보고 정규식이 어떻게 만들어지는 지 flag가 뭔지 escape는 어떻게 시키는 지 등 감을 잡고 regexr.com와 같은 사이트에서 확인하면서 적용했습니다.

현재 for 문의 head 부분에 있음에도 불구하고 body의 마지막 부분을 얻어낼 수 있는 것은 처음에는 다소 의아했습니다. 그러나 head의 소괄호 부분만 영역으로 삼지 않고 전체 for 문을 영역으로 삼는 것은 생각해보니 당연했습니다. 그렇기 때문에 loop counter를 i라고 했을 때, for 문 body 몇 번째 줄이서든 i를 참조해서 자유롭게 쓸 수 있었던 것입니다. 결론적으로 만약에 for 문 body에 위치한다면, scopeChain이 다음과 같은 모습이라는 것은 새로운 발견이었습니다. 첫 번째 사진의 파란 영역은 최상단 scope로 for 문 body 부분입니다. 두 번째 사진은 부모 scope로 for 문의 head 부분에 진입 시 만들어 집니다.

<img src="https://github.com/user-attachments/assets/9a1a9859-f6c5-4f48-80cf-86c3a8953aad" width="300px"> | <img src="https://github.com/user-attachments/assets/99f631d5-209c-4da3-bc4f-a0c3c25f081f" width="300px">
---|---|

#### for 문 head의 condition part와 세 가지 상태

JavaScript 흐름을 고려하지 않았을 경우, breakpoint 입장에서는 initialization part이후에 condition part가 오는 흐름이기 때문에 문제가 발생합니다. BackDo 버튼 클릭 시 condition part에서 무조건(몇 번째 순회인지 고려 없이) initialization part로 이동하는 문제입니다. 코드의 흐름을 추적해 loop counter의 현재값, 초기값, 이전값을 알아내 상황에 맞는 Conditional Breakpoint를 정상적 흐름의 part에 부여하여 문제를 해결했습니다.

자세한 정상적인 흐름은 다름과 같습니다. condition part에서 BackDo 버튼 클릭 시, loop counter가 초기값일 경우에는 initialization part로 이동하고, 초기값이 아닐 경우에는 afterthought part로 이동해야 합니다. 방향이 2가지이며 특히 후자의 경우에는 현재의 loop counter가 아닌 이전의 loop counter를 가진 afterthought로 이동해야합니다. 그러므로 loop counter의 현재값, 초기값, 이전값을 알아내는 것이 중요했습니다.

- loop counter의 현재값은 현재 scope에서 취득 후 저장했습니다.
- loop counter의 초기값은 조건 없이 condition part에 breakpoint를 건 다음 실행시키고 멈추게 해서 해당 위치에서 얻었습니다.
- loop counter의 이전값은 임의로 loop counter가 현재값에 도달할 때까지 loop를 실행시키고, 그 과정에서 loop counter를 수집하다가, 현재값에 도달했다는 것을 알게 되면 그 직전의 loop counter를 이전값으로 취급했습니다.

Conditional Breakpoint는 다음과 같이 지정했습니다.

- loop counter의 초기값과 현재값이 일치할 경우, initialization part로 breakpoint를 지정했습니다.
- loop counter의 초기값과 현재값이 일치하지 않을 경우, afterthought part로 breakpoint를 지정하며, loop counter가 이전값과 일치하도록 조건을 부여했습니다.

위의 과정들에서 특히 주의한 점은 디버거가 멈춰있는 것이 풀리지 않도록 각별히 신경 쓴 것입니다. 멈춰있는 상태가 풀리게 되면 이전 줄에서 멈출수 없는 것 뿐만 아니라 대부분의 디버거 기능에 접근할 수 없었습니다. 이를 해결하기 위해 breakpoint를 미래의 고유한 위치에 방어막으로 지정해 놓고 현재 위치와 breakpoint 위치를 비교하며 작업했습니다. 이때 continueToLocation와 hitBreakpoints가 유용했습니다.

continueToLocation은 resume와 달리 위치를 함께 전달하여 해당위치로 실행시킬 수 있습니다. 관리할 breakpoint가 많아서 줄이고 싶은 순간에는 debugger 도메인의 continueToLocation로 대체할 수 있는 지 확인해보았고 중간에 멈출 수도 있는 상황이 아니라면 유용하게 사용할 수 있었습니다.

hitBreakpoints는 debugger 모델에서 찾을 수 있는 속성입니다. 현재 멈춰있는 부분이 기존 breakpoint가 지정된 위치라면 해당 breakpointId를 표시하여 알려줍니다. 일일이 행과 열 숫자를 기억하여 비교하지 않아도 되어서 작업 속도를 올릴 수 있었습니다.

### 정도 : 거꾸로 가야하는 최소한의 정도를 구하기

<p align="center" width="100%">
  <img width="50%" alt="최소한의 정도" src="https://github.com/user-attachments/assets/3697512f-df2e-44e7-98db-705b554cdca1" />
</p>

방향이 동일해도 정도의 차이, 거리의 차이가 있어서 도달하지 못한다고 판정될 수 있는 부분이 있습니다. 도달하지 못하는 부분에 breakpoint를 주면 거칠 수 없으므로 유명 무실해져 해당 지점에 멈출 수가 없습니다. 최소한의 정도로만 방향에 맞게 거꾸로 가야하는 것이 필요했습니다. 사전에 시뮬레이션하고 시뮬레이션 결과를 받아서 적용할 수 있을 지 아니면 더 먼 거리로 보내야 할 지 판단하는 과정을 추가해서 해결했습니다.

#### 한 단계 이전을 적용하여 시뮬레이션 실행

거꾸로 가야 하는 최소한의 정도를 구하기 위해서 우선 함수 소스를 얻어서 가공하여 시뮬레이션 돌릴 즉시실행함수를 만들었습니다. 해당 과정을 좀 더 단계를 나누면 다음과 같은 과정으로 진행했습니다.

- 현재 실행 중인 함수의 내부 소스를 문자열로 얻습니다.
- 디버거 화면 처럼 줄 단위로 위의 함수 소스를 쪼개고, 한 단계 이전에 표식을 심습니다.
- 즉시실행 함수로 만들어서 현재 callFrame에서 실행합니다.

현재 실행 중인 함수의 내부 소스를 문자열로 얻기 위해서 우선 상위의 callFrame에 접근했습니다. 상위의 callFrame에서 가장 위의 scope에서 name이 현재 실행 중인 함수의 이름과 일치하고, type이 function인 속성의 description을 통해서 얻었습니다. 사실 scope는 ObjectId라는 형식으로 해당 위치만 고유한 숫자로 안내해주고 있기 때문에 runtime도메인의 getProperties라는 별도의 함수를 사용해야 속성에 접근할 수 있습니다.

디버거 화면 처럼 줄 단위로 위의 함수 소스를 쪼개기 위해서 \n를 기준으로 split했습니다. 그리고 map을 돌면서 한 단계 이전을 의미하는 index에서 표식을 심었습니다. 표식은 결과를 얻을 수 있어야 하므로 'return {result: true}'와 같은 것을 사용했습니다. 다만 이 표식은 명백한 한계가 존재하여 추후 개선이 필요합니다. 문법상 return 문이 존재할 수 없지만 breakpoint를 부여할 수는 있는 위치가 있을 수 있습니다. 예를 들어서 if 문의 소괄호 사이에서 엔터를 쳐서 공간을 만든 후 그 안에서 함수 호출을 한 경우인데, 이때는 소괄호에서는 문법상 return문을 쓸 수 없기 때문에 멈추지 못하고 소괄호 밖까지 더 진행 후 멈출 것입니다. 사용자는 step등을 사용하여 다시 진입할 수 있기에 본 프로젝트를 사용할 수 없는 크리티컬한 버그는 아니라고 판단했으나 해당 부분 개선을 위해 방도를 찾고 있는 중입니다.

즉시실행 함수로 만들어서 현재 callFrame에서 실행하는 것은 debugger 도메인의 evaluateOnCallFrame을 응용했습니다. 위의 과정에서 map으로 만든 함수소스 조각들을 join으로 문자열로 합친 다음에 arguments는 spread 연산자로 제공했습니다.

함수 내부 소스를 얻는 단계에서 좀 더 자세히 언급해야 할 부분이 있습니다.

현재 실행 중인 함수의 내부 소스를 문자열로 얻을 때, 상위의 callFrame으로 이동하는 과정을 한 번 거친 이유는 다음과 같습니다. 디버거에서는 현재 실행중인 함수 내부에서 특정 조건을 충족하지 못하면 함수 이름에 접근할 수 없기 때문입니다. 그러므로 `함수이름.toString()`을 사용하면 해당 함수 이름이 정의되지 않았다는 에러를 만나게 됩니다. 사실 재귀함수라는 것이 존재하기 때문에 함수 내부에서 함수 이름 식별자에 접근하는 것은 문제가 없을 것으로 예상되었으나 그렇지 않았습니다. 다음과 같이 기존 디버거 콘솔에서도 접근할 수 없고 Watch 부분에서 식별자를 보아도 접근 할 수 없는 상태임이 확인 됩니다.

<img width="1452" alt="스크린샷 2025-02-21 오후 6 33 44" src="https://github.com/user-attachments/assets/cd1ad61d-175f-4b6d-947c-2135456d3a69" /> | <img width="1354" alt="스크린샷 2025-02-21 오후 7 39 29" src="https://github.com/user-attachments/assets/8c7879b3-00b4-43c8-8365-a63bff186aee" />
---|---|

재귀가 가능한 이유를 찾기 위해 여러 실험을 거친 결과 함수내부에서 함수 이름을 찾을 수 있는 다음 두 가지의 경우를 발견했습니다.

|최상단 레벨인 script에서 해당 함수 선언을 이미 해서 사전에 한 번 디버거가 인지했을 경우|함수 내부에서 함수 이름 참조를 사용할 경우|
|---|---|
<img width="605" alt="스크린샷 2025-02-21 오후 10 43 44" src="https://github.com/user-attachments/assets/51d3eecb-d652-4e1d-a180-e28028000227" />|<img width="626" alt="스크린샷 2025-02-21 오후 10 47 43" src="https://github.com/user-attachments/assets/98e97fac-02aa-4103-8066-ba95fcd13f10" />

이 외에는 groups.google.com에서 발견한 방법으로, 예외를 생성하고 검사해서 스택을 파해치는 방법입니다. 그러나 이는 비용이 많이드는 방법이라고 하며 런타임에 함수 내부에서 함수의 이름을 파악하기는 어렵다고 첨언했습니다.

결론적으로 개발자도구 자체적으로 함수 내부에서 함수 이름을 참조하거나, 전역에 선언해 사전에 미리 알린 경우가 아니라면 함수 이름에 접근하고자 할 때 not available 입니다. 사용자에게 중첩 함수를 선언할 때는 함수 내부에서 함수 이름을 참조하라는 특이한(?) 규칙을 지키라고 하기에도 어렵습니다. 사용자를 대신해서 behind since에서 식별자를 심는 것도 예상하지 못한 다른 부작용을 야기할 것 같아 우려됩니다. 이런 과정을 거친 끝에, 생각을 전환하게 되었고 상위 callFrame(outter)이 가동 중일 때는 다른 변수들과 같이 함수 이름(inner)을 발견할 수 있음에서 착안해, 조금 돌아가는 것 같아도 스택을 파해쳐서 안전한 데이터를 얻어오게 되었습니다.

#### 시뮬레이션 결과 판별과 반복할지 여부 결정

앞서서 현재 실행 중인 함수의 내부 소스를 얻어 표식을 심은 후 즉시실행 함수로 실행했습니다. 즉시실행 함수로 실행할 때 debugger 도메인의 evaluateOnCallFrame를 사용했고 반환값으로 응답 결과를 얻었습니다. 결과가 표식에 맞게 result true가 나올 경우 해당 위치는 거꾸로 갈 수 있는 최소한의 거리에 존재하는 breakpoint입니다. 그런데 반면에 응답 결과에 표식이 존재하지 않을 경우, 해당 위치는 갈 수 없는 유명무실한 breakpoint 입니다. 이에 그 다음으로 가까운 거리에 다시 표식을 심고 시뮬레이션을 반복합니다.

### 범위 : 이동할 레벨을 한정시키기

사용가능한 breakpoint들을 debugger 모델의 getPossibleBreakpoints로 가져오게 되면 전체 스크립트들을 대상으로 breakpoint 목록들을 받습니다. 함수스코프가 지켜지지 않는 문제가 발생했고 이를 해결하기 위해 restrictToFunction 옵션을 찾아 적용했습니다. restrictToFunction 옵션은 중첩 선언된 함수를 제외하고 현재 함수에 속해 있는 breakpoint들만을 얻을 수 있게 합니다.

<p align="center" width="100%">
  <img width="50%" alt="이동할 수 있는 레벨" src="https://github.com/user-attachments/assets/99f03ac9-6016-489e-82d0-e803c7170c27" />
</p>

## Chrome에서 WebSocket URL 얻기

Chrome을 remote-debugger-port 플래그와 함께 열면 Chrome DevTools Protocol(CDP) server가 시작되고 WebSocket URL을 얻을 수 있습니다. Chrome DevTools frontend가 WebSocket URL을 대상으로 연결하면 CDP 명령을 전송할 수 있게 됩니다. 해당 과정에 대해 공식문서에서는 다음과 같은 긴 명령어를 알려줍니다. 해당 명령어는 치기에는 너무 길어서 기억하기에는 어려웠던 것이 문제였습니다. 이에 가독성과 편의성 상승, 추후 확장 가능성을 위해 Puppeteer와 Express를 도입해서 API를 생성했습니다. 그리고 간단한 명령어를 만들어서 사용성을 보다 개선했습니다.

![Group 7](https://github.com/user-attachments/assets/e6b85d17-a627-47ce-a6fd-165acf5cb5ee)

Puppeteer는 Chrome Browser Automation 팀이 유지관리하는 라이브러리입니다. Puppeteer로 내장되어 있는 Chrome을 조작했습니다. 이 과정에서 신경쓴 부분은 특정 Process을 열고 동일한 Process를 이후 요청에서 닫는 것입니다. WebSocket이 연결되어 있는 동안에는 Chrome이 열려있는 상태로 유지가 되어 있어야 하기 때문입니다. 그러므로 Chrome을 열었을 때, 해당 Process ID를 알렸습니다. 이후 사용자가 원할 때 알려진 Process ID를 사용해서 열린 Process를 특정해서 끌 수 있게 명령어를 제공했습니다. 제대로 닫히는지 Mac의 경우 기본 내장 앱인 활성 상태 보기 앱으로 확인할 수 있습니다.

두 번의 API 요청 사이에 Process ID를 활용하게 된 경위는 Chrome이 multi-process 전략을 사용하고 있고 Process들은 격리되어 있다는 사실에서 촉발되었습니다. Chrome의 Process들은 갈라진 별도의 Tab을 렌더링합니다. 그러므로 Tab을 닫고 싶으면 Process를 닫음으로 해결할 수도 있을 것이라는 생각이 들었습니다. 두 번의 API 요청은 두 개의 controller 함수로 작동되지만 결국 컴퓨터 한대의 메모리에서 작동하므로 해당 접근 방법은 작동했습니다.

package.json의 scripts 필드에 간단한 명령어를 만들어서 API를 보다 편리하게 사용할 수 있도록 했습니다. process.argv를 사용해 명령어를 분간하고 터미널을 통해 인수를 받았습니다. node.js에서는 fetch나 curl이 불가해 추가로 axios를 설치해서 사용했습니다.

# 회고

바닐라 코딩 부트캠프에서 개발자 도구에 대해 처음 배울 때 왜 거꾸로 가기 기능이 없을까 라고 생각했던 때가 선명합니다. 이때는 몰랐습니다. 3달 뒤 제가 프로젝트 주제로 삼을 지 말입니다.
