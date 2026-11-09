function SectionWrapper({ children }) {
  return (
    <section>
      <div className="hero min-h-[calc(100vh-72px)]">
        <div className="hero-content w-full">
          <div className="grid min-w-0 w-full gap-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SectionTop({ title, description }) {
  return (
    <div className="grid gap-4">
      <h1 className="text-4xl font-bold break-keep text-primary sm:text-5xl">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
}

function SectionContent({ content }) {
  return content;
}

const Section = {
  Wrapper: SectionWrapper,
  Top: SectionTop,
  Content: SectionContent,
};

export default Section;
