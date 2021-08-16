
//自定义函数 防止命名冲突
(function () {
    
    var arr = [];

    function Snake(options) {
        options = options || {}
        this.width = options.width || 20;
        this.height = options.height || 20;

        this.direction = options.dircetion || 'right';

        this.body = [
            { x: 3, y: 2, color: 'red' },
            { x: 2, y: 2, color: 'blue' },
            { x: 1, y: 2, color: 'blue' },
        ];
    }

    // 渲染
    Snake.prototype.render = function (map) {
        remove();

        this.body.forEach(item => {
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.width = this.width +'px';
            div.style.height = this.height + 'px';
            div.style.left = item.x * this.width + 'px';
            div.style.top = item.y * this.width + 'px';
            div.style.backgroundColor = item.color;

            map.appendChild(div);
            arr.push(div);
        })
    }

    function remove() {
        arr.forEach(item => item.remove());
        arr = [];
    }

    //让蛇走起来
    Snake.prototype.move = function (food,map) {
        food = food || {};
        
        for (let i = this.body.length - 1; i >= 1; i--){
            // console.log(this.body.length - 1);
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
            case 'right':
                this.body[0].x += 1;
                break;
            case 'left':
                this.body[0].x -= 1;
                break;
            case 'top':
                this.body[0].y -= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;
        }

        // food.render(map)

        var headx = this.body[0].x * this.width;
        var heady = this.body[0].y * this.height;
        if (headx === food.x && heady === food.y) {
            var last = { ...this.body[this.body.length - 1] };
            this.body.push(last);
            food.render(map)
        }
    }

    window.Snake = Snake;
})()

