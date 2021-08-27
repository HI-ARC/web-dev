import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import IconButton from '@material-ui/core/IconButton';
import DetailsRoundedIcon from '@material-ui/icons/DetailsRounded';

const useStyles = makeStyles((theme) => ({
  icon: {
    '& > *': {
      margin: theme.spacing(3),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px"
    },
    color: '#233660',
    '&:hover': {
      transition: '0.3s',
      color: '#397BA6',
      backgroundColor: "transparent"
    },
  },
}));

const Hidden = styled.p`
  display: none;
  @media (max-width: 450px) {
    display: block;
  }
`;

const Shown = styled.p`
  display: block;
  @media (max-width: 450px) {
    display: none;
  }
`;

export default function IconButtons({ onClick }: {onClick:any}) {
    const classes = useStyles();

    return (
      <IconButton
        onClick={onClick}
        className={classes.icon}
        aria-label="to detail"
        disableRipple
      >
        <Hidden>
          <DetailsRoundedIcon style={{ fontSize: 55 }} />
        </Hidden>
        <Shown>
          <DetailsRoundedIcon style={{ fontSize: 65 }} />
        </Shown>
      </IconButton>
    );
}