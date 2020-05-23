var maxSize = 0
var parking = []
var availableSlot = []

const createParkingLot = (size) => {
    try {
        maxSize = parseInt(size)
        for (let i = 1; i <= maxSize; i++) {
            parking.push(i)
            availableSlot.push(i)
        }
        return `Created parking lot with ${maxSize} slots`;
    } catch (error) {
        return "Parameter is not a number"
    }
}

const park = (carNumber) => {
    if (maxSize == 0) {
        return 'Parking has not been initialized'
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
    return null
}

const status = () => {
    return null
}

const getSlotNumber = () => {
    const slot = availableSlot.reduce((a, b) => Math.min(a, b))
    return slot
}

const getCharge = () => {
    return null
}

module.exports = {
    createParkingLot,
    park,
    leave,
    status,
    getSlotNumber,
    getCharge
}