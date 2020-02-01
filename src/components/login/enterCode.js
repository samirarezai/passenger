import React, {Component} from 'react';
import imgWriting from "../../images/img_writing.png";
import InputMask from 'react-input-mask';
import {Redirect} from 'react-router-dom';
import HeadLogin from "../publicComponents/headLogin";
import Logo from "../publicComponents/logo";

class EnterCode extends Component {
    state = {
        goBack: false,
        goProfile: false
    }

    changeInput = (e) => {
    }
    editMobile = () => {
        this.setState({
            goBack: true
        })
    }
    sendCode = () => {
        this.setState({
            goProfile: true
        })
    }

    render() {
        if (this.state.goBack) {
            return <Redirect to="/"/>;
        }
        if (this.state.goProfile) {
            return <Redirect to="/profile"/>;
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
                            <p className="text-gray-small pt-3 pb-0 px-1">کد تایید به
                                شماره {`0098995632139`} پیامک شد.لطفا کد را وارد نمایید.</p>
                            <div className="box-btn mt-0 mb-5">
                                <button type="button" className="text-green font-size-09 font-weight-bold"
                                        onClick={this.editMobile}>اصلاح شماره
                                    همراه
                                </button>
                            </div>
                            <form action="" dir="ltr">
                                <div className="inputBox mb-4">
                                    <InputMask mask="9  9  9  9" value={this.props.value} maskChar={'━'}
                                               alwaysShowMask={true}
                                               onChange={this.changeInput}>
                                        {(props) => <input type="tel"
                                                           className="input-style text-center"
                                                           placeholder=""
                                                           onChange={props.onChange}
                                        />}
                                    </InputMask>

                                </div>
                            </form>

                        </div>
                        <div className="box-btn mt-5 mb-1">
                            <button type="button" className="btn-green" onClick={this.sendCode}>ورود</button>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default EnterCode;
