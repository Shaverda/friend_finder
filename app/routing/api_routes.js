var friends = require("../data/friends.js");


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json({
            friends: friends
        });
    })

    app.post("/api/friends", function(req, res){
        var lowest_difference = 10;
        var match;
        friends.forEach(function(friend) {
            for (var i = 0; i < 10; i++){
                var difference = 0;
                difference+= Math.abs(friend.answers[i] - req.body.answers[i]);
                if (lowest_difference > difference){
                    lowest_difference = difference;
                    match = friend;
                }
 
            }
        })
        friends.push(req.body);
        res.json(match);
    })

}