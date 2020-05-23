var maxSize = 0
var parking = []
var availableSlot = []

const createParkingLot = (size) => {
    maxSize = isNaN(parseInt(size)) ? 0 : parseInt(size)
    for (let i = 1; i <= maxSize; i++) {
        parking.push(i)
        availableSlot.push(i)
    }
    return `Created parking lot with ${maxSize} slots`
}

const park = (carNumber) => {
    if (maxSize == 0) {
        return 'Parking has not been initialized'
    } else if(availableSlot.length == 0) {
        return 'Sorry, parking lot is full'
    } else {
        let carInfo = {
            slot: getSlotNumber(),
            registrationNo: carNumber
        }
        parking[getSlotNumber() - 1] = carInfo
        availableSlot.splice(availableSlot.indexOf(carInfo.slot), 1)
        return `Allocated slot number: ${carInfo.slot}`
    }
}

const leave = (carNumber, time) => {
    let t;
    if (isNaN(parseInt(time))) {
        return "Time is not a number"
    } else {
        t = parseInt(time)
    }
    let slot = parking.find(car => car.registrationNo == carNumber)
    if (!slot) {
        return `Registration number ${carNumber} not found`
    }
    parking[slot.slot - 1] = slot.slot
    availableSlot.push(slot.slot)
    return `Registration number ${carNumber} with Slot Number ${slot.slot} is free with Charge ${getCharge(t)}`
}

const status = () => {
    if (maxSize == 0) {
        return 'Parking has not been initialized'
    } else if (maxSize == availableSlot.length) {
        return `Parking lot is empty`
    } else {
        let content = `Slot No. Registration No.`
        let map = parking.map(car => {
            if(car.slot) {
                return content = content + `\n${car.slot}   ${car.registrationNo}`
            }
        })
        Promise.all(map)
        return content
    }
}

const getSlotNumber = () => {
    const slot = availableSlot.reduce((a, b) => Math.min(a, b))
    return slot
}

const getCharge = (time) => {
    let charge;
    if (time <= 2) {
        return charge = 10
    } else {
        return charge = 10 + ((time-2) * 10)
    }
}

module.exports = {
    createParkingLot,
    park,
    leave,
    status,
    getSlotNumber,
    getCharge
}