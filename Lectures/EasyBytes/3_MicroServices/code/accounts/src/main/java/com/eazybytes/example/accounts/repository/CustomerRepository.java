package com.eazybytes.example.accounts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eazybytes.example.accounts.entity.Customer;

/**
 * A Repository is an interface (or class) that provides methods for CRUD
 * operations and queries on entities.
 * It is usually an interface extending JpaRepository or CrudRepository.
 * Example: CustomerRepository.
 * 
 * And using this repository I'm going to interact with my customer database
 * table with the help of Spring Data JPA framework.
 * 
 * @Repository
 *             The @Repository annotation is used to indicate that the class is
 *             a Spring-managed bean responsible for data
 *             access and persistence operations. It is part of the stereotype
 *             annotations in Spring
 *             (@Component, @Service,@Controller, @Repository).
 * 
 * 
 *             Key Points:
 * 
 *             Exception Translation:
 *             When you annotate a class with @Repository, Spring automatically
 *             translates database-related exceptions
 *             (like SQL exceptions) into Spring’s unified unchecked exceptions
 *             (like DataAccessException). This makes error handling more
 *             consistent.
 * 
 *             Component Scanning:
 *             Classes annotated with @Repository are automatically detected and
 *             registered as beans during component scanning.
 * 
 *             Spring Data JPA Usage:
 *             In Spring Data JPA, repositories are typically interfaces (not
 *             classes) that extend JpaRepository or CrudRepository. This allows
 *             Spring
 *             to generate implementations at runtime, providing built-in CRUD
 *             and query methods.You get built-in methods for CRUD operations,
 *             such as:
 *             save()
 *             findById()
 *             findAll()
 *             deleteById()
 *             You can also define custom query methods by naming conventions
 *             (e.g., findByEmail(String email)).
 * 
 */
@Repository
// first arg is entity and second is dataType of primarykey
/**
 * At Run time spring will create implementation if this
 * in IntelliJ you cxan see all methods in this class my cmd + f12
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // You can define custom query methods here if needed

}
