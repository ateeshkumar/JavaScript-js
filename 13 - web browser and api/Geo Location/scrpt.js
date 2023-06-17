function curSuccess(pos){
    const coord = pos.coords;
    const lati = coord.latitude;
    const long = coord.longitude;
    const duration = coord.accuracy;

    const div1 = document.createElement('h2');
    div1.innerHTML = 
    `Latitude of the user Location is: ${lati}`;
    
    const div2 = document.createElement('h2');
    div1.innerHTML = 
    `Longitude of the user Location is: ${long}`;

    const div3 = document.createElement('h2');
    div1.innerHTML = 
    `Whithin : ${lati} meters`;
    document.querySelector('body').appendChild(div1,div2,div3);

    console.log("latitude: ",lati);
    console.log("longitude: ",long);
    console.log("Within: ",duration)
}
function curError(err){
    console.log(`Error: ${err.code}- ${err.message}`);
}
const curOptional={
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge: 0

}

navigator.geolocation.getCurrentPosition(curSuccess,curError,curOptional);