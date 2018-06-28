package com.yujie;

public class Building {
    public String name;
    public String address;
    public Floor[] floors;
    public Elevator[] elevators;

    public Building(String name, String address, int numFloors) {
        this.name = name;
        this.address = address;
        this.floors = new Floor[numFloors];
        this.elevators = new Elevator[1];

        for(int i = 0; i < numFloors; i++) {
            this.floors[i] = new Floor(i + 1, this);
        }

        elevators[0] = new Elevator(this, "elevator1", this.floors, this.floors[0]);

    }

    //other methods would be:
    //SendElevatorToMyFloor(requestedFloor ...)
    //This method:
        // Choose an elevator to send. For us, it is trivial. Always Elevator[0] = e1
        // e1.GoToFloor(requestedFloor)


}
