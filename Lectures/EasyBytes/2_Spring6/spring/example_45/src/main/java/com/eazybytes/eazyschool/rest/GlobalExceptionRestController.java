package com.eazybytes.eazyschool.rest;


import com.eazybytes.eazyschool.model.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Slf4j
@RestControllerAdvice(annotations = RestController.class)
/**
 * As we have normal @Controller Advice also, we want this controllerAdvice to run first
 * and handle errors.
 */
@Order(1)
/**
 * ResponseEntityExceptionHandler - Provides default implementations for handling many common Spring MVC exceptions
 *  Returns ResponseEntity with meaningful HTTP status codes and error messages.Below methods handle below mentioned
 *  exceptions in that class
 * 
 * 
 * MethodArgumentNotValidException -(validation errors)
 * HttpMessageNotReadableException - (invalid JSON)
 * HttpRequestMethodNotSupportedException
 * BindException
 * 
 * It is typically extended by your @ControllerAdvice class.
 * You can override the methods,your methods will be called.
 * 
 * YOu can define new Error handling methods, and those will
 * be called for any errors not handled by this class.
 *
 * If you do not extend this class, then it is not used automatically by spring.
 * in that case spring use its default exception handlers.
 *
 *
 */
public class GlobalExceptionRestController extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers, HttpStatusCode statusCode, WebRequest request) {
        Response response = new Response(statusCode.toString(),
                ex.getBindingResult().toString());
        return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
    }

    /**
     * This handles the errors coming from all Rest handlers
     */
    @ExceptionHandler({Exception.class})
    public ResponseEntity<Response> exceptionHandler(Exception exception){
        Response response = new Response("500",
                exception.getMessage());
        return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
