package com.eazybytes.eazyschool.model;

import lombok.Data;

/*
1)@Data annotation is provided by Lombok library which generates getter, setter,
equals(), hashCode(), toString() methods & Constructor at compile time.
This makes our code short and clean.


2)this is used to map data
* */
@Data
public class Contact {

    private String name;
    private String mobileNum;
    private String email;
    private String subject;
    private String message;
    //generate getter and setter, along with toString
}
