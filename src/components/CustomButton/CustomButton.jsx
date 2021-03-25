import React from 'react';
import Button from '@material-ui/core/Button';

const ContainedButtons = ({btnName, handleClick, isDisabled}) => {
  return (
    <Button variant="contained" color="primary" onClick={handleClick} disabled={isDisabled}>
      {btnName}
    </Button>
  );
}

export { ContainedButtons as CustomButton }