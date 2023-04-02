let num = 2;
while (num <= 65536) {
    console.log(num);
    num *= 2;
}


var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Starting with " + allCones + " cones.");

do {
    var cones = Math.floor(Math.random() * 5) + 1;

    if (cones <= allCones) {
        allCones -= cones;
        console.log(cones + " cones sold ");
    } else {
        console.log("cant sell you " + cones + " i only have " + allCones + "...");
    }
} while (allCones > 0);

console.log("i sold them all!");