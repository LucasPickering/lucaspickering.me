import React from "react";
import PageContainer from "@root/components/PageContainer";
import Gallery from "@root/components/Gallery";

const AboutPage: React.FC = () => (
  <PageContainer>
    <h1>About</h1>
    <p>
      My name's Lucas Pickering, and I do computer stuff and photography. This
      site is where I dump a lot of my projects and photos. Check out my GitHub
      for more of my projects or contact info.
    </p>
    <Gallery
      images={[
        "lucaspickering.me/about/yo_jbscrb",
        "lucaspickering.me/about/ye_lpajcg",
      ]}
      caption="How majestic"
    />
  </PageContainer>
);

export default AboutPage;
