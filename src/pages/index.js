import * as React from "react"
import FixedNavbar from '../components/FixedNavbar';
import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Work';

import '../styles/index.scss';

const IndexPage = () => (
  <>
    <FixedNavbar />
    <Intro />
    <About />
    <Work />
  </>
);

export default IndexPage

export const Head = () => <title>Kathryn Herod - Front End Developer</title>
