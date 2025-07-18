package com.eazybytes.eazyschool.controller;

import com.eazybytes.eazyschool.model.Contact;
import com.eazybytes.eazyschool.model.Response;
import com.eazybytes.eazyschool.proxy.ContactProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
public class ContactController {

    @Autowired
    ContactProxy contactProxy;

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    WebClient webClient;

    @GetMapping("/getMessages")
    public List<Contact> getMessages(@RequestParam("status") String status) {
        return contactProxy.getMessagesByStatus(status);
    }

    @PostMapping("/saveMsg")
    public ResponseEntity<Response> saveMsg(@RequestBody Contact contact){
        String uri = "http://localhost:8080/api/contact/saveMsg";
        HttpHeaders headers = new HttpHeaders();
        headers.add("invocationFrom","RestTemplate");
        /**
         *  In order to send both headers and request to body using RestTemplate, we need to
         *  create an object of HttpEntity.
         */
        HttpEntity<Contact> httpEntity = new HttpEntity<>(contact, headers);
        /**
         * Generic is data type of body,in response returned by EndPoint.
         *
         * Fourth parameter to is also same, data type of expected body
         */
        ResponseEntity<Response> responseEntity = restTemplate.exchange(uri, HttpMethod.POST,
                httpEntity,Response.class);
        return responseEntity;
    }

    @PostMapping("/saveMessage")
    public Mono<Response> saveMessage(@RequestBody Contact contact){
        String uri = "http://localhost:8080/api/contact/saveMsg";
        return webClient.post().uri(uri)
                .header("invocationFrom","WebClient")
                /**
                 * This is requestBody.It needs 2 parameters
                 *
                 * RequestBody -
                 *      I cannot pass this contact object directly. since web client is based upon the reactive
                 *      streams no object we can directly send and receive.We need to always wrap them inside a Mono
                 *      or Flux classes available inside the spring Reactive module.The reason why we need to wrap is
                 *      because this WebClient is not going to block your threads.It's not going to make your threads
                 *      wait for the response.And due to this non-blocking nature of web client, we need to wrap our
                 *      input inside a Mono.Mono is a class inside reactive module which we can use whenever we want
                 *      to store single element.Flux is another class available inside the reactive module,It can store
                 *      or emit multiple objects like list of objects.we need to send only 1 object so we use Mono.just
                 *
                 * second param is data type of RequestBody
                 */
                .body(Mono.just(contact),Contact.class)
                /**
                 * retrieve() method is a method which is responsible to invoke or consume the REST
                 * service based upon the URI header and body that you have provided.So this is very
                 * similar to the exchange() method that we have inside the RestTemplate.
                 */
                .retrieve()
                /**
                 * we need to catch the response by invoking bodyToMono() method.And as I said,
                 * Mono is capable of emitting a single element whenever that particular data is
                 * available,so it won't make you a thread,keep waiting.
                 *
                 * whenever that particular response data is available, this bodyToMono()
                 * method is going to return a Mono of Response, because your response data type
                 * is Response.class(we indicate this by passing argument).So whenever my response is available,
                 * I will get a Mono of Response.So my mono of Response is capable of emitting a single element
                 * inside this.this is also caoable of communicating in asynchronous mode and without blocking your
                 * threads
                 */
                .bodyToMono(Response.class);
    }
}
