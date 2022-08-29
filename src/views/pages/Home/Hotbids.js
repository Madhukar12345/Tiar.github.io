import { Grid, Box, Typography, Container, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";

const usestyles = makeStyles({
  grid1: {
    marginTop: "30px",
  },

  mainsection: {
    backgroundColor: "#5723AB",
    width: "100%",
    height: "auto",
    paddingBottom: "150px",
  },

  icon3: {
    fontSize: "18px",
    lineHeight: "138px",
    color: "#FFFFFF",
    opacity: "0.5",
    paddingRight: "5px",
  },

  text1: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "700",
    fontSize: "42px",
    lineHeight: "137%",
    color: "#F97F4E",
    paddingTop: "100px",
  },
  card1: {
    height: "112px",
    width: "289px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(101px)",
    borderRadius: "2px",
    backgroundImage: `url("/images/cardbckimg.png")`,

    zIndex: "2",
    marginTop: "8px",
    borderRadius: "2px silid #FFFFFF",
  },
  card2: {
    width: "280px",
    height: "173px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "2px",
    backgrpundFilter: "blur(101px)",
    backgroundImage: `url("/images/card2-back.png")`,
    marginTop: "7px",
  },

  text2: {
    fontFamily: "'Orbitron', sans-serif",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "700",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    paddingTop: "1.5rem",
  },
  text3: {
    color: "#FFFFFF",
    fontFamily: "'Gilroy', sans-serif",
    fontDize: "14px",
    lineHeight: "138%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem",
  },
  text4: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "700",
    fontSize: "42px",
    lineHeight: "137%",
    color: "#F97F4E",
    paddingTop: "70px",
  },
  text5: {
    fontSize: "14px",
    lineHeight: "122%",
    color: " #FFFFFF",
    opacity: "0.5",
    fontFamily: "'Alef', sans-serif",
    paddingTop: "15px",
  },

  text6: {
    fontWeight: "770",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#F97F4E",
    fontFamily: "'Orbitron', sans-serif",
  },

  text7: {
    fontFamily: "'Orbitron', sans-serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#FFFFFF",
    width: "100px",
  },
  text8: {
    fontWeight: "700",
    lineHeight: "",
    fontSize: "20px",
    color: "white",
    fontFamily: "'Orbitron', sans-serif",
    position: "absolute",
    bottom: "0",
    marginBottom: "25px",
    marginLeft: "15px",
  },
  text9: {
    fontWeight: "700",
    fontSize: "11px",
    lineHeight: "16px",
    color: "#FFFFFF",
    position: "absolute",
    bottom: "0",
    marginBottom: "10px",
    marginLeft: "15px",
  },

  cardbackimg1: {
    width: "289px",
    height: "93px",
    borderRadius: "13px",
  },
  card1s: {
    position: "relative",
  },
  card1midimg: {
    position: "absolute",
    top: "50px",
    zIndex: "999",
    paddingLeft: "112px",
    paddingTop: "7px",
    borderRadius: "10px solid #64488E",
  },
  card2img: {
    width: "279px",
    height: "210px",
    borderRadius: "11px",
    backgroundImage: `url("/images/card3-1.png")`,
    position: "relative",
    zIndex: "1",
  },
  card3img: {
    width: "279px",
    height: "210px",
    borderRadius: "11px",
    backgroundImage: `url("/images/card2-2back.png")`,
    position: "relative",
    zIndex: "1",
  },

  // card2back: {
  //   width: "279.55px",
  //   height: "174px",
  //   backgroundImage: `url("/images/card2-back.png")`,
  //   position: "relative",
  //   zIndex: "2",
  // },
  card2mid: {
    height: "30px",
    width: "124px",
    backgroundImage: `url("/images/card2mid.png")`,
    backdropFilter: "blur(11px)",
    borderRadius: "50px",
    position: "absolute",
    zIndex: "200",
    // marginTop: "-20px",
    marginLeft: "156px",
    marginTop: "-20px",
  },

  text10: {
    fontSize: "9px",
    color: "#FFFFFF",
    paddingLeft: "12px",
    paddingRight: "10px",
    paddingTop: "10px",
  },
  text11: {
    marginTop: "-6px",
    fontSize: "9px",
    color: "#FFFFFF",
    paddingLeft: "12px",
    paddingRight: "10px",
  },
  card2midback: {
    height: "30px",
    width: "124px",
    backgroundImage: `url("/images/card2-back.png")`,
    borderRadius: "50px",
    marginLeft: "156px",
    position: "relative",
  },

  Gridmain2: {
    marginTop: "30px",
  },

  firstgrid: {},
});

export default function Marketplace() {
  const Classes = usestyles();
  return (
    <>
      <Box className={Classes.mainsection}>
        <Container>
          <Box ClassName={Classes.collection}>
            <Box style={{ display: "flex", paddingTop: "10px" }}>
              <img
                src="/images/logo3.png"
                alt="img"
                style={{
                  width: "39px",
                  height: "35px",
                  paddingTop: "82px",
                  paddingRight: "12px",
                }}
              />
              <Typography className={Classes.text4}>Hot Bids</Typography>
            </Box>
            <Container>
              <Grid container spacing={1} className={Classes.Gridmain2}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className={Classes.firstgrid}
                >
                  <Box style={{ textAlign: "-webkit-center" }}>
                    <Card className={Classes.card2img}>
                      <Typography className={Classes.text8}>
                        LAND (-109,39)
                      </Typography>
                      <Typography className={Classes.text9}>
                        4.6k views
                      </Typography>
                    </Card>

                    <Card className={Classes.card2mid}>
                      <Box style={{ background: "" }}>
                        {/* <Box style={{ display: "flex" }}>
                      <Typography className={Classes.text10}>
                        83 : 24 : 58
                      </Typography>
                      <Typography className={Classes.text10}> left </Typography>
                    </Box> */}
                        <Box style={{ display: "flex" }}>
                          <Typography className={Classes.text10}>
                            83 : 24 : 58
                          </Typography>
                          <Typography className={Classes.text10}>
                            {" "}
                            left{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>

                    <Card className={Classes.card2}>
                      <Box>
                        <Box style={{ display: "flex", paddingLeft: "20px" }}>
                          <Box style={{ display: "flex", paddingTop: "15px" }}>
                            <img
                              src="/images/card2midlogo.png"
                              alt="img"
                              style={{ paddingRight: "5px" }}
                            />

                            <Typography className={Classes.text7}>
                              3.3 ETH
                            </Typography>
                          </Box>
                          <MoreVertIcon
                            style={{
                              color: "white",
                              paddingTop: "13px",
                              paddingLeft: "110px",
                              fontWeight: "700",
                            }}
                          />
                        </Box>
                      </Box>
                      <Container>
                        <Typography className={Classes.text5}>
                          Lorem Ipsum is simply dummy text Lorem Ipsum is simply
                          dummy text Lorem Ipsum is simply dummy text Lorem
                          Ipsum is simply dummy text
                        </Typography>
                      </Container>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          paddingTop: "15px",
                        }}
                      >
                        <Typography className={Classes.text6}>
                          Bid 2.1 WETH
                        </Typography>

                        <Box style={{ display: "flex" }}>
                          <FavoriteBorderIcon className={Classes.icon3} />
                          <Typography
                            style={{
                              fontSize: "18px",
                              lineHeight: "18px",
                              color: "#FFFFFF",
                              opacity: "0.5",
                            }}
                          >
                            54
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className={Classes.secondgrid}
                >
                  <Box style={{ textAlign: "-webkit-center" }}>
                    <Card className={Classes.card3img}>
                      <Typography className={Classes.text8}>
                        LAND (-109,39)
                      </Typography>
                      <Typography className={Classes.text9}>
                        4.6k views
                      </Typography>
                    </Card>

                    <Card className={Classes.card2mid}>
                      <Box style={{ background: "" }}>
                        <Box style={{ display: "flex" }}>
                          <Typography className={Classes.text10}>
                            83 : 24 : 58
                          </Typography>
                          <Typography className={Classes.text10}>
                            {" "}
                            left{" "}
                          </Typography>
                        </Box>
                        <Box style={{ display: "flex" }}>
                          <Typography className={Classes.text10}>
                            83 : 24 : 58
                          </Typography>
                          <Typography className={Classes.text10}>
                            {" "}
                            left{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>

                    <Card className={Classes.card2}>
                      <Box>
                        <Box style={{ display: "flex", paddingLeft: "20px" }}>
                          <Box style={{ display: "flex", paddingTop: "15px" }}>
                            <img
                              src="/images/card2midlogo.png"
                              alt="img"
                              style={{ paddingRight: "5px" }}
                            />

                            <Typography className={Classes.text7}>
                              3.3 ETH
                            </Typography>
                          </Box>
                          <MoreVertIcon
                            style={{
                              color: "white",
                              paddingTop: "13px",
                              paddingLeft: "110px",
                              fontWeight: "700",
                            }}
                          />
                        </Box>
                      </Box>
                      <Container>
                        <Typography className={Classes.text5}>
                          Lorem Ipsum is simply dummy text Lorem Ipsum is simply
                          dummy text Lorem Ipsum is simply dummy text Lorem
                          Ipsum is simply dummy text
                        </Typography>
                      </Container>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          paddingTop: "15px",
                        }}
                      >
                        <Typography className={Classes.text6}>
                          Bid 2.1 WETH
                        </Typography>

                        <Box style={{ display: "flex" }}>
                          <FavoriteBorderIcon className={Classes.icon3} />
                          <Typography
                            style={{
                              fontSize: "18px",
                              lineHeight: "18px",
                              color: "#FFFFFF",
                              opacity: "0.5",
                            }}
                          >
                            54
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className={Classes.thirdgrid}
                >
                  <Box style={{ textAlign: "-webkit-center" }}>
                    <Card className={Classes.card2img}>
                      <Typography className={Classes.text8}>
                        LAND (-109,39)
                      </Typography>
                      <Typography className={Classes.text9}>
                        4.6k views
                      </Typography>
                    </Card>

                    <Card className={Classes.card2mid}>
                      <Box style={{ background: "" }}>
                        {/* <Box style={{ display: "flex" }}>
                      <Typography className={Classes.text10}>
                        83 : 24 : 58
                      </Typography>
                      <Typography className={Classes.text10}> left </Typography>
                    </Box> */}
                        <Box style={{ display: "flex" }}>
                          <Typography className={Classes.text10}>
                            83 : 24 : 58
                          </Typography>
                          <Typography className={Classes.text10}>
                            {" "}
                            left{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>

                    <Card className={Classes.card2}>
                      <Box>
                        <Box style={{ display: "flex", paddingLeft: "20px" }}>
                          <Box style={{ display: "flex", paddingTop: "15px" }}>
                            <img
                              src="/images/card2midlogo.png"
                              alt="img"
                              style={{ paddingRight: "5px" }}
                            />

                            <Typography className={Classes.text7}>
                              3.3 ETH
                            </Typography>
                          </Box>
                          <MoreVertIcon
                            style={{
                              color: "white",
                              paddingTop: "13px",
                              paddingLeft: "110px",
                              fontWeight: "700",
                            }}
                          />
                        </Box>
                      </Box>
                      <Container>
                        <Typography className={Classes.text5}>
                          Lorem Ipsum is simply dummy text Lorem Ipsum is simply
                          dummy text Lorem Ipsum is simply dummy text Lorem
                          Ipsum is simply dummy text
                        </Typography>
                      </Container>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          paddingTop: "15px",
                        }}
                      >
                        <Typography className={Classes.text6}>
                          Bid 2.1 WETH
                        </Typography>

                        <Box style={{ display: "flex" }}>
                          <FavoriteBorderIcon className={Classes.icon3} />
                          <Typography
                            style={{
                              fontSize: "18px",
                              lineHeight: "18px",
                              color: "#FFFFFF",
                              opacity: "0.5",
                            }}
                          >
                            54
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className={Classes.fourthgrid}
                >
     
                  <Box style={{ textAlign: "-webkit-center" }}>
                    <Card className={Classes.card3img}>
                      <Typography className={Classes.text8}>
                        LAND (-109,39)
                      </Typography>
                      <Typography className={Classes.text9}>
                        4.6k views
                      </Typography>
                    </Card>

                    <Card className={Classes.card2mid}>
                      <Box style={{ background: "" }}>
                        {/* <Box style={{ display: "flex" }}>
                      <Typography className={Classes.text10}>
                        83 : 24 : 58
                      </Typography>
                      <Typography className={Classes.text10}> left </Typography>
                    </Box> */}
                        <Box style={{ display: "flex" }}>
                          <Typography className={Classes.text10}>
                            83 : 24 : 58
                          </Typography>
                          <Typography className={Classes.text10}>
                            {" "}
                            left{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>

                    <Card className={Classes.card2}>
                      <Box>
                        <Box style={{ display: "flex", paddingLeft: "20px" }}>
                          <Box style={{ display: "flex", paddingTop: "15px" }}>
                            <img
                              src="/images/card2midlogo.png"
                              alt="img"
                              style={{ paddingRight: "5px" }}
                            />

                            <Typography className={Classes.text7}>
                              3.3 ETH
                            </Typography>
                          </Box>
                          <MoreVertIcon
                            style={{
                              color: "white",
                              paddingTop: "13px",
                              paddingLeft: "110px",
                              fontWeight: "700",
                            }}
                          />
                        </Box>
                      </Box>
                      <Container>
                        <Typography className={Classes.text5}>
                          Lorem Ipsum is simply dummy text Lorem Ipsum is simply
                          dummy text Lorem Ipsum is simply dummy text Lorem
                          Ipsum is simply dummy text
                        </Typography>
                      </Container>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          paddingTop: "15px",
                        }}
                      >
                        <Typography className={Classes.text6}>
                          Bid 2.1 WETH
                        </Typography>

                        <Box style={{ display: "flex" }}>
                          <FavoriteBorderIcon className={Classes.icon3} />
                          <Typography
                            style={{
                              fontSize: "18px",
                              lineHeight: "18px",
                              color: "#FFFFFF",
                              opacity: "0.5",
                            }}
                          >
                            54
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}
