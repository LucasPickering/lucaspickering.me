import React from "react";
import PageContainer from "@root/components/PageContainer";
import ImageSet from "@root/components/ImageSet";

const AboutPage: React.FC = () => (
  <PageContainer>
    <h1>About</h1>
    <p>
      My name's Lucas Pickering, and I do computer stuff and photography. This
      site is where I dump a lot of my projects and photos. Check out my GitHub
      for more of my projects or contact info.
    </p>
    <ImageSet
      images={[{ src: "/assets/me/yo.jpg" }, { src: "/assets/me/ye.jpg" }]}
    />
  </PageContainer>
);

export default AboutPage;
