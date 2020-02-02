import React, {Component} from 'react';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import './map.scss';
import greenLeaf from '../../images/cedarmaps_marker_icon_start.png';
import orangeLeaf from '../../images/cedarmaps_marker_icon_end.png';
import HeaderMap from "./headerMap";
import AddTrip from "./addTrip";

const cedarMaps = require('@cedarstudios/cedarmaps');
const client = cedarMaps('2e6f3b1a94fd3ae41bda2d1ac5cee21af542c0c2');

class MapPage extends Component {
    state = {
        lng: 51.40995817393991,
        lat: 35.75755756138446,
        zoom: 14,
        geocoder: null,
        origin: null,
        destination: null,
        addDestination: false,
        showContent: false,
        search: '',
        allowSearch: false,
        listSearch: []
    };

    AddOrigin = () => {
        this.setState({
            addDestination: true,
            origin: this.state.geocoder,
            lng: this.state.lng + 0.000199999999,
            lat: this.state.lat + 0.000099999999
        });
    };
    AddDestination = () => {
        this.setState({
            showContent: true,
            destination: this.state.geocoder,
        });
    };
    backClick = () => {
        this.setState({
            showContent: false,
            addDestination: false,
        });
    };
    searchInput = (value) => {

        if (value.length >= 3 && value !== '') {

            this.setState({
                search: value
            })
            console.log(this.state.search)
        }
            setTimeout(() => {
                if (this.state.search === value) {
                    this.setState({
                        allowSearch: true
                    })
                }
            }, 1300)


    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(() => {
            if (this.state.allowSearch) {
                client.forwardGeocoding(encodeURIComponent(this.state.search), 'cedarmaps.streets', {type: 'roundabout'}, (err, res) => {

                    let listSearch = res.filter((item) => {
                        return item.components.province === "تهران";
                    });
                    this.setState({
                        listSearch: listSearch,
                        allowSearch: false
                    })
                });
                console.log(this.state.listSearch);
            }
        }, 1000)

    }

    render() {

        if (this.state.geocoder === null) {
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
            });
        }

        const {RotationControl, Popup, GeoJSONLayer, ReactMapboxGL, Cluster, ZoomControl, CenterControl, ScaleControl, Marker, Map, MapContext, L} = CedarMaps.getReactMapboxGl();
        /*
        * 0:
        id: 625653
        name: "ونک"
        name_en: ""
        alt_name: ""
        alt_name_en: ""
        type: "locality"
        location:
        bb:
        ne: "35.787902600000002,51.396891400000001"
        sw: "35.750329600000001,51.386025500000002"
        __proto__: Object
        center: "35.7643093874984,51.391913977109297"
        __proto__: Object
        address: ""
        components:
        country: "ایران"
        province: "تهران"
        city: "تهران"
        districts: ["منطقه ۳"]
        localities: []
        __proto__: Object
        __proto__: Object
        1:
        id: 248642
        name: "میدان ونک"
        name_en: "Vanak Sq"
        alt_name: ""
        alt_name_en: ""
        type: "roundabout"
        location: {bb: {…}, center: "35.757536173022501,51.409957192407198"}
        address: "کاووسیه"
        components: {country: "ایران", province: "تهران", city: "تهران", districts: Array(1), localities: Array(1)}
        __proto__: Object
        2:
        id: 988763
        name: "میدان ونک"
        name_en: "Vanak Square"
        alt_name: ""
        alt_name_en: ""
        type: "roundabout"
        location: {bb: {…}, center: "38.0660056640736,46.398728811461801"}
        address: ""
        components: {country: "ایران", province: "آذربایجان شرقی", city: "تبریز", districts: Array(0), localities: Array(0)}
        __proto__: Object
        3:*/
        return (
            <>
                <CedarMaps
                    containerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    token='2e6f3b1a94fd3ae41bda2d1ac5cee21af542c0c2'
                    preserveDrawingBuffer={false}
                    zoom={[this.state.zoom]}
                    center={[this.state.lng, this.state.lat]}
                    onMove={(e) => {
                        this.setState({
                            lng: e.transform.center.lng,
                            lat: e.transform.center.lat
                        });


                    }}
                    dragRotate={false}
                    touchZoomRotate={false}
                    onRotate={false}
                    onMoveEnd={
                        (e) => {
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
                            });
                        }
                    }
                    onZoom={
                        (e) => {
                            this.setState({
                                zoom: e.transform.zoom
                            });
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
                            <HeaderMap showAddress={!this.state.showContent && true}
                                       showSearch={!this.state.showContent && true}
                                       showBack={true} showMenu={true}
                                       address={this.state.geocoder}
                                       className="bgGreen"
                                       onClick={this.backClick}
                                       searchInput={this.searchInput}
                            />
                        </div>
                    </div>

                    {this.state.showContent && <AddTrip/>}

                    <RotationControl/>

                    <Marker
                        coordinates={this.state.addDestination ? [this.state.origin.lng, this.state.origin.lat] : [this.state.lng, this.state.lat]}
                        anchor="bottom">
                        <img src={greenLeaf} alt="leaf" className="max-width-icon-leaf"/>
                    </Marker>


                    {this.state.addDestination && <Marker
                        coordinates={this.state.showContent ? [this.state.destination.lng, this.state.destination.lat] : [this.state.lng, this.state.lat]}
                        anchor="bottom">
                        <img src={orangeLeaf} alt="leaf" className="max-width-icon-leaf"/>
                    </Marker>
                    }
                    {!this.state.showContent && <div className="mapText position-absolute text-center p-1 w-100 px-4"
                                                     style={{
                                                         fontFamily: 'IRANSans_light',
                                                         bottom: 0,
                                                         right: 0,
                                                         zIndex: 97,
                                                         transition: 'all .3s'
                                                     }}>
                        <div className="box-btn mt-2 mb-1">
                            <button type="button" className="bgGreen border-radius-100 font-size-1 text-white px-3 py-1"
                                    onClick={!this.state.addDestination ? this.AddOrigin : this.AddDestination}>
                                {!this.state.addDestination ? 'تایید مبدا' : 'تایید مقصد'}
                            </button>
                        </div>
                    </div>}

                </CedarMaps>
            </>
        );
    }
}

export default MapPage;
