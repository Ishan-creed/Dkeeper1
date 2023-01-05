import React, { useState } from 'react';


function Header(){

    const [isClick,setClick] = useState(false);

    function handleClick(){
        setClick(true);
    }

    return  <div className='header' onClick={handleClick} style = {{backgroundColor: isClick? "#DB1F48" : "#000C66"}}><h1>Keeper</h1></div>
    
}

export default Header;