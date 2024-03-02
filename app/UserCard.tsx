import React, { useState } from 'react';
import Link from 'next/link';
import { Card, Avatar, Text, Grid, Button } from '@mantine/core';

const UserCard = ({ user, onDelete }: any) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    setIsFollowed(prevState => !prevState); // Toggle the follow status
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <Grid.Col span={12}>
      <Card shadow="sm" padding="md" style={{ marginBottom: 16 }}>
        <div style={{ marginTop: 30 }}>
          <Avatar
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
            alt={user.name}
            style={{ width: 100, height: 100, marginBottom: 16 }}
          />
        </div>
        <Text style={{ marginLeft: "10px", marginTop: "10px" }}>{user.name} {isFollowed && <span style={{ color: 'gold' }}>⭐</span>}</Text>
        <Link target="_blank"  href={`mailto:${user.email}`} passHref>
          <Text style={{ marginLeft: "10px", marginTop: "5px", cursor: 'pointer', color: 'black' }}>{user.email}</Text>
        </Link>
        <Link target="_blank"  href={`tel:${user.phone}`} passHref>
          <Text style={{ marginLeft: "10px", marginTop: "5px", cursor: 'pointer', color: 'black' }}>{user.phone}</Text>
        </Link>
        <Link target="_blank" href={user.website} passHref>
          <Text style={{ marginLeft: "10px", marginTop: "5px", cursor: 'pointer', color: 'black', textDecoration: 'underline' }} >{user.website}</Text>
        </Link>

        <div style={{ marginTop: 16 }}>
          <Button style={{ marginLeft: "10px", marginTop: "5px" }} onClick={handleFollow} variant="outline">{isFollowed ? 'Unfollow' : 'Follow'}</Button>
          <Button onClick={handleDelete} variant="outline" color="red" style={{ marginLeft: "10px", marginTop: "5px" }}>Delete</Button>
        </div>
      </Card>
    </Grid.Col>
  );
};

export default UserCard;
