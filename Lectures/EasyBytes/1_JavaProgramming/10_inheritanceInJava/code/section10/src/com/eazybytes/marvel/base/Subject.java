package com.eazybytes.marvel.base;

public abstract class Subject {

    public Subject(){

    }

    /**
     * Here we define only that logic that will be common to all classes
     *
     * logic that is going to vary should be implement in specififc claases, and here we define
     * the contract about what should be implemented in child classes
     */
    public int marks;
    public static final int MIN_MARKS = 0;


    // concrete methods
    public int totalMarks () {
        return 100;
    }

    public  abstract void teach ();

}
