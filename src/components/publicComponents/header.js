import React, {useState} from 'react';
import Logo from "./logo";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faCalculator,
    faCar, faClock,
    faGlobeAsia,
    faHome,
    faPhone,
    faSwatchbook,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons/faLongArrowAltLeft";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

const Header = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <>

            <div className={` menu vh-100 text-right pt-2  ${!open && ' right-50'}`}>
                <div className=" text-left">
                    <button className=" font-weight-bold text-white pl-3" onClick={() => setOpen(false)}>&#10005;
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
                            <FontAwesomeIcon icon={faAddressBook} color="#fff" className="ml-2"/>درخواست ها</NavLink>
                    </li>
                    <li className="border-item pr-2">
                        <NavLink className="NavLink " to="/information-trips" exact activeClassName="activeLink">
                            <FontAwesomeIcon icon={faSwatchbook} color="#fff" className="ml-2"/>اطلاعات سفر</NavLink>
                    </li>
                    <li className="border-item pr-2">
                        <NavLink className="NavLink " to="/accounting" exact activeClassName="activeLink">
                            <FontAwesomeIcon icon={faCalculator} color="#fff" className="ml-2"/>حسابداری</NavLink>
                    </li>
                    <li className="border-item pr-2">
                        <NavLink className="NavLink " to="/active-location" exact activeClassName="activeLink">
                            <FontAwesomeIcon icon={faGlobeAsia} color="#fff" className="ml-2"/>محدوده فعالیت</NavLink>
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
            <div className="row pt-2 mx-0 align-items-center">
                <div className="col-4 text-right">
                    <div className={` ${props.showMenu ? '' : 'hidden'}`}>
                        <button className="font-weight-bold text-white" onClick={() => setOpen(true)}
                                style={{fontSize: '2rem'}}><FontAwesomeIcon icon={faBars} color="#fff" size={'xs'} className="ml-2"/></button>

                    </div>

                </div>

                <div className="col-4 text-center">

                    <Logo className={`${props.showLogo ? '' : 'hidden'}`} maxWidth="28px"/>

                </div>
                <div className="col-4 text-left ">
                    <div className={`${props.showBack ? '' : 'hidden'}`}>
                        <NavLink className="font-weight-bold text-white"
                                 style={{fontSize: '2rem'}}
                                 to={props.urlBack ? props.urlBack : '*'}
                                 exact> &#8592;</NavLink>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Header;
