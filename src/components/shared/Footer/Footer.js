import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Box } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from "./Footer.style";

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const router = useRouter();


    return (
        <Box className={classes.root}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    switch (newValue) {
                        case 0:
                            router.push('/');
                            break;
                        case 1:
                            router.push('/fav');
                            break;
                        case 2:
                            router.push('/cart');
                            break;
                        default:
                            router.push('/');
                    }
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Cart" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Box>
    );
}