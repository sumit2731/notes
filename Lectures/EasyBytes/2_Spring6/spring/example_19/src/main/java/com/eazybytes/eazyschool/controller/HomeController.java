package com.eazybytes.eazyschool.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value={"", "/", "home"})
    /**
     * So modal is an interface inside Spring MVC framework which will act as an container
     * between your UI and backend code.Suppose whenever I want to pass certain variables
     * to my UI or vice versa, where the variable or information is coming from UI to
     * backend, I can use modal as an container holding those values.
     *
     * If you also want to accept data from request use @RequestBody -
     *
     * public String displayHomePage(@RequestBody UserRequest userRequest, Model model) {
     */
    public String displayHomePage(Model model) {
        model.addAttribute("username", "Smith Doe");
        return "home.html";
    }

}
