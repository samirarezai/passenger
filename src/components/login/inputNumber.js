import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortNumericUp} from "@fortawesome/free-solid-svg-icons/faSortNumericUp";


class InputNumber extends Component {
    onChangeInputNumber = (e) => {
        console.log(this.nameInput.value)
    }

    render() {
        return (
            <>
                <div className="inputBox position-relative mb-4">
                    <div className="text-right">
                        <label htmlFor=""
                               className="text-gray-small">{this.props.label}</label>
                    </div>
                    <InputMask mask={this.props.pattern}
                               maskChar={null}
                               onChange={this.onChangeInputNumber}>
                        {(props) => <input type="tel"
                                           className="input-style-public"
                                           placeholder={` مثال :  ${this.props.placeholder}`}
                                           onChange={props.onChange}
                                           ref={t => this.nameInput = t}/>
                        }
                    </InputMask>
                    <div className="iconInput-public">
                        <FontAwesomeIcon icon={faSortNumericUp} color="#79847f"/>
                    </div>

                </div>
            </>
        );
    }


};

export default InputNumber;
