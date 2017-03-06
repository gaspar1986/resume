import React,{Component} from 'react';
import {Timeline} from 'antd';
import TimelineItem from './TimelineItems';
import {fetchRepos} from '../../api/fetchGithub';
import './index.css';
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            repos:[]
        }
    }
    componentWillMount(){
        fetchRepos('gaspar1986').then(info=>{
            this.setState({
                repos:info.data
            })
        })
    }
    render(){
        return(
            <div className="project">
                <div className="project-title">我的项目经验</div>
                <div className="project-content">
                    <Timeline pending={<a href="https://github.com/gaspar1986">我的Gighub的主页!</a>}>
                        {this.state.repos.map(msg=>{
                            let {id,name,html_url,description} = msg;
                            return (<TimelineItem key={id} name={name} html_url={html_url} description={description}/>)
                        })}
                        <TimelineItem />
                    </Timeline>
                </div>
            </div>
        )
    }
}
export default Project;