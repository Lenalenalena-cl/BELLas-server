// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import suggestionsRoutes from "./routes/suggestions-routes.js";
// import votesRoutes from "./routes/votes-routes.js";

// const app = express();

// const PORT = process.env.PORT || 8080;
// const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:";

// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());

// app.use("/suggestions", suggestionsRoutes);
// app.use("/votes", votesRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on ${BACKEND_URL}${PORT}`);
// });
import express from "express";
import cors from "cors";
import "dotenv/config";
import suggestionsRoutes from "./routes/suggestions-routes.js";
import votesRoutes from "./routes/votes-routes.js";

const app = express();

const PORT = process.env.PORT || 8080;
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to the Bell Changemakers server");
});

app.use("/suggestions", suggestionsRoutes);
app.use("/votes", votesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${BACKEND_URL}`);
});
