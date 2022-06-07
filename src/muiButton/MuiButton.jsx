import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './muiButton.css';

function MuiButton (props) {
  const { str, label } = props;

  return (
      <Button variant="contained" sx={
        {
          backgroundColor: '#D62828',
          '&:hover': {
            backgroundColor: '#003049',
          },
          margin: '16px',
        }
      }>
        <Link to={str} className="muibutton__link">
          {label}
        </Link>
      </Button>
  )
}
export default MuiButton;