import express from "express";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/usuarios", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
