package com.APISpring.service;

import com.APISpring.models.User;
import com.APISpring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public Optional<User> getUser(Long id){
        return userRepository.findById(id);
    }

    public void save(User user){
        userRepository.save(user);
    }

    public void delete(Long id){
        userRepository.deleteById(id);
    }

    public void updateUser(Long id, User updatedUser) {
        Optional<User> existingUser = userRepository.findById(id);
        if(existingUser.isPresent()){
            User user = existingUser.get();
            user.setFirstName(updatedUser.getFirstName());
            user.setEmail(updatedUser.getEmail());
            user.setLastName(updatedUser.getLastName());

            userRepository.save(user);
        }
    }

}
