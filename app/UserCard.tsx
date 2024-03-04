import React, { useState } from 'react';
import Link from 'next/link';
import { Card, Avatar, Text, Grid, Button, Tooltip } from '@mantine/core';
import { IconMail, IconPhoneCall, IconWorld, IconTrash, IconUserPlus, IconUser, IconStar } from '@tabler/icons-react';
import styles from './UserCard.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Props {
  user: User;
  onDelete: (userId: number) => void;
}

const UserCard: React.FC<Props> = ({ user, onDelete }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    setIsFollowed(prevState => !prevState); // Toggle the follow status
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <Grid.Col span={3}>
      <Card shadow="lg" padding="sm" style={{ marginLeft:"10px", border: "1px solid #e0e0e0", width: "400px", height: "360px", borderRadius: "10px"}}>
        <div style={{ marginTop: "20px", marginLeft: "130px" }}>
        <Tooltip style={{ placement:"top",}}  label={user.name}>
          <Avatar
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
            alt={user.name}
            style={{ width: 120, height: 120, marginBottom: 16,cursor: 'pointer'}}
          />
           </Tooltip>
        </div>
      
          <Text style={{ marginLeft: "135px", marginTop: "2px", fontWeight: "bold" }}>{user.name} {isFollowed && <IconStar size={18} stroke={2} />}</Text>
       
        <Link target="_blank" href={`mailto:${user.email}`} passHref style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: "10px", marginTop: "5px", cursor: 'pointer', color: 'black' }}>
            <IconMail size={20} style={{ marginRight: '5px' }} />
            <Text >{user.email}</Text>
          </div>
        </Link>
        <Link target="_blank" href={`tel:${user.phone}`} passHref style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: "10px", marginTop: "5px", cursor: 'pointer', color: 'black' }}>
            <IconPhoneCall size={20} style={{ marginRight: '5px' }} />
            <Text>{user.phone}</Text>
          </div>
        </Link>
        <Link target="_blank" href={user.website} passHref style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: "10px", marginTop: "5px", cursor: 'pointer', color: 'black' }}>
            <IconWorld size={20} style={{ marginRight: '5px' }} />
            <Text>{user.website}</Text>
          </div>
        </Link>

    <div style={{ marginTop: "12px" }}>
       {
      isFollowed ?
      <Button style={{ marginLeft: "10px", marginTop: "5px",width:"170px"}} variant="outline"  onClick={handleFollow} >
     <IconUser size={18} />  <div style={{ marginLeft: "10px"}}>Unfollow </div>
    </Button>  : <Button style={{ marginLeft: "10px", marginTop: "5px",width:"170px"}} onClick={handleFollow} >
     <IconUserPlus size={18} /> <div style={{ marginLeft: "10px"}}> Follow </div></Button>
          }
     <Button onClick={handleDelete} variant="outline"  style={{ marginLeft: "10px", marginTop: "5px" ,width:"170px"}}> <IconTrash size={18} /> <div style={{ marginLeft: "10px"}}>Delete</div></Button>
        </div>
      </Card>
    </Grid.Col>
  );
};

export default UserCard;
