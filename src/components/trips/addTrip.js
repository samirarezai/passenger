import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPhone} from "@fortawesome/free-solid-svg-icons";

class AddTrip extends Component {
    state={
        bottom: '-40vh',
        showRow: false,
    }
    showInfo = () => {
        this.setState({
            showRow: !this.state.showRow,

        });

        if (!this.state.showRow) {
            this.setState({
                bottom: '0'
            })
        } else {
            this.setState({
                bottom: '-40vh'
            })
        }
    };
    render() {
        return (
            <>
                <div className="mapText position-absolute bgGreen text-center p-1 w-100 px-4"
                     style={{
                         fontFamily: 'IRANSans_light',
                         bottom: this.state.bottom,
                         right: 0,
                         zIndex: 97,
                         transition: 'all .3s'
                     }}>
                    <button className="border-radius-10 "
                            style={{backgroundColor: '#fff', width: '40px', minHeight: '6px'}}
                            onClick={this.showInfo}>
                    </button>
                    <div className="container ">
                        <div className="row my-3">
                            <div className="col-6 text-left ">
                                <button className="text-white border border-radius-10">مسیریابی</button>
                            </div>
                            <div className="col-6 text-right text-gold ">
                                    <span>
                                        <span className="float-right font-size-09">   750 </span>
                                        <span className="font-size-07">   تومان </span>

                                    </span>
                            </div>

                        </div>
                        <div className="row mt-1 pt-2" dir="rtl " style={{height: '40vh'}}>


                            <div className="col-12 ">
                                <div className="row">
                                    <div className="col-6 text-left">
                                        <button className="border border-radius-10 mx-3"><FontAwesomeIcon
                                            icon={faCheck} color="#E3CA92" size="1x"/></button>
                                        <button className="border border-radius-10"><FontAwesomeIcon
                                            icon={faPhone}
                                            color="#fff"
                                            size="1x"
                                            rotation={90}/>
                                        </button>

                                    </div>
                                    <div className="col-6"><p
                                        className="text-gold font-size-07 text-right mb-2 "> اسامی
                                        مسافران</p>
                                    </div>

                                    <div className="col-6">
                                        <p className="text-white font-size-07 text-right">محمد امین
                                            قاسمی</p>
                                    </div>
                                    <div className="col-6">
                                        <p className="text-white font-size-07 text-right">رضا عبدی</p>
                                    </div>
                                    <div className="col-6">
                                        <p className="text-white font-size-07 text-right">رضا عبدی</p>
                                    </div>
                                    <div className="col-6">
                                        <p className="text-white font-size-07 text-right">رضا عبدی</p>
                                    </div>


                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </>
        );
    }
}

export default AddTrip;
