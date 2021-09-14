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


cardSchema.pre("save", function(next) {
  // console.log(this)

  const nameToUpper = this.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')

  this.name = nameToUpper

    next();
});


// const Character = model("Character", userSchema);

module.exports = model("Card", cardSchema);