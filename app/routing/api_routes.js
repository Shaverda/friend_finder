var friends = require("../data/friends.json");

friends = [friends];

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json({
        	friends: friends
        });
    })

    app.post("api/friends", function(req, res){
    	console.log(req.body);
    	friends.push(req.body);
    	res.end;
    })
}
