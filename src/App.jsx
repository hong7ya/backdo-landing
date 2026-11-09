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
            title={
              <>
                <span className="inline-block">복잡한 실행 흐름,</span>{" "}
                <span className="inline-block">더 빠르게 파악하세요.</span>
              </>
            }
            description="여러 함수와 모듈을 거꾸로 따라가며, 디버깅 시간을 줄여보세요."
          />
          <Section.Content content={<Video />} />
          <Section.Content
            content={
              <div className="grid gap-4">
                <p>
                  줄 숫자를 기억하고, 스크립트 전체를 다시 실행하고,
                  breakpoint를 주고, resume 하고, step 누르고...
                  <br />더 이상 위의 작업을 매번 직접 반복하지 않고{" "}
                  <span className="text-info">시간</span>을{" "}
                  <span className="text-info">단축</span>해요. 🚴
                </p>
                <p>
                  BackDo가 실행 위치를 기록하고, 거꾸로가기를 누르면 프로그램을
                  새로 시작해 기록된 이전 위치까지 다시 실행해요.
                </p>
              </div>
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
                    <blockquote className="border-l-2 border-primary pl-4">
                      “출력값이 이상한데… 아까 그 함수에서 뭘 넘겼지?”
                    </blockquote>
                    <p className="text-sm">
                      Node.js에서 이미 반환한 함수와 다른 모듈로 돌아가, 지나온
                      흐름을 이어서 살펴보세요.
                    </p>
                  </article>
                  <article className="grid content-start gap-4">
                    <h3 className="font-semibold">
                      화면의 버그를 작은 코드로 좁혔을 때
                    </h3>
                    <blockquote className="border-l-2 border-primary pl-4">
                      “이 데이터는 걸러져야 하는데, 왜 남았지?”
                    </blockquote>
                    <p className="text-sm">
                      문제의 데이터와 함수를 Console에 넣고, 지나친 조건으로
                      돌아가 확인하세요.
                    </p>
                  </article>
                </div>
                <details className="collapse collapse-arrow border border-base-300">
                  <summary className="collapse-title flex! min-h-0 items-center text-sm font-semibold after:top-1/2!">
                    재실행 방식과 지원 범위
                  </summary>
                  <div className="collapse-content grid gap-4 text-sm">
                    <p>
                      재실행해도 파일·DB 변경은 되돌아가지 않으며, 외부 요청이나
                      쓰기가 반복될 수 있어요.
                    </p>
                    <a
                      className="link"
                      href="https://github.com/hong7ya/backdo-devtools-frontend#사용-범위와-한계"
                    >
                      지원 범위와 한계는 GitHub에서
                    </a>
                  </div>
                </details>
              </section>
            }
          />
        </Section.Wrapper>
      </main>
    </>
  );
}

export default App;
