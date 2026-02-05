import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{ maxWidth: 700, mx: "auto", borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            About Financial Health Assessment Tool
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            This tool helps you analyze your company's financial health by uploading your financial data. It provides insights, benchmarks, and a comprehensive health score, making it easier to understand your business performance and risks.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Version 1.0.0 | Powered by Modern Web Technologies
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
