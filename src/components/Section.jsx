function SectionWrapper({ children }) {
  return (
    <section>
      <div className="hero min-h-[calc(100vh-72px)]">
        <div className="hero-content w-full">
          <div className="min-w-0 w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SectionTop({ title, description, padding }) {
  return (
    <>
      <h1 className="text-4xl font-bold break-keep text-primary sm:text-5xl">
        {title}
      </h1>
      <p className={padding ? "py-6" : ""}>{description}</p>
    </>
  );
}

function SectionContent({ content, padding }) {
  return <div className={padding ? "py-6" : ""}>{content}</div>;
}

const Section = {
  Wrapper: SectionWrapper,
  Top: SectionTop,
  Content: SectionContent,
};

export default Section;
