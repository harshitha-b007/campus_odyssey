import React from 'react';
import PropTypes from 'prop-types';

export const Badge = ({ children, className = "" }) => (
  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FBBF24]/20 text-[#064E3B] ${className}`}>
    {children}
  </span>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};