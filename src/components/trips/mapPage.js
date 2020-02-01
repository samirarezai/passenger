import React, {Component} from 'react';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import './map.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faMapMarker, faPhone
} from "@fortawesome/free-solid-svg-icons";
import HeaderMap from "./headerMap";

class MapPage extends Component {
    state = {
        lng: 51.40994892679396,
        lat: 35.757528622282436,
        geocoder: null,
        showRow: false,
        addDestination: false,
        showContent: false,
        bottom: '-40vh'
    };
    showInfo = () => {
        this.setState({
            showRow: !this.state.showRow,

        })

        if (!this.state.showRow) {
            this.setState({
                bottom: '0'
            })
        } else {
            this.setState({
                bottom: '-40vh'
            })
        }
    }

    render() {
        const cedarMaps = require('@cedarstudios/cedarmaps');
        const client = cedarMaps('2e6f3b1a94fd3ae41bda2d1ac5cee21af542c0c2');
        if(this.state.geocoder===null){
        client.reverseGeocoding([this.state.lat, this.state.lng], {verbosity: true}, (err, res) => {

            let geocoder = {
                lng: this.state.lng,
                lat: this.state.lat,
                address: res.address,
                locality: res.locality,
                district: res.district,
                place: res.place,
                city: res.city,
                province: res.province,
                country: res.country
            };
            this.setState({
                geocoder
            });
        });}

        const {RotationControl, Popup, GeoJSONLayer, ReactMapboxGL, Cluster, ZoomControl, CenterControl, ScaleControl, Marker, Map, MapContext, L} = CedarMaps.getReactMapboxGl();

        return (
            <>
                <CedarMaps
                    containerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    token='2e6f3b1a94fd3ae41bda2d1ac5cee21af542c0c2'
                    preserveDrawingBuffer={false}
                    center={[this.state.lng, this.state.lat]}
                    onMove={(e) => {
                        this.setState({
                            lng: e.transform.center.lng,
                            lat: e.transform.center.lat
                        });


                    }}
                    onMoveEnd={
                        (e)=>{
                            console.log(e)
                            client.reverseGeocoding([this.state.lat, this.state.lng], {verbosity: true}, (err, res) => {

                                let geocoder = {
                                    lng: e.transform.center.lng,
                                    lat: e.transform.center.lat,
                                    address: res.address,
                                    locality: res.locality,
                                    district: res.district,
                                    place: res.place,
                                    city: res.city,
                                    province: res.province,
                                    country: res.country
                                };
                                if (geocoder.lng !== this.state.geocoder.lng || origin.lat !== this.state.geocoder.lat) {
                                    this.setState({
                                        geocoder
                                    });

                                }
                            })
                        }
                    }
                >

                    {/*<Popup
                        coordinates={[51.39232213228172, 35.77005206115901]}
                        offset={{
                            'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                        }}>
                        <h1>Popup</h1>
                    </Popup>*/}
                    <div className="container-fluid px-0 position-relative" dir="rtl" style={{zIndex: '100'}}>
                        <div className="bgGreen py-1">
                            <HeaderMap showLogo={true} showMenu={true} address={this.state.geocoder} className="bgGreen"/>
                        </div>


                    </div>

                    {this.state.showContent &&
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
                            <div>
                                <div>
                                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} |
                                        Zoom: {this.state.zoom}</div>
                                </div>
                                <div ref={el => this.mapContainer = el} className='mapContainer'/>
                            </div>
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
                    </div>}

                    <RotationControl/>

                    {/*    <ZoomControl/>*/}
                    {/*   <ScaleControl/>*/}
                    {!this.state.addDestination && <Marker
                        coordinates={[this.state.lng, this.state.lat]}
                        anchor="bottom"
                    >

                        <FontAwesomeIcon icon={faMapMarker} color="red" size="3x"/>
                    </Marker>

                    }
                    {!this.state.addDestination && <div className="mapText position-absolute text-center p-1 w-100 px-4"
                                                        style={{
                                                            fontFamily: 'IRANSans_light',
                                                            bottom: 0,
                                                            right: 0,
                                                            zIndex: 97,
                                                            transition: 'all .3s'
                                                        }}>
                        <div className="box-btn mt-2 mb-1">
                            <button type="button" className="bgGreen border-radius-100 font-size-1 text-white px-3 py-1"
                                    onClick={this.addOrigin}>تایید مبدا
                            </button>
                        </div>
                    </div>}

                    {this.state.addDestination && <Marker

                        title="این یه مارکره"
                        coordinates={[51.49943883142606, 35.803193981999655]}
                        anchor="bottom"
                    >
                        <FontAwesomeIcon icon={faMapMarker} color="red" size="2x"/>
                    </Marker>}
                </CedarMaps>
            </>
        );
    }
}

export default MapPage;
