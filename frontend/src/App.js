



import React, { useState } from "react";
import { Container, AppBar, Toolbar, Typography, Box, Paper, CssBaseline, Button, Stack } from "@mui/material";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Features from "./pages/Features";

function App() {
  const [result, setResult] = useState(null);
  const [page, setPage] = useState("home");

  const renderContent = () => {
    if (page === "about") return <About />;
    if (page === "features") return <Features />;
    if (result) return <Dashboard data={result} onBack={() => setResult(null)} />;
    return <Upload onResult={setResult} />;
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary" sx={{ background: 'linear-gradient(90deg, #1976d2 60%, #f06292 100%)', boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, cursor: "pointer", fontWeight: 800, letterSpacing: 1 }} onClick={() => setPage("home")}>Financial Health Assessment Tool</Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={() => setPage("features")} sx={{ fontWeight: 600, fontSize: 16 }}>Features</Button>
            <Button color="inherit" onClick={() => setPage("about")} sx={{ fontWeight: 600, fontSize: 16 }}>About</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        {renderContent()}
      </Container>
    </>
  );
}

export default App;
