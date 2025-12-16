import CoreLayout from "../components/CoreLayout";
import ImgCardComponent from "../components/ImgCardComponent";
//photos
import arge from "../assets/images/home-page/arge.webp";
import talasli from "../assets/images/home-page/talasli.webp";
import savunma from "../assets/images/home-page/savunma1.webp";
import banner from "../assets/images/home-page/banner.webp";
import banner_kucuk from "../assets/images/home-page/banner-kucuk.webp";
const HomePage = () => {
  return (
    <>
      <CoreLayout
        bannerImg={banner}
        bannerTitle="What is Lorem Ipsum?"
        bannerText="What is Lorem Ipsum?"
        bannerKucuk={banner_kucuk}
        bannerAlt="What is Lorem Ipsum? - Home Page"
      >
        <div className="container mt-3 mb-3">
          <div className="hero-content col-md-8 text-justify text-primary-emphasis lh-base fw-light">
            <h2 className="mb-3 fw-bold text-md-start text-center text-primary-emphasis ">
              What is Lorem Ipsum?
            </h2>

            <p className="fw-bold ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>

            <p className="mb-4">
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>

            <p className="mb-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>

            <div className="key-features mb-5 ">
              <h3 className="h4 mb-4 fw-bold">
                Where does it come from?
              </h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  ✓ Contrary to popular belief, Lorem Ipsum is not simply random text.
                </li>
                <li className="mb-2">✓ Mauris eu odio porttitor.
</li>
                <li className="mb-2">✓ Aliquam sed nibh fermentum</li>
                <li className="mb-2">✓ Morbi quis neque tincidunt</li>
                <li className="mb-2">✓ Ut ac felis sit amet lacus</li>
              </ul>



            </div>
          </div>
          <hr></hr>
          <div className="row gy-3 gx-3 ">
            <div></div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="AR-GE"
                description="AR-GE, Pellentesque fermentum elit ac erat rutrum, sit amet dapibus tellus aliquet. "
                image={arge}
                link="/arge"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Imalat"
                description="Vestibulum eget enim id augue interdum vulputate a ac sem"
                image={talasli}
                link="/imalat"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Savunma Sanayi"
                description="Phasellus hendrerit mauris et purus scelerisque cursus ac a metus."
                image={savunma}
                link="/savunma-sanayi"
              />
            </div>
          </div>
        </div>
      </CoreLayout>
    </>
  );
};

export default HomePage;

