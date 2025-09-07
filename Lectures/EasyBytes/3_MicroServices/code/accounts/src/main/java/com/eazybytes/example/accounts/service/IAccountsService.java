package com.eazybytes.example.accounts.service;

import com.eazybytes.example.accounts.dto.CustomerDto;

public interface IAccountsService {
    void createAccount(CustomerDto customerDto);
}
