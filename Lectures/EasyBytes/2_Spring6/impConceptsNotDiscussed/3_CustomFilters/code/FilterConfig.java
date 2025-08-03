@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<MyFilter> loggingFilter() {
        FilterRegistrationBean<MyFilter> reg = new FilterRegistrationBean<>();
        reg.setFilter(new MyFilter());
        reg.addUrlPatterns("/api/*");
        reg.setOrder(1); // Lower order = higher priority
        return reg;
    }
}