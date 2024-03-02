
"use client"
import React, { useState, useEffect } from 'react';
import { Grid } from '@mantine/core';
import UserCard from './UserCard';



export default function HomePage() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null); // You can handle error messages if needed

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
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      // setError('Failed to fetch users');
      setLoading(false);
    }
  };

  const handleDeleteUser = (userId:any) => {
    setUsers(users.filter((user:any) => user.id !== userId));
  };

  return(
    <Grid>
    {users.map((user:any) => (
      <Grid.Col key={user.id} span={12} >
        <UserCard user={user} onDelete={() => handleDeleteUser(user.id)} />
      </Grid.Col>
    ))}
  </Grid>     
     
)
}
