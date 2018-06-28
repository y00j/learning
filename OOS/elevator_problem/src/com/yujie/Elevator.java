package com.yujie;

public class Elevator {
    public Building building;
    public String name;
    public Floor[] accessFloors;
    public Floor currentFloor;
    public boolean isOperational;

    public Elevator(Building building, String name, Floor[] accessFloors, Floor currentFloor) {
        this.isOperational = true;
        this.building = building;
        this.name = name;
        this.accessFloors = accessFloors;
        this.currentFloor = currentFloor;
    }

    //method : GoToFloor(dispatchedToFloor) ...
    //simulate a for loop incrementing or decremeting from elevator's currentFloor number to dispatchedToFloor number

    //Bonus: Exercise if you like that way : Maybe we add a class called ElevatorDoor which is a part of the Floor object with the methods Open and Close
}
