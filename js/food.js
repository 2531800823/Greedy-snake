
(function () {
    var element= []

function Food(options) {

    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 20;
    
    this.height = options.height || 20;
    this.backgroundColor = options.backgroundColor || 'green';
    
}

Food.prototype.render = function (map) {
    
    this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
    remove();
    //先创建一个div子元素
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px'
    div.style.top = this.y + 'px';
    div.style.backgroundColor = this.backgroundColor;

    element.push(div);
    map.appendChild(div);
}

function remove() {
    for (let i = 0; i < element.length; i++){
        element[element.length - 1].remove();
        element.pop();
    }
}
    window.Food =  Food
})()


