import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPhone, faSwatchbook, faTimes} from "@fortawesome/free-solid-svg-icons";
import carEco from '../../images/ic_car_eco.png';
import carMinibus from '../../images/ic_car_minibus.png';
import carBus from '../../images/ic_car_bus.png';
import carVan from '../../images/ic_car_van.png';
import {NavLink} from "react-router-dom";
import {faMale} from "@fortawesome/free-solid-svg-icons/faMale";
import ButtonCar from "./buttonCar";

class AddTrip extends Component {
    state = {
        bottom: '-40vh',
        showRow: false,
        typeOfCar:'1'
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
    typeCar = (e) => {

        this.setState({
            typeOfCar:e.currentTarget.value
        })
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
                        <div className="row my-2 ">
                            <div className="col-6 text-right text-gold ">
                                <div className="text-center mb-1 text-white font-size-08"><label
                                    className="radio-inline">دربست</label></div>
                                <div className="text-center">
                                    <input type="radio" name="optradio"/>
                                </div>
                            </div>
                            <div className="col-6 text-left ">
                                <div className="text-center mb-1 text-white font-size-08"><label
                                    className="radio-inline">اشتراکی</label></div>
                                <div className="text-center">
                                    <input type="radio" name="optradio" defaultChecked={true}/>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="row">
                                    <div className="col-3 text-center px-0">
                                    <ButtonCar typeCar={this.typeCar} typeOfCar={this.state.typeOfCar} value="1"
                                               image="ic_car_eco.png" numPsng="4" name="اقتصادی"/>
                                </div>
                                    <div className="col-3 text-center px-0">
                                        <ButtonCar typeCar={this.typeCar} typeOfCar={this.state.typeOfCar} value="2"
                                                   image="ic_car_van.png" numPsng="8" name="ون"/>
                                    </div>
                                    <div className="col-3 text-center px-0">
                                        <ButtonCar typeCar={this.typeCar} typeOfCar={this.state.typeOfCar} value="3"
                                                   image="ic_car_minibus.png" numPsng="10" name="مینی بوس"/>
                                    </div>
                                    <div className="col-3 text-center px-0">
                                        <ButtonCar typeCar={this.typeCar} typeOfCar={this.state.typeOfCar}   value="4"
                                                   image="ic_car_bus.png" numPsng="15" name="اتوبوس"/>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="row mt-1 pt-2" dir="rtl " style={{height: '40vh'}}>
                            <div className="col-12 ">
                                   <button className="w-100 text-gold font-size-08 text-right">
                                       <span>افزودن زمان جدید</span>
                                       <span> + </span>
                                   </button>
                            </div>
                        </div>


                    </div>
                </div>
            </>
        );
    }
}

export default AddTrip;
