'use client';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function contentsList() {
  return (
    <>
      <h1>Contetns</h1>
      <p>CONTENTS_BUCKET_NAME : {process.env.CONTENTS_BUCKET_NAME}</p>
      <p>CONTENTS_URL : {process.env.CONTENTS_URL}</p>
    </>
  );
}
