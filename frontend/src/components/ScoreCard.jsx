
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material";

export default function ScoreCard({ score }) {
  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 4, borderRadius: 4, boxShadow: 4, background: "linear-gradient(120deg, #e3fcec 0%, #e3f2fd 100%)" }}>
      <CardContent>
        <Typography variant="h5" color="primary" align="center" gutterBottom sx={{ fontWeight: 700, letterSpacing: 1 }}>
          Health Score
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h1" color="success.main" sx={{ fontWeight: 800, mb: 1, textShadow: '0 2px 8px #b2dfdb' }}>
            {score}
            <Typography variant="h5" component="span" color="text.secondary">/100</Typography>
          </Typography>
          <Box sx={{ width: "90%", mt: 2 }}>
            <LinearProgress variant="determinate" value={score} color="success" sx={{ height: 14, borderRadius: 7, background: '#e0e0e0' }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
