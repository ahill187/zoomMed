export const dateConvert = (time) => {
    var newTime = time.toLocaleString()
    console.log(newTime)
}

export function geoConv(address) {
    var str = address
    var res = str.replace(/ /g, "+");
    res = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + res +  '&key=AIzaSyA8cVX0QiIum-7ZPAVLS2Lh1fHPUNVeekA'
    return res
}

