import React, {Component, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressBook, faAlignLeft,
    faCalculator,
    faCar, faClock,
    faGlobeAsia,
    faHome,
    faPhone, faSearchLocation,
    faSwatchbook,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons/faLongArrowAltLeft";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import Select from "react-select";

class HeaderMap extends Component {
    state = {
        open: false,
        value: '',
        selectedOptionSoldier: ''
    }

    render() {

        const {selectedOptionSoldier} = this.state;
        return (
            <>

                <div className={` menu vh-100 text-right pt-2  ${!this.state.open && ' right-50'}`}>
                    <div className=" text-left">
                        <button className=" font-weight-bold text-white pl-3" onClick={() => this.setState({
                            open: false
                        })}>&#10005;
                        </button>
                    </div>
                    <ul className="p-0 list-unstyled " style={{fontFamily: 'IRANSans_light'}}>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/home" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faHome} color="#fff" className="ml-2"/> خانه</NavLink>
                        </li>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/profile" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faUser} color="#fff" className="ml-2"/>پروفایل</NavLink>
                        </li>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/active-trips" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faCar} color="#fff" className="ml-2"/>سفرهای فعال</NavLink>
                        </li>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/active-request" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faAddressBook} color="#fff" className="ml-2"/>درخواست
                                ها</NavLink>
                        </li>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/information-trips" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faSwatchbook} color="#fff" className="ml-2"/>اطلاعات
                                سفر</NavLink>
                        </li>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/accounting" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faCalculator} color="#fff" className="ml-2"/>حسابداری</NavLink>
                        </li>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/active-location" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faGlobeAsia} color="#fff" className="ml-2"/>محدوده
                                فعالیت</NavLink>
                        </li>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/active-time" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faClock} color="#fff" className="ml-2"/>زمان فعالیت</NavLink>
                        </li>
                        <li className="border-item pr-2">
                            <NavLink className="NavLink " to="/" exact activeClassName="activeLink">
                                <FontAwesomeIcon icon={faClock} color="#fff" className="ml-2"/>خروج</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="row mx-0 align-items-center">
                    <div className="col-2 text-right">
                        <div className={` ${this.props.showMenu ? '' : 'hidden'}`}>
                            <button className="font-weight-bold text-white" onClick={() => this.setState({
                                open: true
                            })}
                                    style={{fontSize: '2rem'}}><FontAwesomeIcon icon={faBars} color="#fff" size={'xs'}
                                                                                className="ml-2"/></button>

                        </div>

                    </div>

                    <div className="col-8 text-center">

                        <div className={`${this.props.showSearch ? '' : 'hidden'}`}>
                            <FontAwesomeIcon icon={faSearchLocation}
                                             color="#fff"
                                             size={'xs'}
                                             style={{
                                                 fontSize: '1.1rem',
                                                 left: '5px',
                                                 top: '6px'
                                             }}/>
                         {/*   <div className="position-relative">
                                <input type="text"
                                       className="text-right input-style-public-border"
                                       onChange={
                                           (e) => {
                                               this.props.searchInput(e.target.value)
                                           }}
                                />


                                {this.props.listSearch.length !== 0 &&
                                <select className="form-control" multiple id="sel1" name="sellist1">
                                    {
                                        this.props.listSearch.map((item, index) => {
                                            return (
                                                <option key={index}
                                                        value={item.location.center}
                                                        onClick={(e) => this.props.searchDestination(e.target.value)}
                                                >{item.name + (item.address ? '،' : '') + item.address}</option>
                                            )
                                        })
                                    }
                                </select>}
                            </div>*/}
                        </div>
                    </div>
                    <div className="col-2 text-left ">
                        <div className={`${this.props.showBack ? '' : 'hidden'}`}>
                            <button className="font-weight-bold text-white"
                                    style={{fontSize: '2rem'}}
                                    onClick={this.props.onClick}
                            ><FontAwesomeIcon icon={faLongArrowAltLeft} color="#fff" size={'xs'}/></button>

                        </div>

                    </div>
                    <div className="col-12">
                        <p
                            className={`text-white font-size-07 text-right mt-2 ${this.props.showAddress ? '' : 'hidden'}`}
                            style={{fontFamily: 'IRANSans_light'}}
                        >
                            {` ${this.props.address.city}${this.props.address.place && '،'}
                 ${this.props.address.place}${this.props.address.district && '،'}
                 ${this.props.address.district}${this.props.address.locality && '،'}
                 ${this.props.address.locality}${this.props.address.address && '،'}
                 ${this.props.address.address}`}</p>
                    </div>

                </div>
            </>
        );
    }


};

export default HeaderMap;
