import {
  getSession,
  getUserDetails,
  getSubscription
} from '@/app/supabase-server';
import React from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default async function UserImage() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);
  return userDetails?.avatar_url ? (
    <Avatar className="h-9 w-9 ">
    <AvatarImage src={userDetails.avatar_url} alt="AV" />
    <AvatarFallback>AV</AvatarFallback>
  </Avatar>
     ):('')
}

