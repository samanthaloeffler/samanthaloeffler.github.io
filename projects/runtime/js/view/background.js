var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var frontBuild;
        
        var buildings = [];
        
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();
            

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.bitmap('img/kakao yellow background.jpg');
            background.addChild(backgroundFill);
            
            backgroundFill.x = canvasWidth;
          
           

 
            
            // TODO: 3 - Add a moon and starfield
            /*var moon = draw.bitmap('img/moon.png');
            moon.x = 600;
            moon.y = 25;
            moon.scaleX = 0.2;
            moon.scaleY = 0.2;
            background.addChild(moon);*/
            
            var kakaoSign = draw.bitmap('img/kakao run (2).png');
            kakaoSign.x = 500;
            kakaoSign.y = 20;
            background.addChild(kakaoSign);
            
           /* var circle;
            for(var i = 0; i < 100; i++) {
                circle = draw.circle(1, 'white', 'LightGray', 0.2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle);
            }*/
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; ++i) {
               
                
                    //if (building.x < 4000) {
                    
                        var building = draw.bitmap('img/neo background building.png');
                        
                            building.x = 300 * i;
                            building.y = groundY - 175;
                            background.addChild(building);
                            buildings.push(building);
                //}
                
               /* if (building.x >= 4000) {
                
                    var building = draw.bitmap('img/ryan background building.png');
                    
                        building.x = (300 * i);
                        building.y = groundY - 100;
                        background.addChild(building);
                        buildings.push(building);
                }   
                  */
               /* var building = draw.bitmap('img/apeach background building.png');
                    
                    building.x = (300 * i);
                    building.y = groundY - 100;
                    background.addChild(building);
                    buildings.push(building);
                    
                 var building = draw.bitmap('img/game complete.png');
                
                    building.x = (600 * i);
                    building.y = groundY - 100;
                    background.addChild(building);
                    buildings.push(building);*/
                
            } //i want each of the buildings to start after a certain length of x has been reached. one complete level is 4000 for x, so the new ones start at 4000 and 8000.
            
            // TODO 4: Part 1 - Add a tree
            frontBuild = draw.bitmap('img/neo front building.png');
            frontBuild.x = 300;
            frontBuild.y = groundY - 150;
            background.addChild(frontBuild);
            
            /*frontBuild = draw.bitmap('img/ryan front building.png');
            frontBuild.x = 4700;
            frontBuild.y = groundY;
            background.addChild(frontBuild);
            
            frontBuild = draw.bitmap('img/apeach front building.png');
            frontBuild.x = 9000;
            frontBuild.y = groundY;
            background.addChild(frontBuild);
            */
            //for the commented out front images, i want them to correlate with the level, so the ryan front with the ryan background, i just dont understand how to transition them
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            frontBuild.x = frontBuild.x - 2;
            
            if(frontBuild.x < -200) {
                frontBuild.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x = building.x - 0.5;
                if(building.x < -75) {
                    building.x = canvasWidth;
                }
                
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
