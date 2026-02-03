



import React, { useState } from "react";
import { Container, Box, Paper, CssBaseline, Button, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Resources from "./pages/Resources";

function App() {
  const [result, setResult] = useState(null);
  const [page, setPage] = useState("home");

  const renderContent = () => {
    if (page === "about") return <About />;
    if (page === "features") return <Features />;
    if (page === "contact") return <Contact />;
    if (page === "help") return <Help />;
    if (page === "resources") return <Resources />;
    if (result) return <Dashboard data={result} onBack={() => setResult(null)} />;
    return <Upload onResult={setResult} />;
  };

  return (
    <>
      <CssBaseline />
      <NavBar page={page} setPage={setPage} />
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        {renderContent()}
      </Container>
      <Footer />
    </>
  );
}

export default App;
