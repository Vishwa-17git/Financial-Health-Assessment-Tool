import React from "react";
import { Box, Typography, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  "Automated financial analysis",
  "Industry benchmarking",
  "Comprehensive health score",
  "Interactive charts and insights",
  "Secure file upload",
  "Modern, responsive design"
];

export default function Features() {
  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{ maxWidth: 700, mx: "auto", borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            Features
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {features.map((feature, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
