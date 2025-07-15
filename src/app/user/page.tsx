'use client';
import React from 'react';
// import Huge from './Huge';
import dynamic from 'next/dynamic';

const Huge = dynamic(() => import('./Huge'), { loading: () => <p>Loading</p> });

function UserPage() {
  return (
    <div>
      UserPage
      <Huge />
    </div>
  );
}

export default UserPage;
