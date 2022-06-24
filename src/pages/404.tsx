import Images from "@root/components/Images";
import PageContainer from "@root/components/PageContainer";
import React from "react";

const Page404: React.FC = () => (
  <PageContainer>
    <h1>Not Found</h1>

    <Images images="lucaspickering.me/general/lost_xrxj3w" />

    <p>
      Well shucks. Now I look like a real grade A doofus maloofus huh. Sure do
      have egg on my face. What an embarrassment. Guy calls himself a "web dude"
      or whatever and still has broken links on his site? So sad. And now you're
      feeling lost, like the little prarie doggo up there. Just kinda wondering,
      "Am I stuck here forever?". Well yes, you are! Your browser actually
      doesn't work anymore. Those links up top are just a sham. Your back button
      has been disabled. Enjoy!
    </p>
  </PageContainer>
);

export default Page404;
