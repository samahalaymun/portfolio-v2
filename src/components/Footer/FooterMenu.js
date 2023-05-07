import React from "react";

const FooterMenu = ({menu}) => {
  return (
    <ul className="footer-menu">
        {menu.map((item)=>{
            return (
              <li className="footer-menu-link">
                <a href={`#${item}`}>{item}</a>
              </li>
            );
        })}
    </ul>
  );
};

export default FooterMenu;
