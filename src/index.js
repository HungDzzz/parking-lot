const readline = require('readline')
const parkingLot = require('./parking-lot')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const main = () => {
    rl.on('line', async (input) => {
        input = input.split(" ")
        switch (input[0]) {
            case ('create_parking_lot'):
                try {
                    const result = await parkingLot.createParkingLot(input[1])
                    console.log('---------------OUTPUT--------------')
                    console.log(result)
                } catch (e) {
                    console.log('Error: ', e)
                }
                break
            case ('park'):
                try {
                    const result = await parkingLot.park(input[1], input[2])
                    console.log(result)
                } catch (e) {
                    console.log('Error: ', e)
                }
                break
            case ('leave'):
                try {
                    const result = await parkingLot.leave(input[1], input[2])
                    console.log(result)
                } catch (e) {
                    console.log('Error: ', e)
                }
                break
            case ('status'):
                try {
                    const result = await parkingLot.status()
                    console.log(result)
                } catch (e) {
                    console.log('Error: ', e)
                }
                break
            default:
                console.log('The command is incorrect');
        }
    });
}

main()