package com.eazybytes.marvel.hero.app;


import com.eazybytes.marvel.hero.SuperHero;
import com.eazybytes.marvel.hero.impl.CaptainAmerica;
import com.eazybytes.marvel.hero.impl.IronMan;
import com.eazybytes.marvel.hero.impl.SpiderMan;

public class MarvelHeroDemo {
    public static void main(String[] args) {
        //without interface
        IronMan ironMan = new IronMan();
        System.out.println(ironMan.usePower());
        System.out.println(ironMan.stopVillain('N'));

        SpiderMan spiderMan = new SpiderMan();
        System.out.println(spiderMan.usePower());
        System.out.println(spiderMan.stopVillain('N'));

        CaptainAmerica captainAmerica = new CaptainAmerica();
        System.out.println(captainAmerica.usePower());
        System.out.println(captainAmerica.stopVillain('N'));

        //withInterface
        SuperHero ironMan2 = new IronMan();
        invokeSuperhero(ironMan2);
        SuperHero spiderMan2 = new IronMan();
        invokeSuperhero(spiderMan2);
        SuperHero captainAmerica2 = new IronMan();
        invokeSuperhero(captainAmerica2);

        /**
         * accessing a field inside a class
         * this class does not implement that interface- so we need interface name to access it
//         */
        System.out.println(SuperHero.UNIVERSE_NAME);
        System.out.println(IronMan.UNIVERSE_NAME);

    }
    /*
    So this way you can see now the code is looking very short and concise, and in future, whenever we
    want to make any changes, the change is always going to be inside a single method.
    So here you can see the other advantage that we are getting from the interface is, we are encouraging
    the reusability.And we are also building the common logic in a separate method.
    So this is also kind of Polymorphism.The same method is trying to act differently based upon the input that you are
    trying to send.
    * */
    private static void invokeSuperhero(SuperHero superHero) {
        System.out.println(superHero.usePower());
        System.out.println(superHero.stopVillain('N'));
    }
}
