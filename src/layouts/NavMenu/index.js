import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import {Link} from 'react-router';
import './index.css';
class NavMenu extends Component{

    getMenuItems(data){
        const {collapse} = this.props;
        return data.map((info)=>(
            <Menu.Item key={info.name}>
                <Link to={info.name == 'home' ? '/' : `/${info.name}`}>
                    <i className={info.name == 'home' ? 'iconfont icon-index':`iconfont icon-${info.name}`}></i>
                    {collapse?"":<span className="nav-text">{info.desc}</span>}
                </Link>
            </Menu.Item>
        ))
    }
    render(){
        const data = [
            {name:'home',desc:'首页'},
            {name:'about',desc:'关于我'},
            {name:'skill',desc:'专业技能'},
            {name:'project',desc:'项目经验'},
            {name:'contact',desc:'联系我'},

        ]
        const {collapse,handleCollapse} = this.props;
        return(
            <aside className={collapse?"layout-aside layout-aside-collapse":"layout-aside"}>
                <div className={collapse?"layout-logo layout-logo-collapse":"layout-logo"}>
                    <i className="iconfont icon-jianli logo"></i>
                    {collapse?"": <span className="title-text">田永刚</span>}
                </div>
                <Menu mode="inline" theme="dark" defaultSelectedKeys={['home']}>
                    {this.getMenuItems(data)}
                </Menu>
                <div className="aside-action" onClick={handleCollapse}>
                    {collapse?<Icon type="right"/>:<Icon type="left"/>}
                </div>
            </aside>
        )
    }
}
export default NavMenu;