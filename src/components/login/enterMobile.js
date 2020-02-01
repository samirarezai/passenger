import React, {Component} from 'react';
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import imgWriting from '../../images/img_writing.png'
import InputMask from 'react-input-mask';
import {Redirect} from 'react-router-dom';
import HeadLogin from "../publicComponents/headLogin";
import Logo from "../publicComponents/logo";
class EnterMobile extends Component {
    state = {
        goNext:false ,
    }
    changeInput = (e) => {
    }
    sendMobile = () => {
        this.setState({
            goNext: true
        })
    }

    render() {
        if(this.state.goNext){
            return <Redirect to="/enter-code"/>;
        }
        return (
            <>
                <div
                    className="container-fluid bgGreen p-0 vh-100 d-flex flex-column align-items-center justify-content-between text-center">

                    <HeadLogin className="py-5">
                        <Logo maxWidth='90px'/>
                    </HeadLogin>
                    <div
                        className=" flex-grow-1 bg-white d-flex flex-column justify-content-around w-100  border-radius-top-right">


                        <div className="box-content">
                            <div className="text-center pt-1">
                                <img src={imgWriting} alt="" style={{maxWidth: '70px'}}/>
                            </div>
                            <p className="text-gray-head pt-3 pb-4">ورود با شماره تلفن</p>
                            <form action="">
                                <div className="inputBox position-relative mb-4">
                                    <InputMask mask="99999999999" value={this.props.value} maskChar={null}
                                               onChange={this.changeInput}>
                                        {(props) => <input type="tel"
                                                           className="input-style text-center"
                                                           placeholder="شماره همراه خود را وارد کنید"
                                                           onChange={props.onChange}/>
                                        }
                                    </InputMask>
                                    <div className="iconInput">
                                        <FontAwesomeIcon icon={faPhone} rotation={90} color="#79847f"/>
                                    </div>

                                </div>
                            </form>

                        </div>
                        <div className="box-btn mt-5 mb-1">
                            <button type="button" className="btn-green" onClick={this.sendMobile}>ورود</button>
                        </div>
                    </div>

                </div>


            </>
        );
    }
}

export default EnterMobile;
