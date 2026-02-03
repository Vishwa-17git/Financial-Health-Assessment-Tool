import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, py: 4, textAlign: 'center', background: 'linear-gradient(90deg, rgba(25,118,210,0.06), rgba(240,98,146,0.02))' }}>
      <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Financial Health Assessment Tool</Typography>
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Privacy</Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Terms</Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Contact</Link>
      </Typography>
    </Box>
  );
}
