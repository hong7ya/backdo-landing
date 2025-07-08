import Section from "./components/Section";
import Guide from "./components/Guide";
import Logo from "./components/Logo";
import Video from "./components/Video";
import WebSocketForm from "./components/WebSocketForm";

function App() {
  return (
    <>
      <header className="h-[72px] px-3 py-1 flex items-center">
        <Logo />
        <Guide />
      </header>
      <main>
        <Section.Wrapper>
          <Section.Top
            title={"더 쉽고, 빠르게! 거꾸로 가는 디버거"}
            description={
              <>
                줄 숫자를 기억하고, 스크립트 전체를 다시 실행하고, breakpoint를
                주고, resume 하고, step 누르고...
                <br />더 이상 위의 작업 없이{" "}
                <span className="text-info">시간</span>을{" "}
                <span className="text-info">단축</span>해요. 🚴
              </>
            }
            padding={true}
          />
          <Section.Content content={<WebSocketForm />} padding={true} />
          <Section.Content content={<Video />} />
        </Section.Wrapper>
      </main>
    </>
  );
}

export default App;
