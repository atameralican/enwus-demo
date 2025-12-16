import React from "react";
import post1 from "../assets/images/sliderImg.webp";
import post2 from "../assets/images/sliderImg.webp";
import post3 from "../assets/images/sliderImg.webp";
import post4 from "../assets/images/sliderImg.webp";
import post5 from "../assets/images/sliderImg.webp";
import ActivitiesPageComponent from "../components/ActivitiesPageComponent";

const DefensePage = () => {
  const images = [post1, post2, post3, post4, post5];

  return (
    <>
      <ActivitiesPageComponent
        title="Savunma Sanayi"
        images={images}
        children={
          <>
            <p>
              There are many vaariations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
            <p>
              Donec aliquet ullamcorper tortor, in aliquam nunc tempus vel.
              Pellentesque luctus cursus sapien. Cras ornare erat libero, id
              efficitur ipsum tempor quis. Donec at suscipit nisl. Nulla laoreet
              tellus sit amet mauris vestibulum, eget porta risus tincidunt.
              Vestibulum quis molestie eros. Suspendisse maximus euismod ipsum,
              nec congue massa. Suspendisse justo erat, ultrices in condimentum
              et, tristique eu turpis. Sed dictum turpis sapien, eget placerat
              massa laoreet eget. Quisque elementum, magna ut vulputate
              dignissim, sem erat hendrerit nibh, at efficitur elit nulla vel
              mauris. Vivamus tempus consequat dignissim. Phasellus pharetra
              convallis mi, id fringilla elit ultrices id. Phasellus magna
              magna, porta ornare efficitur mollis, venenatis quis justo. In
              neque ligula, fringilla ut mi a, auctor tempor mi. Suspendisse
              molestie felis dui, nec porta elit hendrerit venenatis.
            </p>
          </>
        }
      />
    </>
  );
};

export default DefensePage;
