# Problem Statement
I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is
given a number starting at 1 increasing with increasing distance from the entry point
in steps of one. I want to create an automated ticketing system that allows my
customers to use my parking lot without human intervention.  

When a car enters my parking lot, I want to have a ticket issued to the driver. The
ticket issuing process includes us documenting the registration number (number
plate) and the colour of the car and allocating an available parking slot to the car
before actually handing over a ticket to the driver (we assume that our customers are
nice enough to always park in the slots allocated to them). The customer should be
allocated a parking slot which is nearest to the entry. At the exit the customer returns
the ticket with the time the car was parked in the lot, which then marks the slot they
were using as being available. Total parking charge should be calculated as per the
parking time. Charge applicable is $10 for first 2 hours and $10 for every additional
hour.

# Solution:
Create parking array and availableSlot array:  
- parking with parking in the car park.
- availableSlot contains the location of the vehicle leaving the parking lot.  
When the car enters the parking lot, the smallest position in the availableSlot array will be taken as the parking position. and delete that location from the availableSlot array.  
When the car leaves the parking lot, the parking array is updated and the car parking location is added to the availableSlot array.  

# Input (contents of file):
create_parking_lot 6  
park KA-01-HH-1234  
park KA-01-HH-9999  
park KA-01-BB-0001  
park KA-01-HH-7777  
park KA-01-HH-2701  
park KA-01-HH-3141  
leave KA-01-HH-3141 4  
status  
park KA-01-P-333  
park DL-12-AA-9999  
leave KA-01-HH-1234 4  
leave KA-01-BB-0001 6  
leave DL-12-AA-9999 2  
park KA-09-HH-0987  
park CA-09-IO-1111  
park KA-09-HH-0123  
status  

# Output (to STDOUT):
Created parking lot with 6 slots  
Allocated slot number: 1  
Allocated slot number: 2  
Allocated slot number: 3  
Allocated slot number: 4  
Allocated slot number: 5  
Allocated slot number: 6  
Registration number KA-01-HH3141 with Slot Number 6 is free with Charge 30  
Slot No. Registration No.  
1 KA-01-HH-1234  
2 KA-01-HH-9999  
3 KA-01-BB-0001  
4 KA-01-HH-7777  
5 KA-01-HH-2701  
Allocated slot number: 6  
Sorry, parking lot is full  
Registration number KA-01-HH1234 with Slot Number 1 is free with Charge 30  
Registration number KA-01-BB0001 with Slot Number 3 is free with Charge 50  
Registration number DL-12-AA-9999 not found  
Allocated slot number: 1  
Allocated slot number: 3  
Sorry, parking lot is full  
Slot No. Registration No.  
1 KA-09-HH-0987  
2 KA-01-HH-9999  
3 CA-09-IO-1111  
4 KA-01-HH-7777  
5 KA-01-HH-2701  
6 KA-01-P-333  
