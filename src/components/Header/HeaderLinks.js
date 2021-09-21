/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Language, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

//language internalization i18next
import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';

const translationEn = {hello:'Hello'};
const translationArm = {hello:'barev'};
const translationRus = {hello:'zdrasti'};

i18n
    .use(initReactI18next) //passes i18n down to react-i18next
    .init({
        resources:{
            en:{translation:translationEn},
            arm:{translation:translationArm},
            rus:{translation:translationRus}
        },
        lng:'en',
        fallbackLng:'en',
        interpolation:{escapeValue:false}
    })


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const {t} = useTranslation();

  //console.log(localStorage.getItem('language'))
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
                {t('hello')}
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}

        />
      </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="#home"
                color="transparent"
                className={classes.navLink}
            >
                Home
            </Button>
        </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#about"
          color="transparent"
          className={classes.navLink}
        >
          About
        </Button>
      </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="#services"
                color="transparent"
                className={classes.navLink}
            >
                Services
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="#technologies"
                color="transparent"
                className={classes.navLink}
            >
                Technologies
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="#contact"
                color="transparent"
                className={classes.navLink}
            >
                Contact Us
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <CustomDropdown
                noLiPadding
                buttonText="Languages"
                buttonProps={{
                    className: classes.navLink,
                    color: "transparent",
                }}
                buttonIcon={Language}
                dropdownList={[
                    <option value={'en'} className={classes.dropdownLink}>
                        English
                    </option>,
                    <option value={'rus'} className={classes.dropdownLink}>
                        Russian
                    </option>,
                    <option value={'arm'} className={classes.dropdownLink} >
                        Armenian
                    </option>,
                ]}
            />
        </ListItem>

      {/*<ListItem className={classes.listItem}>*/}
      {/*  /!*<Tooltip title="Delete">*/}
      {/*    <IconButton aria-label="Delete">*/}
      {/*      <DeleteIcon />*/}
      {/*    </IconButton>*/}
      {/*  </Tooltip>*!/*/}
      {/*  <Tooltip*/}
      {/*    id="instagram-twitter"*/}
      {/*    title="Follow us on twitter"*/}
      {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
      {/*    classes={{ tooltip: classes.tooltip }}*/}
      {/*  >*/}
      {/*    <Button*/}
      {/*      href="https://twitter.com/CreativeTim?ref=creativetim"*/}
      {/*      target="_blank"*/}
      {/*      color="transparent"*/}
      {/*      className={classes.navLink}*/}
      {/*    >*/}
      {/*        <i className={classes.socialIcons + " fab fa-linkedin"} />*/}
      {/*    </Button>*/}
      {/*  </Tooltip>*/}
      {/*</ListItem>*/}
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Tooltip*/}
      {/*    id="instagram-facebook"*/}
      {/*    title="Follow us on facebook"*/}
      {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
      {/*    classes={{ tooltip: classes.tooltip }}*/}
      {/*  >*/}
      {/*    <Button*/}
      {/*      color="transparent"*/}
      {/*      href="https://www.facebook.com/CreativeTim?ref=creativetim"*/}
      {/*      target="_blank"*/}
      {/*      className={classes.navLink}*/}
      {/*    >*/}
      {/*      <i className={classes.socialIcons + " fab fa-facebook"} />*/}
      {/*    </Button>*/}
      {/*  </Tooltip>*/}
      {/*</ListItem>*/}
    </List>
  );
}
