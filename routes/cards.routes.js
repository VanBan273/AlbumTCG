const router = require("express").Router();
resolve = require('path').resolve


const isLoggedIn = require("../middleware/isLoggedIn");
const Card = require(("../models/Cards.model.js"));
const User = require("../models/User.model");
const Api = require("../services/ApiHandler");
const CardsAPI = new Api()

router.get('/cards',(req, res)=>{
    
    CardsAPI.getAllCards()
    .then(allCards =>
     res.render("cards/list", {cards: allCards.data}) 
     //res.send(allCards.data)
    )
     
})





router.post("/add-favorite", isLoggedIn ,(req, res) =>{
const query = { name, image, } = req.body
const idToCheck = req.body.apiId;

console.log(idToCheck)
    Card.find({apiId: idToCheck})
	.then (cardArray => {

        
		//comprobar si ese apiId ya esta en db cards
		if (cardArray.length === 0) {
            Card
                .create(query)
                .then(result => {
                    console.log(result)
                  User
                    .findByIdAndUpdate(req.user._id,{$push : {favorites : result._id}})
                    .then(()=>{
                        res.redirect("/cards")
                        return
                    })
                })
                .catch(err => console.log(err))
        } else {
			User
            .findById(req.user._id)
            .then((user)=>{
                if (!user.favorites.includes(cardArray[0]._id)){
                    User
                    .findByIdAndUpdate(req.user._id,{$push : {favorites : cardArray[0]._id}})
                    .then(()=>{
                        res.redirect("/cards")
                    })
                }else{res.redirect("/cards")}
            })
            .catch((err)=>{
            console.log(err)
            })
            
            
            
		}
	}) 
})


router.post("/delete-favorite",isLoggedIn,(req,res)=>{
    const {id} = req.body
    User.findByIdAndUpdate(req.user._id,{$pull : {favorites : id}})
    .then(()=>{
        res.redirect("/profile")
    })
    .catch(err => console.log(err))
})

/**
 * ---arrays
{ field: { $in: [ value1, value2, ..... , valueN ] } }
{ field: { $nin: [ value1, value2, ..... , valueN ] } }
{ field: { $all: [ value1, value2, ..... , valueN ] } }
 */

router.get("/busqueda",(req,res) =>{
    //console.log(req.query.search)
    CardsAPI.getCardByName(req.query.search)
    .then(Card =>{
     res.render("cards/list", {cards: Card.data})
    });
})
CardsAPI.getCardByName()

module.exports = router;
