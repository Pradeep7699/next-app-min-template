
"use client"
import React, { useState, useEffect } from 'react';
import { Grid } from '@mantine/core';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log("response",response)
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <Grid>
      {users.map((user) => (
        <Grid.Col key={user.id} span={3}>
          <UserCard user={user} onDelete={() => handleDeleteUser(user.id)} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default HomePage;
