import React, {Component} from 'react';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import './map.scss';
import greenLeaf from '../../images/cedarmaps_marker_icon_start.png';
import orangeLeaf from '../../images/cedarmaps_marker_icon_end.png';
import HeaderMap from "./headerMap";
import AddTrip from "./addTrip";
import Telegram from "../../images/logo-app/telegram.png";

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
        addOrigin: true,
        showContent: false,
        search: '',
        allowSearch: false,
        listSearch: [],
        searchLng: '',
        searchLat: '',
        back: false
    };

    AddOrigin = () => {
        this.setState({
            addDestination: true,
            addOrigin: false,
            origin: this.state.geocoder,
            lng: this.state.lng + 0.000199999999,
            lat: this.state.lat + 0.000099999999
        });
    };
    AddDestination = () => {
        this.setState({
            showContent: true,
            addDestination: false,
            destination: this.state.geocoder,
            back: true
        });
    };
    backClick = () => {
        if (!this.state.addOrigin && !this.state.addDestination) {
            this.setState({
                showContent: false,
                addDestination: true,
                back: true
            });
        } else {
            this.setState({
                addDestination: false,
                addOrigin: true,
                back: true
            });
        }
    };
    /*    searchInput = (value) => {

            if (value.length >= 3) {

                this.setState({
                    search: value
                });
                console.log(this.state.search)
            } else {
                this.setState({
                    listSearch: []
                });
            }


        };*/

    /*   searchDestination = (e) => {
           this.setState({
               searchLng: Number(e.split(',')[1]),
               searchLat: Number(e.split(',')[0]),
           });
       };*/

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.search !== this.state.search) {
            client.forwardGeocoding(encodeURIComponent(this.state.search), 'cedarmaps.streets', {type: 'roundabout'}, (err, res) => {
                if (res) {

                    let listSearch = res.filter((item, index) => {
                        return (item.components.province === "تهران")
                    });
                    this.setState({
                        listSearch: listSearch,
                    });

                }

            });
        }
        if (prevState.searchLng !== this.state.searchLng) {
            this.setState({
                lng: this.state.searchLng,
                lat: this.state.searchLat,
                allowSearch: true
            });
        }
    }

    render() {
        if (this.state.geocoder === null || this.state.allowSearch) {
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
                                       listSearch={this.state.listSearch}
                                /*  searchDestination={this.searchDestination}*/
                            />
                        </div>
                    </div>

                    {this.state.showContent && <AddTrip/>}

                    <RotationControl/>

                    <Marker
                        coordinates={(!this.state.addOrigin) ? [this.state.origin.lng, this.state.origin.lat] : [this.state.lng, this.state.lat]}
                        anchor="bottom">
                        <img src={greenLeaf} alt="leaf" className="max-width-icon-leaf"/>
                    </Marker>


                    {(!this.state.addOrigin) && <Marker
                        coordinates={(!this.state.addDestination) ? [this.state.destination.lng, this.state.destination.lat] : [this.state.lng, this.state.lat]}
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
                        <div className="box-btn mt-2 mb-5">
                            <button type="button" className="bgGreen border-radius-100 font-size-1 text-white px-3 py-2"
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
