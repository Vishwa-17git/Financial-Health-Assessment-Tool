import axios from "axios";

export const analyzeFile = async (file, industry = "retail") => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("industry", industry);

  try {
    const res = await axios.post("/analyze", formData, { headers: { "Content-Type": "multipart/form-data" } });
    return res.data;
  } catch (err) {
    // Bubble up server error message if present
    if (err.response && err.response.data && err.response.data.error) {
      throw new Error(err.response.data.error);
    }
    throw err;
  }
};
