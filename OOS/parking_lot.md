// multiple levels
// motorcycles, cars, buses
//mortocycle spot, compact spots, and large spots
//bus needs 5 large spots

1.  owner takes car to the valet
2.  valet looks up database, finds first available spot and parks it
3.  person comes back, gives valetTicket
4.  valet finds car by ticket and returns car

# Classes

## class Vehicle

type: (car, motorcycle, bus),
currentSpot: where it is currently parked
ticketNum: the corresponding ticket number when the car is parked.

### Class Car, Mortorcycle, Bus

size: (this is determined by the car's type.)

## class Floor

parking spots: array --> [row,1,2,3,4,row,5,6,7,8,9,row] or maybe a nested array. ("rows" are where a new row starts, so we can determine if a bus has enough space in the row to park)

findAvailableSpot(vehicle) --> return the first available spot on the floor

## class ParkingRamp(numFloors)

floors: [floor1, floor2]
findSpot(ticketId) -> returns the spot based on the ticketID

- right now would have to search every spot if it has a car with the corresponding ticketNum.

findAvailableSpot(vehicle) -> iterates through each floor starting 1 through max and finds the first available spot in the parkingramp

# Ellie Mae Prep Questions and Notes

what are your passions in technology and beyond?

- 2 things: I want to produce an app that will help with people's lives, specifically with efficiency.

- I love technology because it can improve people's lives.

- I want to make the next big Melee style fighting game.

What do you know about our company?

- HMM need to research this. Ellie Mae deals with compliance???

What do you value in a company culture?

- I want good collaboration, a great learning environment, challenged

What are your professional goals?

- I want to keep learning and growing and become a "rockstar" developer. I want to become someone on the team that others go to as a resource due to my expertise

my interviewers

what do I want to learn more about?

- backend architecture --> microservices
- managing

manacher's algorithm
