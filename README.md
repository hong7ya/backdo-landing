# BackDo 랜딩 페이지

[디버거 프론트엔드](https://github.com/hong7ya/backdo-devtools-frontend) · [로컬 서버](https://github.com/hong7ya/backdo-server) · [랜딩 페이지](https://github.com/hong7ya/backdo-landing)

`landing.backdo.site`에서 BackDo를 소개하고, 사용자가 `backdo.site`의 디버깅 화면으로 연결하도록 돕는 React 페이지입니다.

BackDo의 거꾸로가기는 사용자 코드를 실행하는 **Node 또는 Console 전용 Chrome을 새로 시작해 이전 위치까지 다시 실행하는 방식**입니다. 함수 밖에 남아 있는 메모리·모듈 상태를 새로 만들기 위해 프로세스를 기준으로 삼습니다. 위치와 순서는 다시 따라가지만, 파일·외부 요청의 결과를 과거로 되돌리지는 않습니다.

랜딩은 연결 정보를 입력받고 화면을 엽니다. 실제 프로세스 생성·종료·재시작은 사용자의 컴퓨터에서 실행하는 로컬 서버가 맡습니다.

## 연결하기

1. 로컬 서버 저장소에서 Console은 `npm run start:console`, Node는 `npm run start:node`를 실행합니다. Node는 사용자 프로젝트에서도 터미널에 안내된 명령으로 프로그램을 준비합니다.
2. [랜딩 페이지](https://landing.backdo.site)에서 같은 모드를 선택합니다.
3. 터미널에 안내된 디버깅 포트를 직접 입력하고 **Console 연결** 또는 **Node.js 연결**을 누릅니다. 기본 포트는 Console `9222`, Node `9229`이며, 사용자 지정 포트도 입력할 수 있습니다.

모드를 선택하면 폼 안에 해당 모드의 실행 안내가 표시됩니다. Console은 서버 실행 → 포트 연결, Node는 서버 실행 → 사용자 프로젝트 실행 → 포트 연결 순서입니다. 명령을 실행할 터미널을 구분하고, 필수 단계는 항상 펼쳐 두어 모드와 준비 절차의 관계를 보여 줍니다. 처음 설치하는 방법과 다른 포트를 사용하는 방법만 필요할 때 펼쳐 볼 수 있습니다. 모드를 바꿔도 입력한 포트는 유지됩니다.

각 터미널 오른쪽의 **복사** 버튼으로 명령을 복사할 수 있습니다. 프롬프트 기호 `$`는 제외하며, 여러 줄 명령의 줄바꿈은 보존합니다.

Console은 `devtools_app.html`, Node는 `js_app.html`에 입력한 `port`를 전달합니다. 선택한 모드와 같은 포트로 대상을 먼저 준비해야 하며, 폼을 바꾸는 것만으로 실행 대상이 생성되지는 않습니다.

랜딩은 대상 조회 API를 호출하지 않습니다. 디버거 프론트가 기존 로컬 API `http://127.0.0.1:3000`을 통해 대상을 등록하고 연결합니다.

## 개발

React 19, Vite 6, Tailwind CSS 4, daisyUI 5를 사용합니다. 화면은 daisyUI의 CSS 클래스와 Tailwind 유틸리티를 조합하며, 현재 테마는 `nord`입니다. daisyUI는 컴포넌트 스타일 외에도 테마 색상·모서리 등의 유틸리티를 제공합니다. [daisyUI 사용법](https://daisyui.com/docs/use/), [유틸리티와 변수](https://daisyui.com/docs/utilities/)

```sh
npm ci
npm run dev
```

Vite가 터미널에 출력한 실제 주소를 엽니다. 프론트 화면 서버는 별도로 8000 포트에서 실행하며, 로컬 API 서버도 직접 실행합니다. 서버 터미널은 배포 랜딩 주소를 안내하므로 로컬 확인 때는 직접 실행한 Vite 주소를 사용합니다.

디버깅 화면 기준 주소는 `VITE_BACKDO_FRONTEND_URL`로 지정합니다.

| 실행 | 설정 | 프론트 기준 주소 |
| --- | --- | --- |
| `npm run dev` | `.env.development` | `http://localhost:8000/gen/front_end/` |
| `npm run build` | `.env.production` | `https://backdo.site/gen/front_end/` |

로컬 화면 서버의 경로가 다르면 `.env.development.local`에 실제 기준 주소를 지정합니다. 마지막 `/`를 포함합니다. 다른 저장소의 빌드나 서버 실행을 대신하지 않습니다. [Vite의 모드별 환경 설정](https://v6.vite.dev/guide/env-and-mode)

```sh
npm run lint
npm run build
```

포트는 HTML의 `required`, `min`, `max`, `step`으로 검증합니다. 실제 폼에서 잘못된 입력이 연결을 막는지, Console·Node가 각각 준비한 대상으로 연결되어 거꾸로갈 수 있는지 확인합니다. 좁은 화면에서 명령이 잘리지 않는지, 키보드로 모드를 바꾸고 부가 안내를 펼치거나 연결할 수 있는지도 확인합니다.

배포는 수동으로 진행합니다. 디버거 프론트의 두 `.html` 진입점과 쿼리 전달이 준비된 뒤 새 랜딩 폼을 공개합니다.
