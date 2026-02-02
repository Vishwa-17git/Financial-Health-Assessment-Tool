

import ScoreCard from "../components/ScoreCard";
import Chart from "../components/Chart";
import { Box, Typography, Button, Card, CardContent, Divider, Fade, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Dashboard({ data, onBack }) {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fce4ec 0%, #e3f2fd 100%)',
      py: 6,
      px: 2,
      borderRadius: 4
    }}>
      <Fade in>
        <Paper elevation={4} sx={{ p: 4, mb: 3, borderRadius: 5, background: 'rgba(255,255,255,0.97)', boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.10)' }}>
          <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2, fontWeight: 600, fontSize: 16, borderRadius: 2 }}>
            Back
          </Button>
          <ScoreCard score={data.health_score} />
          <Chart metrics={data.metrics} />
          <Card sx={{ mt: 4, background: "#f9fbe7", borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
                AI Insights
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" sx={{ whiteSpace: "pre-line", fontSize: 17, color: '#333' }}>
                {data.ai_insights}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Fade>
    </Box>
  );
}
