import "../assets/styles/about-us.css";
const AboutUsPage = () => {
  return (
    <>
      <section className="py-5 about-us-section ">
        <div className="container">
          <div className="hero-content col-md-8 text-justify text-primary-emphasis lh-base fw-light">
            <h2 className="mb-3 fw-bold text-md-start text-center text-primary-emphasis ">
              Hakkımızda
            </h2>
            <p className="fw-bold ">
              Aorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <p className="mb-4">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries.
            </p>
            <p className="mb-4">
              but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages.
            </p>
            <p className="mb-4">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
            <h3 className="h4  fw-bold">Lorem</h3>
            <p className="mb-4">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum.
            </p>
            <h3 className="h4  fw-bold">Ipsum</h3>
            <p className="mb-4">
              Arious versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;

