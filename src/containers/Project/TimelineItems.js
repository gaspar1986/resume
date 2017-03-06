import React,{Component} from 'react';
import {Timeline} from 'antd';

const TimeLineItem = (props) => {
    let {id,name,html_url,description} = props;
    return(
        <Timeline.Item>
            <div className="project-item">
                <div className="item-title">
                    {name}
                    <a href={html_url} target="_blank" className="item-link">
                        <i className="iconfont icon-link">源代码</i>
                    </a>
                </div>
                <dic className="item-info">
                    <div className="item-desc">{description}</div>
                </dic>
            </div>
        </Timeline.Item>
    )
}
export default TimeLineItem;