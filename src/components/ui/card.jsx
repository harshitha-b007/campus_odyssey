import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-3xl border border-[#0F172A]/5 p-6 shadow-sm ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};