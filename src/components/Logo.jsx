import logoSrc from "../assets/BackDo.png";

export default function Logo() {
  return (
    <>
      <img
        width="500"
        height="500"
        className="mask mask-squircle w-14 drop-shadow-lg"
        src={logoSrc}
      />
      <span className="text-xl">BackDo</span>
    </>
  );
}
