import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DetailsIcon from '@material-ui/icons/Details';

const useStyles = makeStyles((theme) => ({
  icon: {
    '& > *': {
      margin: theme.spacing(2),
    },
    color: '#233660',
    '&:hover': {
      transition: '0.3s',
      color: '#397BA6',
      backgroundColor: "transparent"
    },
    //textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const handleClick = () => {
};

export default function IconButtons() {
    const classes = useStyles();

    return (
      <IconButton
        onClick={handleClick}
        className={classes.icon}
        aria-label="to detail"
        disableRipple
      >
        <DetailsIcon style={{ fontSize: 65 }}/>
      </IconButton>
    );
}