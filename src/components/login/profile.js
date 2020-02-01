import React, {Component} from 'react';
import HeadLogin from "../publicComponents/headLogin";
import convertToPersianNumber from "../publicComponents/convertToPersianNumber";
import {faPhone, faSortNumericDown, faTenge, faTextWidth, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import InputNumber from "./inputNumber";
import {Redirect} from 'react-router-dom';
import Select from 'react-select';
import InputText from "./inputText";

import Telegram from '../../images/logo-app/telegram.png';
import Whatsapp from '../../images/logo-app/WhatsApp.png';
import Bale from '../../images/logo-app/bale.png';
import Ita from '../../images/logo-app/ita.png';
import Sorosh from '../../images/logo-app/sorosh.png';

class Profile extends Component {
    state = {
        selectedOptionSoldier: Soldier[0],
        goCarInfo: false
    };
    submitForm = (e) => {
        e.preventDefault();
        /* console.log(this.nameInput.value)*/
        this.setState({
            goCarInfo: true
        })
    }


    handleChangeSoldier = selectedOptionSoldier => {
        this.setState(
            {selectedOptionSoldier},
            () => console.log(`Option selected:`, this.state.selectedOptionSoldier)
        );
    }

    render() {
        const {selectedOptionSoldier} = this.state;
        if (this.state.goCarInfo) {
            return <Redirect to='/car-info'/>
        }

        return (
            <>
                <div
                    className="container-fluid bgGreen p-0 vh-100 d-flex flex-column align-items-center justify-content-between text-center overflow-hidden">

                    <HeadLogin className="py-3">
                        <p className="text-head-white m-0">مشخصات شخصی</p>
                    </HeadLogin>
                    <div
                        className=" flex-grow-1 bg-white d-flex flex-column  w-100  border-radius-top-right overflow">
                        <div className="container box-content  pt-3">

                            <form action="" onSubmit={this.submitForm}>
                                <InputText placeholder="علی" label="نام"/>
                                <InputText placeholder="محمدی" label="نام خانوادگی"/>
                                <div className="inputBox position-relative mb-4">
                                    <div className="text-right">
                                        <label htmlFor="" className="text-gray-small ">موبایل</label>
                                    </div>
                                    <input
                                        type="tel"
                                        className="input-style-public text-black-50"
                                        placeholder="شماره همراه خود را وارد کنید"
                                        onChange={this.onChangeInputNumber}
                                        ref={t => this.mobile = t}
                                        disabled={true}
                                        value={`${'09195632139'}`}
                                    />
                                    <div className="iconInput-public">
                                        <FontAwesomeIcon icon={faPhone} rotation={90} color="#79847f"/>
                                    </div>
                                </div>
                                <div className="inputBox position-relative mb-4 text-right">
                                    <div className="text-right">
                                        <label htmlFor="" className="text-gray-small ">آیدی شبکه های اجتماعی</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <input type="text" className="input-style-public text-dark"/>
                                        </div>
                                        <div className="col-4">
                                            <Select className="text-right "
                                                    value={selectedOptionSoldier}
                                                    onChange={this.handleChangeSoldier}
                                                    options={Soldier}
                                                    isSearchable={false}
                                            />
                                        </div>


                                    </div>

                                </div>

                                <div className="inputBox position-relative mb-4">

                                    <div className="text-right mb-4">
                                        <label htmlFor="" className="text-gray-small "> جنسیت </label>
                                        <div className="d-inline-block pr-5">
                                            <input className="" type="radio"
                                                   name="genderRadioOptions" checked value="MALE"/>
                                            <label className=" pr-2">آقا</label>
                                        </div>
                                        <div className="d-inline-block pr-5">
                                            <input type="radio"
                                                   name="genderRadioOptions" value="FEMALE"/>
                                            <label className=" pr-2">خانوم</label>
                                        </div>
                                    </div>

                                </div>
                                <p className="text-gray-small font-size-07 pt-4 mb-0">شناسه کاربری شبکه های اجتماعی شما به منظور ارسال پیام های تایید سفر و
                                    لغو سفر می باشد</p>
                                <div className="box-btn mt-2 mb-1">
                                    <button type="submit" className="btn-green">ادامه</button>
                                </div>


                            </form>
                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default Profile;
const Soldier = [
    {
        value: '001',
        label: <p><img src={Telegram} className="img-logo-messenger" alt=""/><span className="opacity-0">ا </span></p>
    },
    {
        value: '002',
        label: <p><img src={Whatsapp} className="img-logo-messenger" alt=""/><span className="opacity-0"> ا </span></p>
    },
    {
        value: '003',
        label: <p><img src={Bale} className="img-logo-messenger" alt=""/><span className="opacity-0"> ا </span></p>
    },
    {
        value: '004',
        label: <p><img src={Ita} className="img-logo-messenger" alt=""/><span className="opacity-0"> ا </span></p>
    },
    {
        value: '005',
        label: <p><img src={Sorosh} className="img-logo-messenger" alt=""/><span className="opacity-0"> ا </span></p>
    },

];
