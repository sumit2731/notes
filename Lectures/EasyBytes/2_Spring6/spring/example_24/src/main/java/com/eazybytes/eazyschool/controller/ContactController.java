package com.eazybytes.eazyschool.controller;

import com.eazybytes.eazyschool.model.Contact;
import com.eazybytes.eazyschool.service.ContactService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.validation.Valid;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Slf4j
@Controller
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @RequestMapping("/contact")
    /**
     * So here we need to let our contact.html knows that there is a bean validation
     * that we need to perform on top of the data that is provided by the end user.
     * For the same,we add Model Parameter.
     *
     * this way I'm indicating to my thymeleaf that this page will hold  the data belongs
     * to the Contact object, and any validations that I defined inside this Contact bean
     *should be performed by the Thymeleaf and Spring MVC whenever the user is submitted
     * the data.
     *
     */
    public String displayContactPage(Model model) {
        model.addAttribute("contact", new Contact());
        return "contact.html";
    }

    /*@RequestMapping(value = "/saveMsg",method = POST)
    public ModelAndView saveMessage(@RequestParam String name, @RequestParam String mobileNum,
                                    @RequestParam String email, @RequestParam String subject, @RequestParam String message) {
        log.info("Name : " + name);
        log.info("Mobile Number : " + mobileNum);
        log.info("Email Address : " + email);
        log.info("Subject : " + subject);
        log.info("Message : " + message);
        return new ModelAndView("redirect:/contact");
    }*/

    /**
     * Here we want to send same form back to user but with 2 things -
     *   a)Values filled by user should be as it is
     *   b)Error should be shown to user
     *
     * For First we set the property in model with name contact - @ModelAttribute("contact") and it's value
     *  is same as value of contact object
     * Then we tell spring to validate the object against POJO class - Vehicle. @Valid
     * If errors are present then it popoluates the errors object
     *
     * If errors are found we redirect the user to new form -> sent 302 status -> so browser goes to /contact page
     * Other wise we return same contact form, but now because of model -
     *    we should previous data - attribute 'contact'
     *    and errors
     *
     */
    @RequestMapping(value = "/saveMsg",method = POST)
    public String saveMessage(@Valid @ModelAttribute("contact") Contact contact, Errors errors, Model model) {

        if(errors.hasErrors()){
            log.error("Contact form validation failed due to : " + errors.toString());
            model.asMap().forEach((key, value) -> {
                System.out.println("Key: '" + key );
                System.out.println("value: '" + value );
            });
            return "contact.html";
        }
        contactService.saveMessageDetails(contact);
        return "redirect:/contact";
    }



}
