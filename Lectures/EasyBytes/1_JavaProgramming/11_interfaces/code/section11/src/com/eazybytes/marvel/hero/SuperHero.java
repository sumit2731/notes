package com.eazybytes.marvel.hero;

public interface SuperHero extends Person,Hero   {
    /**
     * All instance fields are by default -public , static, final
     * This field will inherited by all classes that implemented this
     * within class code, they can be accessed like normal static variable - direct name or by className
     */
    String UNIVERSE_NAME = "Marvel";

    String usePower();

    /**
     * If Y received kill the villain
     * If N received stop the villain
     * @param c indicates Y or N
     * @return - Returns status
     */
    String stopVillain(char c);

    /**
     * default method , can be overriden in class, but in class do not use default keyword
     */
    default String trackLiveLocation() {
        String liveLocation = "USA";
        System.out.println("I am in "+ liveLocation);
        return  liveLocation;
    }

    static String commonCharacteristics () {
        return "Superhuman abilities, Willingness to sacrifice";
    }

//    @Override
//    void walk();

    @Override
    default void walk() {
        //this is how you can call default methods of interface- default methods belongs to instances
        Hero.super.walk();
    }
}
