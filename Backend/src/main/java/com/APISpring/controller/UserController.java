package com.APISpring.controller;

import com.APISpring.models.User;
import com.APISpring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path ="api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll(){
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public Optional<User> getById(@PathVariable("userId") Long userId){
       return userService.getUser(userId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody User user){
        userService.save(user);
    }

    @DeleteMapping("/{userId}")
    public void saveUpdate(@PathVariable("userId") Long userId){
        userService.delete(userId);
    }

    @PutMapping("/{userId}")
    public void update(@PathVariable("userId") Long userId, @RequestBody User user){
        userService.updateUser(userId, user);
    }


}
