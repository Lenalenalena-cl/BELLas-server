import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getVotes = async (req, res) => {
  try {
    const data = await knex("votes");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Error retrieving votes");
  }
};

const postVote = async (req, res) => {
  const { suggestion_id, email, optin } = req.body;

  // validate submission here
  if (!suggestion_id || !email || !optin) {
    return res.status(400).json({ message: "suggestion_id, email, or optin shouldn't be empty" });
  }

  const votes = await knex("votes");
  const alreadyVoted = votes.find((vote) => {
    return vote.email === email;
  });
  if (alreadyVoted) {
    return res.status(400).json({ message: "Already voted" });
  }

  try {
    const result = await knex("votes").insert({
      suggestion_id,
      email,
      optin,
    });

    await knex("suggestions").where("id", suggestion_id).increment("votes", 1); // Increment the votes count by 1

    res.status(201).json({ message: "Voting successful" });
  } catch (error) {
    res.status(500).json({
      message: `Unable to submit suggestion: ${error}`,
    });
  }
};

export { getVotes, postVote };
