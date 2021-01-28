
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	"projects": [
  	{ 
  		"name": "Waiting in line",
  	  	"image": "lorempixel.people.1.jpeg",
  	  	"id": "project1"
  	},  
  	{ 
  		"name": "Needfinding",
  	  	"image": "lorempixel.city.1.jpeg",
  	  	"id": "project2"
  	},
  	{
  		"name": "Ford GoBike Analysis",
  		"image": "lorempixel.people.2.jpeg",
  		"id": "project3"
  	},
  	{
  		"name": "2048 Clone",
  		"image": "lorempixel.technics.1.jpeg",
  		"id": "project4"
  	},
  	{
  		"name": "Nvidia Jetson Robot",
  		"image": "lorempixel.abstract.1.jpeg",
  		"id": "project5"
  	}
  	]
  });
};