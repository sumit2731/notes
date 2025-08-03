@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoggingInterceptor())
                .addPathPatterns("/api/**") // apply to specific paths
                .excludePathPatterns("/api/public/**"); // exclude some paths
    }
}