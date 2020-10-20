import React from 'react';
import './GeneralTab.css';

export default function GeneralTab({ children, id }) {
  return (
    <div className="generalTab" id={id}>
      {children}
    </div>
  );
}
