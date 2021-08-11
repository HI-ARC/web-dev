import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DetailsIcon from '@material-ui/icons/Details';

const useStyles = makeStyles((theme) => ({
  icon: {
    '& > *': {
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    color: '#233660',
    '&:hover': {
      transition: '0.3s',
      color: '#397BA6',
      backgroundColor: "transparent"
    },
  },
}));

export default function IconButtons({ onClick }: {onClick:any}) {
    const classes = useStyles();

    return (
      <IconButton
        onClick={onClick}
        className={classes.icon}
        aria-label="to detail"
        disableRipple
      >
        <DetailsIcon style={{ fontSize: 65 }}/>
      </IconButton>
    );
}