//            属性                                   方法
//敌机          位置、颜色(节点对象)       移动、爆炸


// 步骤
//   1、先创建一个中飞机的敌机
//   2、 大、中、小
//   3、 定时创建中飞机
//   4、 定时创建大、中、小飞机


function Enemy(type) {

	this.ele = document.createElement("div");
	
	switch (type) {
		case Enemy.prototype.Enemy_Type_Large:
			this.ele.className = "enemy-large";
			this.speed = Enemy.prototype.Enemy_Speed_Large;
			break;
		case Enemy.prototype.Enemy_Type_Middle:
			this.ele.className = "enemy-middle";
			this.speed = Enemy.prototype.Enemy_Speed_Middle;
			break;
		case Enemy.prototype.Enemy_Type_Small:
			this.ele.className = "enemy-small";
			this.speed = Enemy.prototype.Enemy_Speed_Small;
			break;
			
		default:
			this.ele.className = "enemy-small";
			this.speed = Enemy.prototype.Enemy_Speed_Small;			break 
	}
	
	gameEngine.ele.appendChild(this.ele);
	
	// 随机位置 [0, 游戏背景宽度 - 自身敌机宽度)
	var x = parseInt(Math.random() * (gameEngine.ele.offsetWidth - this.ele.offsetWidth))
	var y = -1 * this.ele.offsetHeight;
	
	this.ele.style.left = x + "px";
	this.ele.style.top = y + "px";
}

// 敌机的原型对象
Enemy.prototype = {
	Enemy_Type_Large: 0,  // 大飞机
	Enemy_Type_Middle: 1, // 中飞机
	Enemy_Type_Small: 2, // 小飞机
	
	// 速度值越大，代表速度越慢
	Enemy_Speed_Large: 300,  // 大飞机的速度
	Enemy_Speed_Middle: 100,  // 中飞机的速度
	Enemy_Speed_Small: 50  // 小飞机的速度
};


// 敌机移动
Enemy.prototype.move = function() {
	var self = this;
	
	var timer = setInterval(function() {
		self.ele.style.top = self.ele.offsetTop + 10 + "px";
		
		// 到达页面底部
		if (self.ele.offsetTop > document.documentElement.clientHeight) {
			
			clearInterval(timer); // 关闭定时器
			
			gameEngine.ele.removeChild(self.ele); // 移除
		}
	}, this.speed);
}

