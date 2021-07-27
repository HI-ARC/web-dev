//------TOP 버튼 구현--------//
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  toTop: {
    zIndex: 2,
    position: 'fixed',
    bottom: '2vh',
    backgroundColor: '#DCDCDC',
    color: 'black',
    '&:hover, &.Mui-focusVisible': {
      transition: '0.3s',
      color: '#397BA6',
      backgroundColor: '#DCDCDC',
    },
    [theme.breakpoints.up('xs')]: {
      right: '2%',
      backgroundColor: 'rgb(220,220,220,0.7)',
    },
    [theme.breakpoints.up('lg')]: {
      right: '2.5%',
    },
  },
}));

const BackButton = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div>
      {
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="star"
          component="span"
        >
          <ArrowBackIcon />
        </IconButton>
      }
    </div>
  );
};
export default BackButton;
