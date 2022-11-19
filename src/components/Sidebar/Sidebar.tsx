import React, { useState } from 'react'
import './style.css'
import Logo from '../../imgs/logo.png'
import {SidebarData} from "../../Data/Data";
import {BiLogOutCircle} from "react-icons/bi";


const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    return (
      <div className="Sidebar">
        {/*logo*/}
        <div className="logo">
          <img src={Logo} alt=""/>
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        <div className="menu">
            {SidebarData.map((item,idx) =>(
                <div key={idx} className={selected === idx ? 'menuItem active':'menuItem'}
                    onClick={()=>setSelected(idx)}
                >
                    <div className={'mdSize'}>
                        <item.icon/>
                    </div>
                    <span>{item.heading}</span>
                </div>
            ))}
            <div className={'menuItem'}
            >
                <div className={'mdSize'}>
                    <BiLogOutCircle/>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Sidebar