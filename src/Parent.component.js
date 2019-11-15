import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class ParentComponent extends Component {

    componentDidMount() {
        
        this.props.history.listen((location,action) => {
            console.log(action);
            window.parent.$('body').trigger('routeChange',location);
            console.log(location.pathname);
        });

        if(window.addEventListener){
            window.addEventListener('message',(msg) => {
                console.log(msg.data);
                this.props.history.push(`${msg.data.url}`)
            })
        }

        window.parent.$('body').trigger('readyState');

    }
    render() {
        return(
            <div>
             {this.props.children}
            </div>
        )
    }
}
// const ParentComponent = ({children}) => {
//     <div>
//         {children}
//     </div>
// };

export default withRouter(ParentComponent);