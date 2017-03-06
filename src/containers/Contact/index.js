import React,{Component} from 'react';
import './index.css';
import {Modal} from 'antd';
import srcPath from '../../assets/images/personal.png';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            img:''
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.showModal = this.showModal.bind(this);
    }
    handleCancel(e){
        this.setState({
            visible:false
        })
    }
    showModal(e){
        this.setState({
            visible:true,
            img:e.currentTarget.getAttribute('data-src')
        })
    }
    render(){
        return(
            <div className="contact">
                <h1 className="contact-title">联系方式</h1>
                <div className="contact-content">
                    <div className="contact-main">
                        <div className="main-item" data-src = {srcPath} onClick={this.showModal}>
                            <div className="contact-icon">
                                <i className="iconfont icon-weixin"></i>
                                <div className="item-content">微信：gaspar1986</div>
                            </div>
                        </div>
                        <div className="main-item" onClick={this.showModal}>
                            <div className="contact-icon">
                                <i className="iconfont icon-qq"></i>
                                <div className="item-content">QQ:491028246@qq.com</div>
                            </div>
                        </div>
                    </div>
                    <Modal  footer={null} visible={this.state.visible} onCancel={this.handleCancel}>
                        <div style={{width:'100%',textAlign:'center'}}> <img style={{maxWidth:'100%'}} src={this.state.img} alt=""/></div>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default Contact;