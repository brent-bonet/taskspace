import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Nav = () => {
  return (
    <AppBar position="static">
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h5">TaskSpace</Typography>
        </Grid>
        <Grid item xs={4}>
          <ButtonGroup variant="contained">
            <Button>Help & Feedback</Button>
            <Button>Account</Button>
            <Button>Sign Out</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Nav;
