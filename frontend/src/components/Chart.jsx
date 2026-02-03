
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

export default function Chart({ metrics }) {
  const data = [
    { name: "Revenue", value: metrics.revenue },
    { name: "Expenses", value: metrics.expenses },
    { name: "Profit", value: metrics.profit }
  ];

  return (
    <Card sx={{ mt: 4, borderRadius: 4, boxShadow: 3, background: 'linear-gradient(120deg, #fce4ec 0%, #e3f2fd 100%)' }}>
      <CardContent>
        <Typography variant="h5" color="primary" align="center" gutterBottom sx={{ fontWeight: 700, letterSpacing: 1 }}>
          Financial Metrics
        </Typography>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" tick={{ fontSize: 16, fontWeight: 600 }} />
            <YAxis tick={{ fontSize: 15 }} />
            <Tooltip wrapperStyle={{ fontSize: 16 }} />
            <Legend wrapperStyle={{ fontSize: 16 }} />
            <Bar dataKey="value" fill="#1976d2" radius={[12, 12, 0, 0]} barSize={48} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
