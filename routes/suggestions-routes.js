import express from "express";
import { getSuggestions, postSuggestion } from "../controllers/suggestions-controller.js";

const suggestionsRoutes = express.Router();

suggestionsRoutes.route("/").get(getSuggestions).post(postSuggestion);

export default suggestionsRoutes;
