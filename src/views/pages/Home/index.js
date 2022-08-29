import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import Navbar from "./Components/Main";
import Main from './Components/Main.js'
import Marketplace from "./Marketplace";
import Hotbids from "./Hotbids";
import Footer1 from "./Footer1";
function Home(props) {
  return (
    <Page title="Marketplace | MetaArts">
      <Box>
     <Main/>
     <Marketplace/>
     <Hotbids/>
     <Footer1/>
      </Box>
    </Page>
  );
}

export default Home;
