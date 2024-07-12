import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menu, setMenu] = useState("");
  const menuItems = [{name:"shop",link: "/"}, {name: "mens",link:"/mens"},{name: "womens",link:"/womens"},{name: "kids",link:"/kids"}];

  return (
    <ul className='flex justify-between w-6/12 font-poppins'>
      {menuItems.map((item) => (
        <Link key={item.name} to={item.link}><li  onClick={() => setMenu(item.name)} className='cursor-pointer'>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          {menu === item.name && <hr />}
        </li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
