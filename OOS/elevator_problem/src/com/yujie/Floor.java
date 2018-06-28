package com.yujie;

public class Floor {
    public Building building;
    public int floorNumber;
    public ElevatorCallButton upButton;
    public ElevatorCallButton downButton;

    public Floor(int floorNumber, Building building) {
        this.floorNumber = floorNumber;
        this.building = building;
        if (floorNumber == 1) {
            this.upButton = new ElevatorCallButton(this, Direction.UP);
        } else if (floorNumber == building.floors.length) {
            this.downButton = new ElevatorCallButton(this, Direction.DOWN);
        } else {
            this.upButton = new ElevatorCallButton(this, Direction.UP);
            this.downButton = new ElevatorCallButton(this, Direction.DOWN);
        }
    }

}
