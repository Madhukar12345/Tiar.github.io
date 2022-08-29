import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Paper,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  mainsection: {
    backgroundColor: "#5723AB",
    width: "100%",
    height: "auto",
    backgroundSize: "cover",
  },
  text1: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "700",
    fontSize: "42px",
    lineHeight: "137%",
    color: "#F97F4E",
    paddingTop: "180px",
    "@media (max-width: 767px)": {
      fontSize: "35px",
    },
    "@media (max-width: 384px)": {
      fontSize: "30px",
      paddingRight: "80px",
    },
    // "@media (max-width:458px)":{
    //   marginRight:"70px"
    //  },
    //  "@media (min-width:320px)":{
    //   paddingRight:"70px"
    //  },
  },
  text2: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "700",
    fontSize: "45px",
    lineHeight: "138%",
    color: "#FFFFFF",
    "@media (max-width: 767px)": {
      fontSize: "35px",
    },
    "@media (max-width: 384px)": {
      fontSize: "25px",
    },
  },
  text3: {
    fontSize: "24px",
    lineHeight: "40px",

    color: "#FFFFFF",
    "@media (max-width: 767px)": {
      fontSize: "35px",
    },
    "@media (max-width: 380px)": {
      fontSize: "20px",
    },
  },
  btn: {
    background: `linear-gradient(92.23deg, #FF56F6 21.43%, #B936EE 50.63%, #3BACE2 100%, #406AFF 117.04%)`,
    width: "271px",
    height: "60px",
    color: "#FFFF",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "23px",
    marginTop: "50px",
    marginBottom: "30px",
    "@media (max-width:425px)": {
      width: "100px",
      height: "40px",
      fontSize: "12px",
    },
  },
  imgring: {
    width: "449px",
    height: "339px",
    color: "white",
  },
  paper: {
    position: "relative",
    height: "auto",
    width: "100%",
    paddingBottom: "60px",
    background: "rgba(87, 35, 171, 0.1)",
    backdropFilter: "blur(232px)",
    borderRadius: " 0px 0px 0px 50px",
    // backgroundImage: `url("/images/Ring1.png")`,
  },

  card1c: {
    height: "303px",
    width: "70%",
    paddingTop: "150px",
    display: "flex",
    justifyContent: "center",
    // marginLeft: "8%",
    paddingLeft: "65px",
    opacity: "2",
    shadowColor: "#202020",

    // background: `url("/images/card1.png")`,
    backgroundRepeat: "no-repeat",
    // [theme.breakpoints.down("sm")]: {
    //   paddingLeft:"100px",
    // },

    "@media (max-width: 425px)": {
      paddingLeft: "60px",
    },
    [theme.breakpoints.down("sm")]:{
         paddingTop:"50px"

    },
    "@media (max-width: 515px)": {
      width: "70%",
    }
  },
  card1: {
    height: "303px",
    width: "403px",
    paddingTop: "200px",
  },
  card2: {
    width: "70%",
    // height: "250px",
    backgroundImage: `url("/images/cardbgimg.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "25px",
    // marginLeft: "8%",
    marginLeft: "65px",

    // [theme.breakpoints.down("sm")]: {
    //   marginLeft:"100px",
    // },
    "@media (max-width: 500px)": {
      width: "80%",
    },
  },
  bxs: {
    display: "flex",
    justifyContent: "space-between",
  },
  text4: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#FFFFFF",
    fontFamily: "'Orbitron', sans-serif",
    padding: "19px 0px 19px 26px",

    "@media (max-width:340px)": {
      fontSize: "16px",
      marginBottom: "5px",
    },
  },
  text5: {
    color: "#FFFFFF",
    lineHeight: "61.91px",
    fontSize: "18px",
    lineHeight: "138%",
    color: "#FFFFFF",
    padding: "0px 27px 27px 27px",
    fontFamily: "'Mulish', sans-serif",
  },
  button2: {
    height: "55px",
    width: "232px",
    background: `linear-gradient(92.23deg, #FF56F6 21.43%, #B936EE 50.63%, #3BACE2 100%, #406AFF 117.04%)`,
    boxShadow: "0px 4px 97px rgba(255, 86, 246, 0.51)",
    backdropFilter: "blur(192px)",
    borderRadius: "2px",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
    fontFamily: "'Orbitron', sans-serif",
    color: "#FFFFFF",
    "@media (max-width:625px)": {
      width: "180px",
      height: "40px",
      fontSize: "12px",
    },
    "@media (max-width:768px)": {
      width: "180px",
      height: "40px",
      fontSize: "12px",
    },
    "@media (min-width:1440px)": {
      marginLeft: "100px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
  },
  boxbutton2: {
    // margin: "0px 86px 30px 86px",
  },

  imgtext: {
    width: "100%",
    position: "relative",
    "@media (min-width:500px)": {
      paddingTop: "30px",
    },
  },
  imgtext1: {
    position: "absolute",
    color: "#fff",
    left: "102px",
    bottom: "10px",
  },
  imgtxt1: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "26px",
    color: " #FFFFFF",
  },
  imgtxt2: {
    fontWeight: "700",
    fontSize: "11px",
    lineHeight: "16px",
    color: " #FFFFFF",
  },
  itheriumimg: {
    width: "25px",
    height: "30px",
    paddingTop: "14px",
    paddingRight: "7px",
  },

  grid1: {
    position: "relative",

    paddingLeft: "85px",
    "@media (max-width:400px)": {
      paddingLeft: "0%",
    },
    [theme.breakpoints.down("sm")]:{
      paddingLeft:"50px ",
    },
    [theme.breakpoints.down("xs")]:{
      paddingLeft:"15px ",
    },
     
  },
  leftmain: {
    paddingLeft: "10%",
    "@media (min-width:400px)": {
      paddingRight: "14%",
    },
    [theme.breakpoints.down("md")]:{
      paddingLeft:"0px"
    }

  },
  grid2: {
    "@media (max-width:500px)": {
      paddingTop: "35px",
    },
  },
  card2s:{
    width:"100%",
    "@media (max-width:400px)": {
      height: "auto",
      marginRight:"50px"
    },

  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.mainsection}>
      <img
        src="/images/Ring1.png"
        alt="img"
        color="white"
        style={{
          position: "absolute",
          top: "415px",
          width: "20%",
          height: "45%",
          paddingLeft: "0px",
        }}
      />

      <Grid item xs={12} sm={12} md={7} className={classes.grid1}>
        <Box className={classes.leftmain}>
          <Container>
            <Typography className={classes.text1}>
              The Indian Art Revolution
            </Typography>
            <Typography
              style={{ paddingTop: "20px" }}
              className={classes.text2}
            >
              Discover, Find and Sell
            </Typography>
            <Typography className={classes.text2}>
              extraordinary NFTs
            </Typography>
            <Typography
              style={{ paddingTop: "20px" }}
              className={classes.text3}
            >
              The world’s first and largest digital marketplace for
            </Typography>
            <Typography className={classes.text3}>
              crypto collectibles and non- fungible tokens (NFTs).
            </Typography>

            <Box>
              <Button variant="outlined" className={classes.btn}>
                Explore
              </Button>
            </Box>
          </Container>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={5} className={classes.grid2}>
        <Paper className={classes.paper}>
          <Container>
            {/* <img src="/images/Ring1.png" alt="img" color="white" style={{position:"absolute", top:"415px", width:"280px", height:"400px",paddingLeft:"800px" }}/> */}
            <Box className={classes.imgtext}>
              <img
                src="/images/card1.png"
                alt="img"
                className={classes.card1c}
              />

              <Box className={classes.imgtext1}>
                <Typography className={classes.imgtxt1}>Gopichand</Typography>
                <Typography className={classes.imgtxt2}>4.6k views</Typography>
              </Box>
            </Box>

            <Card className={classes.card2}>
              <CardContent className={classes.card2s}>
                <Box className={classes.bxs}>
                  <Typography className={classes.text4}> Gopichand</Typography>

                  <Box style={{ display: "flex" }}>
                    <img
                      src="/images/card2midlogo.png"
                      alt="img"
                      className={classes.itheriumimg}
                    />

                    <Typography
                      style={{ padding: "19px 26px 19px 0px" }}
                      className={classes.text4}
                    >
                      ETH 3.31
                    </Typography>
                  </Box>
                </Box>
                <Typography className={classes.text5}>
                  It’s a popular children's game, often played in different
                  countries. How the game is played varies throughout different
                  regions of the world.
                </Typography>
                <Box className={classes.boxbutton2}>
                  <Button variant="outlined" className={classes.button2}>
                    BUY
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}
