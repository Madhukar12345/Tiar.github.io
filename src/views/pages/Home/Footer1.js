import React from "react";
import {
  Avatar,
  Box,
  makeStyles,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import GTranslateIcon from "@material-ui/icons/GTranslate";

const useStyles = makeStyles({
  main: {
    backgroundImage: `url("/images/Rectangle.png")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    width: "100%",
    height: "auto",
    paddingBottom:"20px",
    // marginTop:"50px",
  

  },
  text4: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "700",
    fontSize: "42px",
    // lineHeight: "137%",
    color: "#FFFFFF",
    paddingTop: "15px",
  },
  grid1: {
    marginTop: "40px",
    paddingLeft: "100px",

    "@media (max-width:596px)":{
        paddingLeft:"20px",
  }}
  ,
  text1: {
    //  width:"213px",
    height: "17px",
    fontSize: "14px",
    //  lineHeight:"122%",
    color: " #FFFFFF",
    paddingTop: "40px",
  },
  text2: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "22px",
    lineHeight: "28px",
    fontWeight: "700",
    color: "#FFFFFF",
    paddingTop: "70px",
    paddingLeft: "100px",

    "@media (max-width:596px)":{
        paddingLeft:"20px",
        paddingTop:"20px"

    }
  },
  text3: {
    fontSize: "18px",
    lineHeight: "122%",
    color: "#FFFFFF",
    paddingTop: "20px",
    paddingLeft: "100px",
    "@media (max-width:596px)":{
        paddingLeft:"20px"
  }
},
iconf:{ 
    display: "flex",
     paddingLeft:"100px",
    "@media (max-width:596px)":{
    paddingLeft:"12px"
}
}
});

export default function Footer1() {
  const Classes = useStyles();
  return (
    <Box className={Classes.main}>
      <Grid container spacing={0} >
        <Grid item xs={12} sm={6} md={3} className={Classes.grid1}>
          <Box style={{ display: "flex", paddingRight: "15px" ,flexGrow:"1"}}>
            <img
              src="/images/Logo.png"
              alt="img"
              style={{
                width: "64px",
                height: "66px",
                paddingTop: "13px",
                paddingRight: "12px",
              }}
            />
            <Typography className={Classes.text4}>TIAR</Typography>
          </Box>
          <Typography className={Classes.text1}>
            copyright 2021 | NFT Marketplace
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
            <Box > 
          <Typography className={Classes.text2}>My Account</Typography>
          <Typography className={Classes.text3}>My Profile</Typography>
          <Typography className={Classes.text3}>My Activity</Typography>
          </Box>
          
          
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={Classes.grid3}>
          <Typography className={Classes.text2}>Terms Of use</Typography>
          <Typography className={Classes.text3}>Terms&conditions</Typography>
          <Typography className={Classes.text3}>Privacy Policy</Typography>
          <Typography className={Classes.text3}>Cookies Policy</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
        <img
        src="/images/ring2.png"
        alt="img"
        color="white"
        style={{
          position: "absolute",
          
          width: "18%",
          height: "40%",
          marginLeft: "12%",
          marginTop:"-7%"
        }}/>
          <Typography className={Classes.text2}>Reach Us</Typography>
          <Box className={Classes.iconf}>
            <FacebookIcon
              style={{
                color: "white",
                backgroundColor: "#210F42",
               
                marginTop: "30px",
                marginRight: "10px",
              }}
            />
            <TwitterIcon
              style={{
                color: "white",
                backgroundColor: "#210F42",
                marginTop: "30px",
                marginRight: "10px",
              }}
            />
            <TelegramIcon
              style={{
                color: "white",
                backgroundColor: "#210F42",
                marginTop: "30px",
                marginRight: "10px",
              }}
            />
           
            <InstagramIcon
              style={{
                color: "white",
                backgroundColor: "#210F42",
                marginTop: "30px",
                marginRight: "10px",
              }}
            />
           
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
