package com.APISpring.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="tbl_users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(name = "email_address", unique = true,  nullable = false)
    private String email;

}
