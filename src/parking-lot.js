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
        console.log(parking)
        console.log(availableSlot)
        return `Created parking lot with ${maxSize} slots`;
    } catch (error) {
        return "Parameter is not a number"
    }
}

const park = (carNumber) => {
    return null
}

const leave = (carNumber, time) => {
    return null
}

const status = () => {
    return null
}

const getSlotNumber = () => {
    return null
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