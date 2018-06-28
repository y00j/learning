package com.yujie;

public class Rider {
    public String name;
    public int floorNumber;

    //BONUS or overenngineering:
    //Keep track of rider state : inside or outside elevator in a boolean
    //have 2 methods : EnterElevator() and ExitElevator which set the above boolean.

    public Rider(String name, int floorNumber) {
        this.name = name;
        this.floorNumber = floorNumber;
    }

    //pushbutton
}
