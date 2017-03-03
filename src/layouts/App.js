import React,{Component} from 'react';
import NavMenu from './NavMenu';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapse:true
        }
    }
    render(){
        const collapse = this.state.collapse;
        return(
            <div style={{"paddingLeft":150}}>
                <NavMenu collapse="{collapse}"/>
                <div className= {collapse ? "main main-collapse" :"main"}>
                    <ReactCSSTransitionGroup
                        transitionName="transitionWrapper"
                        component="div"
                        className="transitionWrapper"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        <div key={this.props.location.pathname}
                             style={{ position: "absolute", width: "100%" }}>
                            {
                                // 这里就是主界面展示区域
                                this.props.children
                            }
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}
export default App;