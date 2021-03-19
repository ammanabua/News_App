const express = require("express"),
	  axios = require("axios"),
	  newsr = express.Router(),
	  moment = require("moment"),
	  math = require("math");

newsr.get("/", async(req,res)=>{
	try {
		var url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=a8dfb8be52c645d88610cc3d646c14c7';
		
		const news_get = await axios.get(url);
		res.render("news", {articles:news_get.data.articles});
		
	} catch (error) {
		if(error.response){
			console.log(error);
		}
	}
});


newsr.post("/search", async(req,res)=>{
	const search = req.body.search
	
	try {
		var url = `http://newsapi.org/v2/everything?q=${search}&apiKey={YOUR_API}`;
		
		const news_get = await axios.get(url);
		res.render("news",{articles:news_get.data.articles});
		
	} catch (error) {
		if(error.response){
			console.log(error);
		}
	}
	
});


module.exports = newsr;










