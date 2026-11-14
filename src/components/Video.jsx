import playSampleMP4 from "../assets/playSample.mp4";
import playSampleWEBM from "../assets/playSample.webm";

export default function Video() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-base-300 px-4 py-3 sm:px-6">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          DOM 모드 데모
        </span>
        <span className="text-sm text-base-content/80">
          화면 변화부터 Console 조작까지 되돌려 보세요.
        </span>
      </div>
      <video
        aria-label="DOM 모드에서 화면 변화와 Console 조작을 되돌리는 데모"
        className="h-auto w-full"
        width="1920"
        height="1128"
        controls
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={playSampleWEBM}
          type="video/webm"
        />
        <source
          src={playSampleMP4}
          type="video/mp4"
        />
      </video>
      <figcaption className="grid gap-4 border-t border-base-300 p-4 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
        <div className="grid gap-2">
          <p className="font-semibold">
            개발 중인 프로젝트에서도 사용해 보세요.
          </p>
          <p className="text-sm leading-relaxed text-base-content/80">
            DOM 모드로 연결한 뒤, 왼쪽 미리보기 주소창에 개발 서버 주소를
            입력하세요.
          </p>
        </div>
        <div className="grid gap-2 rounded-xl border border-base-300 bg-base-200/60 p-4">
          <span className="text-xs font-medium text-base-content/80">
            Vite + React 예시
          </span>
          <code className="text-sm break-all">http://localhost:5173/</code>
          <p className="text-xs text-base-content/80">
            프로젝트 실행 시 터미널에 표시된 주소를 사용하세요.
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
