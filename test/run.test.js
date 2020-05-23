const assert = require('chai').assert
const parkingLot = require('../src/parking-lot')

describe('create_parking_lot 6', async function () {
    it('should create parking lot with 6 slots', async function () {
      var expected = 'Created parking lot with 6 slots'
      var actual = await parkingLot.createParkingLot(6)
      assert.equal(actual, expected)
    })
})

describe('park KA-01-HH-1234', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 1'
      var actual = await parkingLot.park('KA-01-HH-1234')
      assert.equal(actual, expected)
    })
})

describe('park KA-01-HH-9999', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 2'
      var actual = await parkingLot.park('KA-01-HH-9999')
      assert.equal(actual, expected)
    })
})

describe('park KA-01-BB-0001', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 3'
      var actual = await parkingLot.park('KA-01-BB-0001')
      assert.equal(actual, expected)
    })
})

describe('park KA-01-HH-7777', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 4'
      var actual = await parkingLot.park('KA-01-HH-7777')
      assert.equal(actual, expected)
    })
})

describe('park KA-01-HH-2701', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 5'
      var actual = await parkingLot.park('KA-01-HH-2701')
      assert.equal(actual, expected)
    })
})

describe('park KA-01-HH-3141', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 6'
      var actual = await parkingLot.park('KA-01-HH-3141')
      assert.equal(actual, expected)
    })
})

describe('leave KA-01-HH-3141 4', async function () {
    it('should be a free position and a fee', async function () {
      var expected = 'Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30'
      var actual = await parkingLot.leave('KA-01-HH-3141', '4')
      assert.equal(actual, expected)
    })
})

describe('status', async function () {
    it('should be the status of the parking lot', async function () {
      var actual = await parkingLot.status()
      assert.equal(actual, actual)
    })
})

describe('park KA-01-P-333', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 6'
      var actual = await parkingLot.park('KA-01-P-333')
      assert.equal(actual, expected)
    })
})

describe('park DL-12-AA-9999', async function () {
    it('should be a parking notice is full', async function () {
      var expected = 'Sorry, parking lot is full'
      var actual = await parkingLot.park('DL-12-AA-9999')
      assert.equal(actual, expected)
    })
})

describe('leave KA-01-HH-1234 4', async function () {
    it('should be a free position and a fee', async function () {
      var expected = 'Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30'
      var actual = await parkingLot.leave('KA-01-HH-1234', '4')
      assert.equal(actual, expected)
    })
})

describe('leave KA-01-BB-0001 6', async function () {
    it('should be a free position and a fee', async function () {
      var expected = 'Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50'
      var actual = await parkingLot.leave('KA-01-BB-0001', '6')
      assert.equal(actual, expected)
    })
})

describe('leave DL-12-AA-9999 2', async function () {
    it('should be a message not found', async function () {
      var expected = 'Registration number DL-12-AA-9999 not found'
      var actual = await parkingLot.leave('DL-12-AA-9999', '2')
      assert.equal(actual, expected)
    })
})

describe('park KA-09-HH-0987', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 1'
      var actual = await parkingLot.park('KA-09-HH-0987')
      assert.equal(actual, expected)
    })
})

describe('park CA-09-IO-1111', async function () {
    it('should be the number of positions allocated', async function () {
      var expected = 'Allocated slot number: 3'
      var actual = await parkingLot.park('CA-09-IO-1111')
      assert.equal(actual, expected)
    })
})

describe('park KA-09-HH-0123', async function () {
    it('should be a parking notice is full', async function () {
      var expected = 'Sorry, parking lot is full'
      var actual = await parkingLot.park('KA-09-HH-0123')
      assert.equal(actual, expected)
    })
})

describe('status', async function () {
    it('should be the status of the parking lot', async function () {
      var actual = await parkingLot.status()
      assert.equal(actual, actual)
    })
}) 