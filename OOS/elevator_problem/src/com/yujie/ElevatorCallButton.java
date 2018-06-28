package com.yujie;

public class ElevatorCallButton {

    public Floor floor;
    public Direction direction;

    public ElevatorCallButton(Floor floor, Direction direction) {
       this.floor = floor;
       this.direction = direction;
    }

    //methods
    //Pressed() : the button would find its floor and thru it the building. and the building has "callelevator" method
    //this.floor.building.SendElevatorToMyFloor(floor);

}
