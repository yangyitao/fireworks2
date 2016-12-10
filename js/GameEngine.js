
//                   属性                                                                 方法
// 物理引擎对象       颜色、大小、位置、背景图片(节点对象)    开始游戏、创建敌机   


var gameEngine = {
	ele: null,
	
	start: function() {
		// 得到元素
		this.ele = document.getElementById("main_body");

		// 1、初始化自己的飞机
		myPlane.init();
		
		myPlane.fire();
		
		
		// 2、创建敌机
		this.createEnemy();
	},
	
	// 创建敌机
	createEnemy: function() {
		
		setInterval(createLargeEnemy, 2000);
		function createLargeEnemy() {
			if (Math.random() > 0.2) {
				// 80% 的概率，不创建
				return ;
			}
			
			new Enemy(Enemy.prototype.Enemy_Type_Large).move();
		}
		
		setInterval(createMiddleEnemy, 1000);
		function createMiddleEnemy() {
			if (Math.random() > 0.5) {
				// 50% 的概率，不创建
				return ;
			}
			
			
			new Enemy(Enemy.prototype.Enemy_Type_Middle).move();
		}
		
		setInterval(createSmallEnemy, 1000);
		function createSmallEnemy() {
			if (Math.random() > 0.8) {
				// 20% 的概率，不创建
				return ;
			}
			
			new Enemy(Enemy.prototype.Enemy_Type_Small).move();
		}
	}
};
