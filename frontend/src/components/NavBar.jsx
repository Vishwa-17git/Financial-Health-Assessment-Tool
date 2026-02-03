import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemButton, Button, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'Home', icon: <HomeIcon /> },
    { key: 'features', label: 'Features' },
    { key: 'about', label: 'About' },
    { key: 'resources', label: 'Resources' },
    { key: 'help', label: 'Help' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #1976d2 60%, #f06292 100%)', boxShadow: '0 6px 30px rgba(25,118,210,0.15)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 800 }} onClick={() => setPage('home')}>
            Financial Health
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack direction="row" spacing={2} alignItems="center">
              {navItems.map((item) => (
                <Button key={item.key} color={page === item.key ? 'secondary' : 'inherit'} onClick={() => setPage(item.key)} sx={{ fontWeight: 600 }}>
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Box>

          <IconButton edge="end" color="inherit" sx={{ display: { md: 'none' } }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItem key={item.key} disablePadding>
                <ListItemButton onClick={() => { setPage(item.key); setOpen(false); }}>
                  {item.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
