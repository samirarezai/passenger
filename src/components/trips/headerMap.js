import React, {useState} from 'react';
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

const HeaderMap = (props) => {
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
                <div className="col-2 text-right">
                    <div className={` ${props.showMenu ? '' : 'hidden'}`}>
                        <button className="font-weight-bold text-white" onClick={() => setOpen(true)}
                                style={{fontSize: '2rem'}}><FontAwesomeIcon icon={faBars} color="#fff" size={'xs'}
                                                                            className="ml-2"/></button>

                    </div>

                </div>

                <div className="col-8 text-center">

                    <div className={`${props.showSearch ? '' : 'hidden'}`}>
                        <div className="position-relative">
                            <input className="bg-transparent text-white input-style-public-border pr-1"
                                   style={{
                                       fontSize: '.8rem',
                                       fontFamily: 'IRANSans_light'
                                   }}
                                   placeholder="جستجو کنید"
                                   onChange={(e)=>props.searchInput(e.target.value)}
                            />
                            <FontAwesomeIcon icon={faSearchLocation} color="#fff"
                                             size={'xs'}
                                             className="position-absolute"
                                             style={{
                                                 fontSize: '1.1rem',
                                                 left: '5px',
                                                 top: '6px'
                                             }}/>
                        </div>
                    </div>
                </div>
                <div className="col-2 text-left ">
                    <div className={`${props.showBack ? '' : 'hidden'}`}>
                        <button className="font-weight-bold text-white"
                                style={{fontSize: '2rem'}}
                                onClick={props.onClick}
                        ><FontAwesomeIcon icon={faLongArrowAltLeft} color="#fff" size={'xs'}/></button>

                    </div>

                </div>
                <div className="col-12">
                    <p
                        className={`text-white font-size-07 text-right mt-2 ${props.showAddress ? '' : 'hidden'}`}
                        style={{fontFamily: 'IRANSans_light'}}
                    >
                        {` ${props.address.city}${props.address.place && '،'}
                 ${props.address.place}${props.address.district && '،'}
                 ${props.address.district}${props.address.locality && '،'}
                 ${props.address.locality}${props.address.address && '،'}
                 ${props.address.address}`}</p>
                </div>

            </div>
        </>
    );
};

export default HeaderMap;
