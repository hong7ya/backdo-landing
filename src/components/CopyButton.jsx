import { useEffect, useState } from "react";

export default function CopyButton({ text, label = "텍스트", className = "" }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) {
      return;
    }

    const timeout = setTimeout(() => setStatus(""), 2000);

    return () => clearTimeout(timeout);
  }, [status]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${label} 복사`}
      title={
        status === "error"
          ? "복사하지 못했습니다. 내용을 선택해 직접 복사해 주세요."
          : `${label} 복사`
      }
      className={`btn btn-ghost btn-sm w-20 font-sans ${className}`}
    >
      <span aria-live="polite">
        {status === "copied"
          ? "복사됨"
          : status === "error"
            ? "복사 실패"
            : "복사"}
      </span>
    </button>
  );
}
