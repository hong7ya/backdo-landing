import logoSrc from "./assets/BackDo.png";

function App() {
  return (
    <>
      <header className="h-28 bg-base-200">
        <img
          className="mask mask-squircle w-24 m-2 drop-shadow-lg"
          src={logoSrc}
        />
      </header>
      <main>
        <section>
          <div className="hero bg-base-200 min-h-[calc(100vh-112px)]">
            <div className="hero-content text-center">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-bold">
                  한 번 지나친 이전 줄로 이동시켜 주는 디버거
                </h1>
                <div className="py-10 text-xl flex flex-col gap-4">
                  <p>debugger 사용시에 너무 빠르게 step을 누르셨나요?</p>
                  <p>이전 line에 있을 때의 모습을 보고 싶으신가요?</p>
                  <p>
                    순수 함수로 작업 중이셨다면, 한번의 버튼 클릭으로 해결할 수
                    있어요 👍
                  </p>
                </div>
                <p className="py-10">
                  🚨 현재 버전은 for 문, if 문, 함수 선언문 대응 가능해요
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
