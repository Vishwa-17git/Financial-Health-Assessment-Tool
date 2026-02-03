import React from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const faqs = [
  { q: 'What file formats are supported?', a: 'We accept CSV files with basic financial statements.' },
  { q: 'How is the health score calculated?', a: 'The score is computed from multiple financial ratios and AI-based risk analysis.' },
  { q: 'Is my data stored?', a: 'Files are used for analysis and not stored long-term by default.' }
];

export default function Help() {
  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{ maxWidth: 700, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            Help & FAQs
          </Typography>
          <List>
            {faqs.map((f, i) => (
              <ListItem key={i}>
                <ListItemText primary={f.q} secondary={f.a} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
