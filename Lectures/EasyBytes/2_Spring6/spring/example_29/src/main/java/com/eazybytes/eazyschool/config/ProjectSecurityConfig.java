package com.eazybytes.eazyschool.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class ProjectSecurityConfig {

    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {

        http.csrf((csrf) -> csrf.disable())

        /**
         * default is requests.anyRequest().authenticated()
         */
/*        http.authorizeHttpRequests(requests ->
                        requests.anyRequest().permitAll())
                .formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults());*/

        // Deny All Requests inside the Web Application
            /*
            http.authorizeHttpRequests(requests -> requests.anyRequest().denyAll())
                .formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults());
            */
                .authorizeHttpRequests((requests) -> requests
                        //methods not mentioned here are by default protected
                        .requestMatchers("/dashboard").authenticated()
                .requestMatchers("/", "/home").permitAll()
                .requestMatchers("/holidays/**").permitAll()
                .requestMatchers("/contact").permitAll()
                .requestMatchers("/saveMsg").permitAll()
                .requestMatchers("/courses").permitAll()
                .requestMatchers("/about").permitAll()
                        // this needs to be permitted as this is our login page
                .requestMatchers("/login").permitAll()
                .requestMatchers("/assets/**").permitAll())
                /**
                 * This adds custom LOgIN page
                 */
                .formLogin(loginConfigurer -> loginConfigurer.loginPage("/login")
                        /**
                         * pages for login success and login failure
                         */
                        .defaultSuccessUrl("/dashboard")
                        /**
                         * We need to permit this page otherwise user will keep on seeing /login page
                         */
                        .failureUrl("/login?error=true").permitAll())
                .logout(logoutConfigurer ->
                        logoutConfigurer
                                //url of successFul logout
                                .logoutSuccessUrl("/login?logout=true")
                                //invalidate the session and permitAll
                                .invalidateHttpSession(true).permitAll())
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {

        UserDetails user = User.withDefaultPasswordEncoder()
                .username("user")
                .password("12345")
                .roles("USER")
                .build();
        UserDetails admin = User.withDefaultPasswordEncoder()
                .username("admin")
                .password("54321")
                .roles("USER", "ADMIN")
                .build();
        return new InMemoryUserDetailsManager(user, admin);
    }

}
