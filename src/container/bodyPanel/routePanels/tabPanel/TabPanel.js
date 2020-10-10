import React from 'react';
import PropTypes from 'prop-types';
import './TabPanel.css'

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`} {...other} className="tabPanel" >
      {value === index && (
          <React.Fragment>{children}</React.Fragment>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};