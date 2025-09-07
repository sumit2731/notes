package com.eazybytes.example.accounts.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * The @Entity annotation marks the Customer class as a JPA entity. This means:
 * The class will be mapped to a table in the database.
 * JPA/Hibernate will manage this class for persistence operations (CRUD).
 */

@Entity
/**
 * use this if class name is diffrent than table name
 */
// @Table(name = "customer1")
/**
 * we have not used @Data because it generates hashcode and equals methods also.
 * which create issues for Spring data JPA Framework
 */
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Customer extends BaseEntity {
    @Id // this is primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // generate unique value automatically when new record is
                                                        // inserted
    @Column(name = "customer_id") // column name is this
    private Long customerId;

    private String name;

    private String email;

    private String mobileNumber;

}
