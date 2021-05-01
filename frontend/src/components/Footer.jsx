import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const hStyle = { color: 'black' };
  return (
    <footer >
      <p style={hStyle}>ⓒ {year} Krunal Shastri</p>
    </footer>
  );
}

export default Footer;  