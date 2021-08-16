
 (function () {

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }

    Game.prototype.start = function () {
        //把 蛇 和食物渲染到 map 上
        this.food.render(this.map);
        this.snake.render(this.map);
        //开始游戏逻辑
        // 开始定时器自动移动
        runSnake.apply(this);
        
        //键盘事件
        keyCode.apply(this);

     }
     
     function runSnake() {
         var timerId = setInterval(() => {
             this.snake.move(this.food,this.map);
             this.snake.render(this.map);
             
             //判断蛇边界
             var maxX = this.map.offsetWidth;
             var maxY = this.map.offsetHeight;
             var headY = (this.snake.body[0].y + 1) * this.snake.height;
             var headX = (this.snake.body[0].x + 1) * this.snake.width;
            if (maxX < headX || headX-1 < 0) {
                alert("Game Over");
                clearInterval(timerId);
             }
             if (maxY < headY || headY-1 < 0) {
                 alert("Game Over");
                 clearInterval(timerId);
              }


         }, 150);

         
     }

     function keyCode() {
         window.onkeyup =  (e)=> {
             var key = e.keyCode;
             switch (key) {
                 case 37:
                     if(this.snake.direction !== 'right')
                     this.snake.direction = 'left';
                     break;
                 case 38:
                    if(this.snake.direction !== 'bottom')
                        this.snake.direction = 'top';
                     break;
                 case 39:
                    if(this.snake.direction !== 'left')
                        this.snake.direction = 'right';
                     break;
                 case 40:
                    if(this.snake.direction !== 'top')
                        this.snake.direction = 'bottom';
                        break;
             }
        }
     }

    window.Game =  Game;
})()



