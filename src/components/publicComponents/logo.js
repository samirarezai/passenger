import React, {Component} from 'react';
import logo from '../../images/ic_logo.png';

class Logo extends Component {

    render() {
        const style = {
            maxWidth: this.props.maxWidth,
            backgroundColor: this.props.backgroundColor,
        }
        return (
            <>
                <img src={logo} className={this.props.className} style={style}/>
            </>
        );
    }
}

Logo.defaultProps = {
    maxWidth: '50px',
    backgroundColor: 'transparent',
}
export default Logo;
