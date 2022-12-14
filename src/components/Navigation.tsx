import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Navigation() {
  return (
    <div className="top">
      <div className="navigation">
        <Grid container spacing={2}>
          <Grid item xs={2} md={4.5}></Grid>
          <Grid item xs={7} md={5}>
            <a>Room DashBoard</a>
          </Grid>
          <Grid item xs={3} md={1.75} container justifyContent="flex-end">
            <Button id="AN" variant="contained" style={{ borderRadius: 60 }}>
              AN
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="navButons">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Button style={{ backgroundColor: "transparent" }}>
              <NavLink className="nav-link" to="/Home">
                <a className="NavItems" >
                  Home
                </a>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={3} md={3}>
            <Button style={{ backgroundColor: "transparent" }}>
              <NavLink className="nav-link" to="/Room2">
                <a className="NavItems">
                  API DATA
                </a>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={3} md={1.25}>
            <Button style={{ backgroundColor: "transparent" }}>
              <NavLink className="nav-link" to="/Room3">
                <a className="NavItems">
                  Room 3
                </a>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={12} md={12}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Navigation;
