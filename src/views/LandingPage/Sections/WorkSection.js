import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)

  const mailRe = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

  const validate = () =>{
    console.log('validation....',name)
    if(mailRe.test(email)){
      setEmailError(false)
    }
    else{
      setEmailError(true)
    }
    if(name.length < 4){
      setNameError(true)
    }
    else{
      setNameError(false)
    }
    if(message.length === 0){
      setMessageError(true)
    }
    else{
      setMessageError(false)
    }
  }



  return (
    <div className={classes.section} id='contact'>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact Us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  error={nameError}
                  set={setName}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  set={setEmail}
                  error={emailError}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
                error={messageError}
                set={setMessage}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button onClick={()=>validate()} color="success">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
