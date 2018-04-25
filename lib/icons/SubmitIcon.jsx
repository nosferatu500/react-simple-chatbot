import React from 'react';
import PropTypes from 'prop-types';

const SubmitIcon = props => (
  <svg width={26} height={26} viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
    <g id="Canvas" fill="none">
      <g id="enter icon">
        <g id="Oval" opacity="0.3">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M 13 25.5C 19.9036 25.5 25.5 19.9036 25.5 13C 25.5 6.09644 19.9036 0.5 13 0.5C 6.09644 0.5 0.5 6.09644 0.5 13C 0.5 19.9036 6.09644 25.5 13 25.5Z" stroke-miterlimit="8" stroke="#4B40B0" />
        </g>
        <g id="Shape">
          <path d="M 10.944 0.0400825C 10.895 -0.00210319 10.8253 -0.0118905 10.7663 0.0150166L 0.0951457 4.88517C 0.0376959 4.9114 0.000700403 4.9677 9.82071e-06 5.02991C -0.000680761 5.09212 0.035098 5.1492 0.0919888 5.17662C 0.0919888 5.17662 3.74638 6.95381 3.75 7L 4.0974 9.85086C 4.1025 9.91592 4.14689 9.97154 4.21 9.99192C 4.22687 9.99735 4.2442 10 4.26133 10C 4.30832 10 4.35403 9.9802 4.38583 9.94402L 5.98871 8.11957L 7.97018 9.04953C 8.0132 9.06972 8.06298 9.07056 8.10669 9.05189C 8.15039 9.03319 8.18367 8.99681 8.19794 8.95217L 10.9924 0.209891C 11.012 0.148841 10.9929 0.0822681 10.944 0.0400825Z" transform="translate(7 8)" stroke="#3D389E" />
        </g>
        <g id="Line 2">
          <path d="M 0 3.5L 3.5 0" stroke-linecap="round" stroke-linejoin="round" transform="translate(11 11.5)" stroke="#3D389E" />
        </g>
      </g>
    </g>
  </svg>
);

SubmitIcon.propTypes = {
  size: PropTypes.number,
};

SubmitIcon.defaultProps = {
  size: 20,
};

export default SubmitIcon;
