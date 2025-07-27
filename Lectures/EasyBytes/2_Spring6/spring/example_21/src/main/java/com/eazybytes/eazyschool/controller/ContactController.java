package com.eazybytes.eazyschool.controller;

import com.eazybytes.eazyschool.model.Contact;
import com.eazybytes.eazyschool.service.ContactService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Slf4j
@Controller
public class ContactController {

    private final ContactService contactService;

    /**
     * This is service which is injected by spring
     */
    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @RequestMapping("/contact")
    public String displayContactPage() {
        return "contact.html";
    }
    /*
    * Here we map each and every form data manually using @RequestParam
    * */
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

    @RequestMapping(value = "/saveMsg",method = POST)
//    public ModelAndView saveMessage(@RequestParam String name, @RequestParam){
    /**
     * When from UI we send the formData, either we can accept it param by param or by using @RequestParam
     * Or we can accept it by Injecting a POJO.
     *
     * Spring Will automatically inject required params.we need to make sure that name
     *  of form fields are same as name of fields of pojo
     */
    public ModelAndView saveMessage(Contact contact){
        /**
         * Inside your Controller layer you will do all your validations or any kind of
         * business logic associated to the preliminary checks that you want to do.
         *
         * Once all those validations is successful, you will hand over that information to
         * the service layer and service layer also will again will do its own business logic,
         * something related to service layer.
         *
         * And once the service layer is done processing the information, it will send that
         * information to the persistent layer or data layer.
         */
        //some log statements
        contactService.saveMessageDetails(contact);
        /**
         * We can use this class to send both data and page to user here we do not have data.
         *
         * so we include redirect, Dispatcher Servelet tells server to send response to browser
         * with status 302, to redirect user to /contact.
         *
         *
         * alternates -
         *    return "redirect:/contact"
         *    return new RedirectView("/contact");
         *
         *  why we need redirect - because refreshing the browser will resend the last
         *  request which is form submission,POST request
         *
         *  How to use ModelAndView -
         *    modelAndView.addObject("product", product);
         *    modelAndView.addObject("pageTitle", "Product Details");
         *    modelAndView.setViewName("product-details");
         *
         *    return modelAndView
         *
         */
        return new ModelAndView("redirect:/contact");
    }



}
