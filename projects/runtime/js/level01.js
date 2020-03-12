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
                { "type": "neo", "x": 500, "y": groundY},
                { "type": "neo", "x": 800, "y": 200},
                { "type": "neo", "x": 1300, "y": groundY},
                { "type": "neo", "x": 1600, "y": groundY},
                { "type": "neo", "x": 2300, "y": 200},
                { "type": "neo", "x": 2600, "y": groundY},
                { "type": "neo", "x": 3000, "y": 200}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createNeoObstacle (x, y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var neoObstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            neoObstacleHitZone.x = x;
            neoObstacleHitZone.y = y;
            
            game.addGameItem(neoObstacleHitZone);
            
            var obstacleImage = draw.bitmap('img/neo obstacle.png');
            neoObstacleHitZone.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -50;
            
        }
        
        function createRyanObstacle(x, y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var ryanObstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            ryanObstacleHitZone.x = x;
            ryanObstacleHitZone.y = y;
            
            game.addGameItem(ryanObstacleHitZone);
            
            var obstacleImage = draw.bitmap('img/neo obstacle.png');
            ryanObstacleHitZone.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -50;
        }
        
        function createApeachObsatcle(x, y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var apeachObstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            apeachObstacleHitZone.x = x;
            apeachObstacleHitZone.y = y;
            
            game.addGameItem(apeachObstacleHitZone);
            
            var obstacleImage = draw.bitmap('img/neo obstacle.png');
            apeachObstacleHitZone.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -50;
        }
        
        //i want the obstacles to do the same thing as the background buildings
        
        
        /*
        createSawBlade(400, 300);
        createSawBlade(900, 215);
        createSawBlade(1400, 300);
        */
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var firstGameItemObject = levelData.gameItems[i];
            
            var firstX = firstGameItemObject.x;
            var firstY = firstGameItemObject.y;
            
            createNeoObstacle(firstX, firstY);
        }
        
        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy', 25);
            var neoYarnEnemy = draw.bitmap('img/neo level projectile.png');
            neoYarnEnemy.x = -25;
            neoYarnEnemy.y = -25;
            enemy.addChild(neoYarnEnemy);
        
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
            var lvl1Reward = draw.bitmap('img/kakao friends reward.png');
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
