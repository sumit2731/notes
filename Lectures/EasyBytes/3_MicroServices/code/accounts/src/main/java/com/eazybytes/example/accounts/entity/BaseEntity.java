package com.eazybytes.example.accounts.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
/* 
 * lets you define reusable fields and mappings for entities without creating a separate table for the superclass.
 */

@MappedSuperclass
@Getter
@Setter
@ToString
public class BaseEntity {
    /**
     * Name means name of column corrosponding to this field, since here name is
     * same as field name this is not required
     * updatable = false means this column cannot be updated, once created
     */
    // @Column(name = "created_at", updatable = false)
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @Column(updatable = false)
    private String createdBy;

    /**
     * Please do not populate this field when record is inserted first time
     */
    @Column(insertable = false)
    private LocalDateTime updatedAt;

    @Column(insertable = false)
    private String updatedBy;
}
