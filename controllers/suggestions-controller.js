import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getSuggestions = async (req, res) => {
  try {
    const data = await knex("suggestions");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Error retrieving suggestions");
  }
};

const postSuggestion = async (req, res) => {
  const { name, email, suggestion, votes = 0} = req.body;
  // validate submission here
  if (!name || !email || !suggestion){
    return res.status(400).json({ message: "Name, Email or suggestion shouldnt be empty"})
  }

  try {
    const result = await knex("suggestions").insert({
      name,
      email, 
      suggestion,
      votes
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: `Unable to submit suggestion: ${error}`,
    });
  }
};

export { getSuggestions, postSuggestion };
