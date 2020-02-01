import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTenge} from "@fortawesome/free-solid-svg-icons";

class InputText extends Component {
    render() {
        return (
            <>
                <div className="inputBox position-relative mb-4">
                    <div className="text-right">
                        <label htmlFor="" className="text-gray-small ">{this.props.label}</label>
                    </div>
                    <input type="text"
                           className="input-style-public"
                           placeholder={` مثال : ${this.props.placeholder}`}
                           ref={t => this.nameInput = t}
                    />
                    <div className="iconInput-public">
                        <FontAwesomeIcon icon={faTenge} color="#79847f"/>
                    </div>
                </div>
            </>
        );
    }
}

export default InputText;
