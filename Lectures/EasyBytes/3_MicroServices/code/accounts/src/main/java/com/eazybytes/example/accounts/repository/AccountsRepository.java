package com.eazybytes.example.accounts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eazybytes.example.accounts.entity.Accounts;

@Repository
public interface AccountsRepository extends JpaRepository<Accounts, String> {

}
