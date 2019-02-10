import { CONFIG } from './config'
import * as firebase from 'firebase'
import * as fb from 'firebase/app'
import 'firebase/firestore'
import {h, app} from 'hyperapp'


var startloc = {lat: 49.264219, lng: -123.168874}
var ZenClinic = {lat: 49.264054, lng: -123.157232}
var BayswaterClinic = {lat: 49.264397, lng: -123.171408}
var MSKClinic = {lat: 49.268163, lng: -123.170301}
var ConnectClinic = {lat: 49.257293, lng: -123.167636}
var WELLClinic = {lat: 49.263690, lng: -123.211498}
var map;
var clinicMarker = 'http://maps.google.com/mapfiles/kml/shapes/hospitals.png'
;
(() => {
  map = new google.maps.Map(document.getElementById('map'), {
    center: startloc,
    zoom: 15
  })
  var marker = new google.maps.Marker({
    position: startloc,
    icon: 'https://maps.google.com/mapfiles/kml/shapes/man.png' ,
    map: map
  })
  var markerZen = new google.maps.Marker({position: ZenClinic, icon: clinicMarker, map: map, title: 'Zen Clinic'});
  var markerBaysw = new google.maps.Marker({position: BayswaterClinic, icon: clinicMarker, map: map});
  var markerMSK = new google.maps.Marker({position: MSKClinic, icon: clinicMarker, map: map});
  var markerConnect = new google.maps.Marker({position: ConnectClinic, icon: clinicMarker, map: map});
  var markerWELL = new google.maps.Marker({position: WELLClinic, icon: clinicMarker, map: map});

  var infoWindow = new google.maps.InfoWindow({content: '<button type="button">Click Me!</button>'})
  markerZen.addListener('click', function(){
    infoWindow.open(map, markerZen)
  })
})()