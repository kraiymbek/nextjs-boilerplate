import React from 'react';

import { Box, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const HomeLayout = () => {
    const classes = useStyles();

    return <Box className={classes.root}>
        HomeLayout
    </Box>;
};

export default HomeLayout;