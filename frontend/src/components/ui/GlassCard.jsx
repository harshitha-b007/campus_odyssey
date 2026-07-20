import React from 'react';
import PropTypes from 'prop-types';

/**
 * GlassCard - The primary container component for the design system.
 * Optimized for performance and semantic flexibility.
 */
export const GlassCard = React.memo(({ 
  children, 
  className = "", 
  as: Component = "div", 
  ...props 
}) => {
  return (
    <Component 
      className={`bg-white/80 backdrop-blur-md border border-[#0F172A]/5 rounded-3xl shadow-sm ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

GlassCard.displayName = "GlassCard";

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
};