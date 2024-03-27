
import { AppBar, Button, Toolbar, Typography } from "@mui/material";


export default function Navbar() {
    return (
        <AppBar color="success" position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
        <Button variant="contained" color="success">Add New Recipe</Button>
        </Toolbar>
      </AppBar>
    );
}