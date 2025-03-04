import WebSocketForm from "./WebSocketForm";
import logoSrc from "./assets/BackDo.png";
import playSampleSrc from "./assets/playSample.gif";

function App() {
  return (
    <>
      <header className="h-[72px] bg-base-200 px-3 py-1 flex items-center">
        <img
          className="mask mask-squircle w-14 m-2 drop-shadow-lg"
          src={logoSrc}
        />
        <span className="text-xl">BackDo</span>
      </header>
      <main>
        <section>
          <div className="hero bg-base-200 min-h-[calc(100vh-72px)]">
            <div className="hero-content lg:flex-row-reverse">
              <div>
                <h1 className="text-5xl font-bold text-primary">
                  더 쉽고, 빠르게! 뒤로 가는 디버거
                </h1>
                <p className="py-6">
                  줄 숫자를 기억하고, 스크립트 전체를 다시 실행하고, breakpoint를 주고, resume 하고, step 누르고...
                  <br />
                  더 이상 위의 작업 없이 <span className="text-info">시간</span>을 <span className="text-info">단축</span>해요. 🚴
                </p>
                <div className="py-6">
                  <WebSocketForm />
                </div>
                <div>
                  <img className="rounded-xl drop-shadow-xl h-full" src={playSampleSrc}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
