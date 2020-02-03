import React, {Component} from 'react';
import carEco from "../../images/ic_car_eco.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMale} from "@fortawesome/free-solid-svg-icons/faMale";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

class ButtonCar extends Component {
    render() {
     /*   console.log(this.props.typeOfCar)
        console.log(this.props.value)
        console.log(this.props.typeOfCar === this.props.value)*/
        return (
            <>
                <button
                    className={`bg-white  mr-1 transition border-car-transparent  ${(this.props.typeOfCar === this.props.value) && 'border-car-gold'} border-radius-10`}
                    value={this.props.value}
                    name="buttonCar"
                    onClick={(e) => this.props.typeCar(e)}>
                    <p className="text-dark">{this.props.name}</p>
                    <img src={require(`../../images/${this.props.image}`)} className="max-width-icon-car img-fluid"
                         alt=""/>
                    <p className="text-dark font-size-07">
                        <FontAwesomeIcon icon={faMale} color="#000" className="m-0"/>
                        <span><FontAwesomeIcon icon={faTimes} color="#000"
                                               className="mx-2"/></span>
                        <span>{this.props.numPsng}</span>
                    </p>
                </button>
            </>
        );
    }
}

export default ButtonCar;
