import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({side}) => {
  const [menu, setMenu] = useState("");
  const menuItems = [{name:"shop",link: "/"}, {name: "mens",link:"/mens"},{name: "womens",link:"/womens"},{name: "kids",link:"/kids"}];
  
  if(side=='flex-col'){side='flex-col gap-5 w-full items-center justify-around h-[400px]';}
  else{side='justify-between'}
  console.log(side);
  return (
    <ul className={`flex ${side}   font-poppins`}>
      {menuItems.map((item) => (
        <Link key={item.name} to={item.link}>
          <li  onClick={() => setMenu(item.name)} className={`cursor-pointer`}>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          {menu === item.name && <hr />}
        </li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
