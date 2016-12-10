function Enemy(){
this.ele = document.createElement("div");
this.ele.className = "enemy-large";
this.speed = Enemy.prototype.Enemy_Speed_Large;
gameEngine.ele.appendChild(this.ele);
	// 随机位置 [0, 游戏背景宽度 - 自身敌机宽度)
	var x = parseInt(Math.random() * (gameEngine.ele.offsetWidth - this.ele.offsetWidth))
	var y = -1 * this.ele.offsetHeight;
	
	this.ele.style.left = x + "px";
	this.ele.style.top = y + "px";
}
// 敌机移动
Enemy.prototype.move = function() {
	var self = this;
	
	this.timer = setInterval(function() {
		self.ele.style.top = self.ele.offsetTop + 10 + "px";
		
		// 到达页面底部
		if (self.ele.offsetTop > document.documentElement.clientHeight) {
			
			clearInterval(timer); // 关闭定时器
			
			gameEngine.ele.removeChild(self.ele); // 移除
		}
	}, this.speed );
}