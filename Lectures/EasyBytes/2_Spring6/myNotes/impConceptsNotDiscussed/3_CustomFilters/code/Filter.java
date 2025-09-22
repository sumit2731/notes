import java.io.IOException;

public interface Filter {

    void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException;
}

@Component // If marked with @Component, Spring Boot automatically registers it.
public class LoggingFilter implements Filter {

    /**
     * called once per request.
     * 
     * The filter can:
     * 
     * Read or modify request/response.
     * Block request (not call chain.doFilter()).
     * Continue processing by calling chain.doFilter(request, response).
     */
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        System.out.println("Request URI: " + req.getRequestURI());

        // Continue to next filter or servlet
        chain.doFilter(request, response);

        System.out.println("Response completed.");
    }
}