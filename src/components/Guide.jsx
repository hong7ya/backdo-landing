function Step({ title, command, description }) {
  return (
    <article className="grid gap-2">
      <div className="text-secondary font-semibold">{title}</div>
      <div className="mockup-code w-full">
        {command.split("\n").map((line) => (
          <pre
            data-prefix="$"
            key={line}
          >
            <code>{line}</code>
          </pre>
        ))}
      </div>
      {description && <p>{description}</p>}
    </article>
  );
}

export default function Guide({ mode }) {
  const isNode = mode === "node";

  return (
    <div className="dropdown dropdown-end ml-auto">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
      >
        Guide
      </div>
      <div
        tabIndex={0}
        className="dropdown-content bg-base-100 text-base-content rounded-box z-1 w-[min(40rem,calc(100vw-2rem))] max-h-[70vh] overflow-y-auto p-4 shadow-sm grid gap-4"
      >
        <p className="font-semibold">
          {isNode ? "Node.js" : "Console (Chrome)"} 연결 가이드
        </p>
        <Step
          title="1. 로컬 서버 설치"
          command={
            "git clone https://github.com/hong7ya/backdo-server.git\ncd backdo-server\nnpm ci"
          }
          description="Node.js 22.11.0 환경에서 설치하세요."
        />
        <Step
          title="2. 서버에서 실행"
          command={`npm run start:${mode}`}
          description={
            isNode
              ? "서버는 연결을 준비하고, 사용자 프로젝트에서 실행할 Node 명령을 안내합니다."
              : "서버가 Console 전용 Chrome을 준비합니다."
          }
        />
        {isNode && (
          <Step
            title="3. 사용자 프로젝트에서 실행"
            command="node --inspect-brk=127.0.0.1:9229 ./your-file.js"
            description="터미널에 안내된 포트를 사용하고, your-file.js를 디버깅할 파일로 바꾸세요."
          />
        )}
        <p>
          이 페이지에서 {isNode ? "Node.js" : "Console"}를 선택하고 터미널에
          안내된 디버깅 포트(기본 {isNode ? "9229" : "9222"})를 입력한 뒤
          연결하세요.
          {!isNode && " 열린 화면의 Console에 JavaScript를 입력하세요."}
        </p>
        <Step
          title="다른 디버깅 포트를 사용할 때"
          command={`npm run start:${mode} -- --port 9333`}
          description={
            isNode
              ? "사용자 프로젝트의 Node 명령과 이 페이지의 입력에도 같은 포트를 사용하세요."
              : "이 명령으로 준비한 Chrome의 포트를 이 페이지에 입력하세요."
          }
        />
      </div>
    </div>
  );
}
