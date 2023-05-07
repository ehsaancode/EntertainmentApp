import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
// const useStyles = makeStyles({
//   root: {
//     width: 100,
//     position: "fixed",
//     bottom: 0,
//     backgroundColor: "red",
//     zIndex: 100,
//   },
// });

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  // const classes = useStyles();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction label="TV Series" icon={<LiveTvIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
