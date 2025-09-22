@Component
public class RequestResponseModifierFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
            FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        // Wrap request and response
        CachedBodyHttpServletRequest wrappedRequest = new CachedBodyHttpServletRequest(request);
        CachedBodyHttpServletResponse wrappedResponse = new CachedBodyHttpServletResponse(response);

        // Access and modify request body
        String requestBody = wrappedRequest.getCachedBodyAsString();
        String modifiedRequestBody = requestBody.replace("foo", "bar"); // Example modification
        wrappedRequest.setModifiedBody(modifiedRequestBody);

        // Proceed with wrapped objects
        filterChain.doFilter(wrappedRequest, wrappedResponse);

        // Access and modify response body
        String responseBody = wrappedResponse.getCapturedBody();
        String modifiedResponseBody = responseBody.replace("old", "new"); // Example modification
        wrappedResponse.replaceBody(modifiedResponseBody);

        // Write final content to actual response
        wrappedResponse.copyBodyToResponse();
    }

}