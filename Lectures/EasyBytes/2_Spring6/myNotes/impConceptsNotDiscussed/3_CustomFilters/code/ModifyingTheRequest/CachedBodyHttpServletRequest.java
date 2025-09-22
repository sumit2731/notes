import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

/**
 * Why this is need - Servlet request bodies can only be read once because the
 * input stream is not
 * rewindable by default.Once you call request.getInputStream() or
 * request.getReader(), the body is
 * read and consumed. Further attempts to read it will return nothing.
 */
public class CachedBodyHttpServletRequest extends HttpServletRequestWrapper {
    private byte[] cachedBody;

    public CachedBodyHttpServletRequest(HttpServletRequest request) throws IOException {
        /**
         * Reads entire body into a byte[] called cachedBody
         * This caches the body so it can be re-read later
         */
        super(request);
        InputStream requestInputStream = request.getInputStream();
        this.cachedBody = requestInputStream.readAllBytes(); // Read entire stream into byte[]
    }

    /**
     * Instead of returning the original InputStream (which is now already read), we
     * return a new stream over the cached byte array.This custom ServletInputStream
     * is needed because servlet containers require this type
     * read() reads from memory isFinished() returns true when done
     */
    @Override
    public ServletInputStream getInputStream() {
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(this.cachedBody);

        return new ServletInputStream() {
            @Override
            public int read() {
                return byteArrayInputStream.read();
            }

            @Override
            public boolean isFinished() {
                return byteArrayInputStream.available() == 0;
            }

            @Override
            public boolean isReady() {
                return true;
            }

            @Override
            public void setReadListener(ReadListener listener) {
            }
        };
    }

    public String getCachedBodyAsString() {
        return new String(cachedBody, StandardCharsets.UTF_8);
    }

    /**
     * This lets you change the body before it reaches the controller
     * 
     * Sets new value in the cachedBody
     * 
     * 
     */
    public void setModifiedBody(String newBody) {
        this.cachedBody = newBody.getBytes(StandardCharsets.UTF_8);
    }
}
