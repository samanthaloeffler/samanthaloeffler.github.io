var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "con", "x": 400, "y": groundY},
                { "type": "ryan", "x": 700, "y": groundY},
                { "type": "ryan", "x": 1000, "y": 215},
                { "type": "con", "x": 1300, "y": groundY},
                { "type": "ryan", "x": 1600, "y": 215},
                { "type": "con", "x": 1900, "y": groundY},
                { "type": "con", "x": 2200, "y": groundY},
                { "type": "ryan", "x": 2500, "y": 215},
                { "type": "con", "x": 2800, "y": 215},
                { "type": "ryan", "x": 3100, "y": groundY},
                { "type": "con", "x": 3400, "y": 215},
                { "type": "con", "x": 3700, "y": groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createCon (x, y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var conHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            conHitZone.x = x;
            conHitZone.y = y;
            
            game.addGameItem(conHitZone);
            
            var obstacleImage = draw.bitmap('img/con 2.png');
            conHitZone.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        
        function createRyan (x, y) {
            var hitZoneSize = 30; 
            var damageFromObstacle = 20;
            var ryanHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            ryanHitZone.x = x;
            ryanHitZone.y = y;
            
            game.addGameItem(ryanHitZone);
            
            var obstacleImage = draw.bitmap('img/ryan 2.png');
            ryanHitZone.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        }
        
        /*
        createSawBlade(400, 300);
        createSawBlade(900, 215);
        createSawBlade(1400, 300);
        */
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var firstGameItemObject = levelData.gameItems[i];
            
            var firstX = firstGameItemObject.x;
            var firstY = firstGameItemObject.y;
            
            createCon(firstX, firstY);
            //how to add ryan to the obstacles??
        }
        
        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy', 25);
            var ryanEnemy = draw.bitmap('img/ryan 2.png');
            ryanEnemy.x = -25;
            ryanEnemy.y = -25;
            enemy.addChild(ryanEnemy);
        
            enemy.x = x;
            enemy.y = y;
        
            game.addGameItem(enemy);
            
            enemy.velocityX = -2;
        
            enemy.rotationalVelocity = -10;
        
            enemy.onPlayerCollision = function () {
            game.changeIntegrity(-25);
            enemy.fadeOut();
            };
        
            enemy.onProjectileCollision = function () {
            game.increaseScore(50);
            enemy.shrink();
        };
        
        }
        
        createEnemy(1000, groundY - 50);
        createEnemy(2000, groundY - 50);
        createEnemy(3000, groundY - 50);
        
        function createReward(x, y) {
            var reward = game.createGameItem('reward', 20);
            var lvl1Reward = draw.bitmap('img/kakao friends reward.jpg');
            lvl1Reward.x = -25;
            lvl1Reward.y = -25;
            reward.addChild(lvl1Reward);
            
            reward.x = x;
            reward.y = y;
            
            game.addGameItem(reward);
            
            reward.velocityX = -2;
            
            reward.onPlayerCollision = function() {
                game.increaseScore(100);
                reward.fadeOut();
            };
            
        }
        
        createReward(3900, groundY - 150);
        
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
