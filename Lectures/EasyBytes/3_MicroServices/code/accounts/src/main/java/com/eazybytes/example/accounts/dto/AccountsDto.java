package com.eazybytes.example.accounts.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class AccountsDto {
    private String accountNumber;

    private String accountType;

    private String branchAddress;
}
