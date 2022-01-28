import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Page from "./Page";


function SideNavigation() {
  const [collapsed, setCollapsed] = useState(false);
  const [Display, setDisplay] = useState(0);


  // added styles 
  const styles = {
    sideBarHeight: {
      height: "88.7vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />} onClick={() => { setDisplay(0) }}>Page 1</MenuItem>
        {/* <div>
          {
            Display === 0 ?
              <Page /> : Display === 1}
        </div> */}
        <SubMenu title="Menu 1" icon={<FaHeart />}>
          <MenuItem>Sub Menu 1</MenuItem>
          <MenuItem>Sub Menu 2</MenuItem>
          <MenuItem>Sub Menu 3</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
  return (
    <>
      {
        Display === 0 ? <Page />
          : Display === 1
      }
    </>
  )
}

export default SideNavigation;