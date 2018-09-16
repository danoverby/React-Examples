import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,

  },
  customWidth: {
    maxWidth: 300,
    fontSize: '14px',
    border: 'solid 2px #fbee00',
    backgroundImage: 'linear-gradient(#b2a600, yellow)',
   opacity: ".25"
  },
});

const longText = `
Warning: Current price is not the default preference price
`;

function VariableWidth({ classes }) {
  return (
    <div>
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }} >
        <Button className={classes.button}>Custom Width [500px]</Button>
      </Tooltip>
    </div>
  );
}

VariableWidth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VariableWidth);
