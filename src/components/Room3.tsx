import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function Room3() {
  
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <div className="Paper">
      <Grid container spacing={2}>
        <Grid item xs={3} md={2} sm container>
          <Typography variant="subtitle1" component="div">
            <div className="menuicon">
              <a href={"/Home"}>
                <Img
                  id="Icon"
                  alt="menubutton"
                  src={require("../images/icon.png")}
                />
              </a>
            </div>
          </Typography>
        </Grid>

        <Grid item xs={6} md={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <div className="roomInfo">
              <Grid item xs>
                <Typography variant="subtitle1">
                  <h4>Ryan's Room</h4>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Group Coders
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Hard Rock -
                  Classic
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                    12/08/2022-10/21/2025
                    </Typography>
                  </Grid>
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={3} md={2} sm container>
          <Typography variant="body2" component="div">
            <div className="menuicon">
              <a href={"/Home"}>
                <Img
                  id="menuIcon"
                  alt="menubutton"
                  src={require("../images/vertmenu.png")}
                />
              </a>
            </div>
          </Typography>
        </Grid>

        <Grid item xs={11} md={11} sm container>
          <div className="resortImg">
            <Img
              id="resortIcon"
              alt="resort"
              src={require("../images/resort.jpg")}
            />
          </div>
        </Grid>
      </Grid>

      <div className="buttons">
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            md={1}
            sx={{
              mb: 3,
            }}
          >
            <Button
              variant="outlined"
              color="success"
              style={{ borderRadius: 50 }}
            >
              <i className="fa-solid fa-check"></i>
              Booked
            </Button>
          </Grid>

          <Grid item xs={4} md={2}>
            <Button
              style={{ borderRadius: 50 }}
              variant="outlined"
              color="secondary"
            >
              <i className="fa-solid fa-dollar-sign"></i>
              Balance Due - $0
            </Button>
          </Grid>
          <Grid item xs={4} md={8}></Grid>
        </Grid>
      </div>

      <div className="buttons">
        <Grid container spacing={2}>
          <Grid item xs={4} md={1}>
            <Button style={{ borderRadius: 50 }}>
              <i className="fa-solid fa-pen"></i>
              Modify
            </Button>
          </Grid>

          <Grid item xs={4} md={2}>
            <Button style={{ borderRadius: 50 }}>
              <i className="fa-solid fa-dollar-sign"></i>
              Make Payment
            </Button>
          </Grid>
          <Grid item xs={4} md={8}></Grid>
        </Grid>
      </div>

      <div className="divider">
        <Divider variant="middle" />
      </div>
      <div className="Guests" style={{ fontSize: "12px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={11}
            md={11}
            sx={{
              mb: 3,
              mr: 5,
            }}
          >
            <h1>Guests in this Room</h1>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={1}>
            <Button variant="outlined" style={{ borderRadius: 50 }}>
              <i className="fa-solid fa-user"></i>
              Adult 1
            </Button>
          </Grid>
          <Grid item xs={4} md={1}>
            <Button variant="outlined" style={{ borderRadius: 50 }}>
              <i className="fa-solid fa-user"></i>
              Adult 2
            </Button>
          </Grid>
          <Grid item xs={4} md={1}>
            <Button variant="outlined" style={{ borderRadius: 50 }}>
              <i className="fa-solid fa-child"></i>Child 1
            </Button>
          </Grid>
          <Grid item xs={1} md={8}></Grid>
        </Grid>
      </div>

      <div className="divider">
        <Divider variant="middle" />
      </div>
      <div className="Extras" style={{ fontSize: "12px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={11}
            md={11}
            sx={{
              mb: 3,
              mr: 5,
            }}
          >
            <h1>Room Extras</h1>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Button
              variant="outlined"
              color="success"
              style={{ borderRadius: 50 }}
            >
              Transfer Purchased
            </Button>
          </Grid>
          <Grid item xs={9} md={8}></Grid>
        </Grid>
      </div>
      <div className="divider">
        <Divider variant="middle" />
      </div>

      <div className="Cancel">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Button
              variant="contained"
              color="error"
              style={{ borderRadius: 50 }}
            >
              Cancel Room
            </Button>
          </Grid>
          <Grid item xs={9} md={8}></Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Room3;
