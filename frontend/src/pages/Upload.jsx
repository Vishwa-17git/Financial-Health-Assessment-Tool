import React, { useState } from "react";
import { analyzeFile } from "../api";
import {
  Box,
  Typography,
  Button,
  Paper,
  LinearProgress,
  Alert,
  Fade
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function Upload({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setError("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const submit = async () => {
    if (!file) {
      setError("Please select a file to analyze.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await analyzeFile(file);
      onResult(result);

    } catch (err) {
      // Prefer server-provided message
      const msg = err?.message || "Failed to analyze file. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)",
        py: 6,
        px: 2,
        borderRadius: 4
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, color: "#1976d2" }}
      >
        Financial Health Assessment
      </Typography>

      <Fade in>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            mb: 3,
            border: "2.5px dashed #1976d2",
            textAlign: "center",
            background: "rgba(255,255,255,0.95)",
            cursor: "pointer",
            borderRadius: 5
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <CloudUploadIcon sx={{ fontSize: 64, color: "#1976d2", mb: 1 }} />

          <Typography sx={{ mt: 1, fontSize: 18 }}>
            Drag & drop your financial file here, or
          </Typography>

          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2, px: 4, py: 1.5 }}
          >
            Select File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>

          {file && (
            <Typography sx={{ mt: 2, color: "#1976d2" }}>
              Selected: {file.name}
            </Typography>
          )}
        </Paper>
      </Fade>

      {error && (
        <Fade in>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Fade>
      )}

      <Button
        variant="contained"
        fullWidth
        size="large"
        onClick={submit}
        disabled={loading}
        sx={{ fontSize: 18, py: 1.5 }}
      >
        Analyze
      </Button>

      {loading && (
        <LinearProgress sx={{ mt: 3, height: 8, borderRadius: 5 }} />
      )}
    </Box>
  );
}
