const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const cardSchema = new Schema(
  {
    name: String,
    images:String,
    apiId:String,

  },
  {
    timestamps: true,
  }
);





 const Card = model("Card", cardSchema);

module.exports = Card