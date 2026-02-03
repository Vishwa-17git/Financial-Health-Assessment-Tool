import React from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, Link } from '@mui/material';

export default function Resources() {
  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{ maxWidth: 900, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            Resources
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Explore guides, templates and benchmark reports to help you better understand your financials.
          </Typography>
          <List>
            <ListItem>
              <Link href="#" underline="hover">Financial Ratio Cheat Sheet</Link>
            </ListItem>
            <ListItem>
              <Link href="#" underline="hover">Industry Benchmark Report</Link>
            </ListItem>
            <ListItem>
              <Link href="#" underline="hover">Sample Data Template (CSV)</Link>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
