import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

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
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  // using useEffect to navigate using useNavigation. we can also achive same functionality using seperate handleClick function. Commented codes below.
  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value]);

  // const handleClick = () => {
  //   if (value === 0) {
  //     navigate("/");
  //   } else if (value === 1) {
  //     navigate("/movies");
  //   } else if (value === 2) {
  //     navigate("/series");
  //   } else if (value === 3) {
  //     navigate("/search");
  //   }
  // };

  // const handleClickSearch = () => {
  //   navigate("/search");
  // };
  // const handleClickTrending = () => {
  //   navigate("/");
  // };
  // const handleClickMovies = () => {
  //   navigate("/movies");
  // };

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
