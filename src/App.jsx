import ConnectionForm from "./components/ConnectionForm";
import Logo from "./components/Logo";
import Section from "./components/Section";
import Video from "./components/Video";

function App() {
  return (
    <>
      <header className="mx-auto flex h-[72px] max-w-7xl items-center gap-2 px-4">
        <Logo />
      </header>
      <main>
        <Section.Wrapper>
          <Section.Top
            title={"여러 모듈을 거친 실행, 거꾸로 따라가세요."}
            description={
              <>
                지나친 함수를 다시 보려고, 처음부터 따라가던 시간을 줄이세요.
                <br />
                Node.js와 전용 Chrome Console에서 기록된 이전 실행 위치로
                돌아갑니다.
              </>
            }
          />
          <Section.Content content={<ConnectionForm />} />
          <Section.Content
            content={
              <section
                aria-labelledby="scenarios-heading"
                className="grid gap-4"
              >
                <h2
                  id="scenarios-heading"
                  className="text-lg font-semibold"
                >
                  다시 보고 싶은 코드를 이미 지나쳤을 때
                </h2>
                <div className="grid gap-6 lg:grid-cols-2">
                  <article className="grid content-start gap-4">
                    <h3 className="font-semibold">
                      CLI 동작 하나가 여러 파일을 거칠 때
                    </h3>
                    <blockquote className="grid gap-2 border-l-2 border-primary pl-4">
                      <p>
                        “인자로 넘긴 옵션은 맞는데, 출력 직전 값은 왜 이렇지?”
                      </p>
                      <p>
                        “옵션 처리에서 변환, 출력까지 왔네. 아까 그 함수가 뭘
                        넘겼는지 다시 보고 싶다.”
                      </p>
                    </blockquote>
                    <p className="text-sm">
                      CLI를 Node.js 모드로 연결하고 기록된 이전 위치로
                      돌아가세요. 실행을 마친 함수나 다른 모듈 안으로
                      되돌아가며, 값이 전달된 흐름을 같은 디버깅 화면에서 살펴볼
                      수 있습니다.
                    </p>
                  </article>
                  <article className="grid content-start gap-4">
                    <h3 className="font-semibold">
                      화면의 버그를 작은 코드로 좁혔을 때
                    </h3>
                    <blockquote className="grid gap-2 border-l-2 border-primary pl-4">
                      <p>“이 데이터면 목록에서 빠져야 하는데, 왜 남지?”</p>
                      <p>“문제의 데이터와 필터 함수만 꺼내서 확인해 보자.”</p>
                    </blockquote>
                    <p className="text-sm">
                      샘플 데이터와 JavaScript 로직을 전용 Console에서
                      실행하세요. Step으로 지나친 조건을 되짚으며, 예상과
                      달라지는 지점을 살펴볼 수 있습니다.
                    </p>
                  </article>
                </div>
                <details className="collapse collapse-arrow border border-base-300">
                  <summary className="collapse-title flex! min-h-0 items-center text-sm font-semibold after:top-1/2!">
                    재실행 방식과 지원 범위
                  </summary>
                  <div className="collapse-content grid gap-4 text-sm">
                    <p>
                      BackDo는 실행 대상을 새로 시작해 기록된 이전 위치까지 다시
                      실행합니다. 과거 메모리를 복원하는 방식은 아닙니다.
                    </p>
                    <ul className="list-disc space-y-2 pl-5">
                      <li>
                        파일·DB 변경은 되돌리지 않으며, 외부 요청이나 쓰기가
                        반복될 수 있습니다.
                      </li>
                      <li>
                        Worker·여러 프로세스를 함께 되돌리는 작업과 터미널 입력
                        대기 프로그램은 지원하지 않습니다.
                      </li>
                      <li>
                        여러 비동기 작업의 순서와 비동기 경계의 Step은 추가
                        검증이 필요합니다. 시간·난수·외부 응답에 따라 값도
                        달라질 수 있습니다.
                      </li>
                    </ul>
                    <a
                      className="link"
                      href="https://github.com/hong7ya/backdo-devtools-frontend#사용-범위와-한계"
                    >
                      자세한 지원 범위와 한계
                    </a>
                  </div>
                </details>
              </section>
            }
          />
          <Section.Content content={<Video />} />
        </Section.Wrapper>
      </main>
    </>
  );
}

export default App;
