import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SelectionCarousel from '.././../Components/Sections/SectionCarousel'

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

const AboutSection = () => {

    const classes = useStyles()

    return (
        <div className={classes.section} id='about'>

            <GridContainer className={classes.marginAuto} justify='center'>
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>About Us</h2>
                    <h5 className={classes.description}>
                        This is the paragraph where you can write more details about your
                        product. Keep you user engaged by providing meaningful information.
                         Remember that by this time, the user is curious, otherwise he wouldn
                        {"'"}t scroll to get here. Add a button if you want the user to see
                        more.
                    </h5>
                    <SelectionCarousel/>
                </GridItem>

            </GridContainer>
        </div>
    );
};

export default AboutSection;
