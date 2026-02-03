import React from 'react';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{ maxWidth: 700, mx: 'auto', p: 2 }}>
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Need help or have feedback? Send us a message and we'll respond as soon as possible.
          </Typography>

          <Box component="form" noValidate sx={{ display: 'grid', gap: 2 }}>
            <TextField label="Name" fullWidth />
            <TextField label="Email" type="email" fullWidth />
            <TextField label="Message" multiline rows={4} fullWidth />
            <Button variant="contained">Send Message</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
