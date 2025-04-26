package com.eazybytes.marvel.hero;

public interface Hero {
    // case 1.1 - both methods - abstract methods, same signature
//        void walk();
    // case 1.2 - both methods - abstract methods, signature different
//        void walk(String str);
    //    case 2.1 - one method is abstract, other is default
    default void walk () {
        System.out.println(" Hero Walking");
    }

}
