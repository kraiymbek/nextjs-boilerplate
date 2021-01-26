import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Box, makeStyles } from "@material-ui/core";
import Footer from "./Footer/Footer";
import { getCount } from "../../redux/reducers/homeReducer";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    header: {
        height: 150,
        border: '1px solid green',
    },
    content: {
        height: 300,
        border: '1px solid yellow',
    },
}));

const MainLayout = () => {
    const classes = useStyles();
    const getCounter = useSelector(getCount);
    const dispatch = useDispatch();

    // пример использования dispatch
    // -> dispatch(setCount(2))

    return <Box className={classes.root}>
        <Box className={classes.header}>Header</Box>
        <Box className={classes.content}>Content</Box>
        <Footer />
    </Box>;
};

export default MainLayout;