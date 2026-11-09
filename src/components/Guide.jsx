import CopyButton from "./CopyButton";

function Step({ title, command, description }) {
  return (
    <article className="grid min-w-0 gap-4 lg:grid-cols-3 lg:items-start lg:gap-6">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>
      <div className="mockup-code grid min-w-0 w-full grid-cols-[1fr_auto] items-center gap-y-4 py-4 leading-6 before:mb-0 lg:col-span-2">
        <CopyButton
          key={command}
          text={command}
          label={`${title} 명령`}
          className="mr-4"
        />
        <div className="col-span-2 min-w-0">
          {command.split("\n").map((line) => (
            <pre
              data-prefix="$"
              key={line}
              className="flex pr-4! before:shrink-0"
            >
              <code className="min-w-0 flex-1 whitespace-pre-wrap break-all">
                {line}
              </code>
            </pre>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Guide({ mode }) {
  const isNode = mode === "node";

  return (
    <>
      <details className="collapse collapse-arrow border border-base-300 bg-base-200">
        <summary className="collapse-title flex! min-h-0 items-center text-sm font-semibold after:top-1/2!">
          처음 사용한다면: 로컬 서버 설치
        </summary>
        <div className="collapse-content">
          <Step
            title="로컬 서버 저장소에서 설치"
            command={
              "git clone https://github.com/hong7ya/backdo-server.git\ncd backdo-server\nnpm ci"
            }
            description="Node.js 22.11.0 환경에서 설치하세요. 이미 설치했다면 아래 실행 단계로 진행하세요."
          />
        </div>
      </details>
      <section
        aria-labelledby="connection-guide-title"
        className="grid min-w-0 gap-4"
      >
        <h2
          id="connection-guide-title"
          className="text-lg font-semibold"
        >
          {isNode ? "Node.js" : "Console"} 연결 준비
        </h2>
        <div className="grid min-w-0 gap-6">
          <Step
            title="1. BackDo 서버에서 실행"
            command={`npm run start:${mode}`}
            description={
              isNode
                ? "서버 저장소의 터미널에서 실행하세요. 사용자 프로젝트에서 실행할 Node 명령과 디버깅 포트를 안내합니다."
                : "서버 저장소의 터미널에서 실행하세요. Console 전용 Chrome이 준비되면 안내된 디버깅 포트를 확인하세요."
            }
          />
          {isNode && (
            <Step
              title="2. 사용자 프로젝트에서 실행"
              command="node --inspect-brk=127.0.0.1:9229 ./your-file.js"
              description="별도 터미널에서 디버깅할 프로젝트로 이동해 실행하세요. your-file.js를 실행할 파일로 바꾸고, 서버가 안내한 포트를 사용하세요."
            />
          )}
          <details className="collapse collapse-arrow border border-base-300 bg-base-200">
            <summary className="collapse-title flex! min-h-0 items-center text-sm font-semibold after:top-1/2!">
              다른 디버깅 포트 사용하기
            </summary>
            <div className="collapse-content">
              <Step
                title="BackDo 서버에서 포트 지정"
                command={`npm run start:${mode} -- --port 9333`}
                description={
                  isNode
                    ? "사용자 프로젝트의 Node 명령에도 9333을 사용하고, 아래 입력란에 같은 포트를 입력하세요."
                    : "이 명령으로 준비한 Chrome의 포트를 아래 입력란에 입력하세요."
                }
              />
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
