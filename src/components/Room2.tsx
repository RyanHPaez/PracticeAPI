import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useEffect, useState} from "react";
import { parse } from "path";


function Room2() {

  const [data, setData]= useState(
   {roomInfo:[
    {group:[{groupName:''}]},
    
  //   room:''}
   ]}
)
useEffect(() => {
    fetchedData();
    // localStorage.setItem('dataKey', JSON.stringify(data))
  }, []);

 
const fetchedData = async () => {
const dataResponse = await fetch(
  "https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
  {       
    method: "GET",        
    headers: {
    accept:'application/json',
      "x-functions-key": "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
    },
  }
);
const response=await dataResponse.json()
setData(response)

};
console.log(data)
  // const [ data,setData]= useState( [])
  // const { data } = props;
  // useEffect(() =>{const dataKey =localStorage.getItem('dataKey')
  // setData (JSON.parse(dataKey))
//   console.log("dataKey",dataKey)
// },[data])
 

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
                  {/* <h4>{data.roomInfo[0].room[0].roomName}</h4> */}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {data.roomInfo[0].group[0].groupName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {/* {data.roomInfo[0].hotel[0].hotelName}-
                  {data.roomInfo[0].room[0].roomType} */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      {/* {data.roomInfo[0].room[0].travelStartDate}-
                      {data.roomInfo[0].room[0].travelEndDate} */}
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
              {/* {data.roomInfo[0].room[0].roomStatus} */}
            </Button>
          </Grid>

          <Grid item xs={4} md={2}>
            <Button
              style={{ borderRadius: 50 }}
              variant="outlined"
              color="secondary"
            >
              <i className="fa-solid fa-dollar-sign"></i>
              {/* Balance Due - ${data.roomInfo[0].room[0].remainingBalance} */}
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
export default Room2;
