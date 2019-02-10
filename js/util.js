export const dateConvert = (time) => {
    var newTime = time.toLocaleString()
    console.log(newTime)
}

export function geoConv(address) {
    var str = address
    var res = str.replace(/ /g, "+");
    console.log(res)
}

