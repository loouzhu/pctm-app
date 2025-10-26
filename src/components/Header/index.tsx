import React, { Component } from 'react'
import {Menu} from "antd"
import {Switch} from 'antd'
import {QuestionCircleOutlined,ApartmentOutlined,UserOutlined} from '@ant-design/icons'
import './header.css'

// 顶部左侧导航栏内容
const navItemsL = ['页面1','页面2','页面3']
const itemsL= navItemsL.map((item,index) => ({
  key:String(index+1),
  label:item,
}));
// 顶部右侧导航栏内容
const navItemsR = [QuestionCircleOutlined,ApartmentOutlined,UserOutlined]
const itemsR = navItemsR.map((Item,index)=>({
  key:String(index+1),
  label:<Item style={{fontSize:'1.168rem'}}/>,
}));

// 修改主题颜色


export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="demo-logo" />
        <div className="menus" style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
          {/* 左侧导航栏 */}
          <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={itemsL}
          style={{minWidth: 0,alignItems:'center',padding:'1em'}}
          />
          {/* 切换日间/夜间模式 */}
          <Switch 
          checkedChildren="日间" 
          unCheckedChildren="夜间" 
          defaultChecked style={{height:'100%',alignSelf:'center'}}
          />
          {/* 右侧导航栏 */}
          <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={itemsR}
          style={{ flex: 1, minWidth: 0,alignItems:'center',padding:'1em',justifyContent:'right'}}
          />
        </div>
      </header>
    )
  }
}
