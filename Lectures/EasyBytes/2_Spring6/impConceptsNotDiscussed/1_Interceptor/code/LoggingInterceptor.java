import java.lang.reflect.Method;

public class LoggingInterceptor implements HandlerInterceptor {

    /**
     * - This method is called before the actual handler (controller method) is
     * executed.
     * - It can be used for tasks like logging, authentication, or modifying the
     * request.
     * - If this method returns false, the request will not proceed to the
     * controller.
     * 
     * Inside preHandle, handler is typically an instance of:
     * HandlerMethod method = (HandlerMethod) handler;
     * Method realMethod = method.getMethod();
     * Object controller = method.getBean();
     * Check for annotation - 
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        System.out.println("Incoming request URL: " + request.getRequestURI());
        return true; // Continue the request
    }

    /**
     * Executed after controller method but before view is rendered.
     * Can be used to modify ModelAndView, inject model data.
     * Not invoked if the controller throws an exception.
     * The response is not yet committed at this point, so you can still modify it.
     */
    @Override
     * 
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) {
        System.out.println("Request handled, preparing view");
     * 
    }

    /**
     * This method is called after the view has been rendered and the response has
     * been committed.
     * Called after view rendering is complete.
     * Useful for resource cleanup, performance logging, or exception tracking.
     * It is guaranteed to be called even if an exception occurs during request
     * processing.
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
            Exception ex) {
        System.out.println("Request completed");
    }
}