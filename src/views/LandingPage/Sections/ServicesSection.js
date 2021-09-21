import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import WebIcon from '@material-ui/icons/Web';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import StorageIcon from '@material-ui/icons/Storage';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ServiceSection (){
    const classes = useStyles()

    return (
        <div className={classes.section} id='services'>
            <GridContainer justify='center'>
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Services We Provide</h2>
                    <h5 className={classes.description}>
                        This is the paragraph where you can write more details about your
                        product. Keep you user engaged by providing meaningful information.
                        Remember that by this time, the user is curious, otherwise he wouldn
                        {"'"}t scroll to get here. Add a button if you want the user to see
                        more.
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Web Development"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={WebIcon}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Mobile Application"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={PhoneIphoneIcon}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Databases"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={StorageIcon}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>

        </div>
    );
};

