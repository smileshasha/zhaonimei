class Control extends egret.Sprite {
	public static array = new Array();
	public static arrayContainer = new Array();
	private title: Title;
	private initTimer;
	private small: smallPic;
	private reminderPlayer:egret.TextField=new egret.TextField();
	public constructor() {
		super();
		this.title = new Title();
		this.addChild(this.title);
		this.title.showTitle();
		this.showAllPic();
		this.initTime();
	}
	//显示30张图片 
	private showAllPic(): void {
		for (var i: number = 0; i < 30; i++) {
			this.small = new smallPic();
			this.small.x = 50 + Math.floor((i % 6)) * 120;//6列
			this.small.y = 50 + Math.floor((i / 6)) * 120;//5行
			this.small.rotation = Math.random() * 90 - 90;
			this.addChild(this.small);
			Control.array.push(this.small.smalltype);
			Control.arrayContainer.push(this.small);
			this.small.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
		}
	}
	//控制点击图片
	private touchHandler(evt: egret.TouchEvent): void {
		var small: smallPic = evt.currentTarget as smallPic;
		if (small.smalltype == this.title.newType) {
			for (var i: number = Control.array.length - 1; i >= 0; i--) {
				if (Control.array[i] == this.title.newType) {
					Control.array.splice(i, 1);
					break;
				}
			}
			this.TimeTotal += 2;
			egret.Tween.get(small).to({ rotation: small.rotation + 360, scaleX: 0.2, scalexY: 0.2, alpha: 0 }, 500);
			this.title.showTitle();
			this.judgeGame(true);
		} else {
			this.TimeTotal -= 5;
			egret.Tween.get(small).to({ scaleX: 0.8 }, 200).to({ scaleX: 1.2 }, 200).to({ scaleX: 0.8 }, 200).to({ scaleX: 1.2 }, 200).to({ scaleX: 0.8 }, 200).to({ scaleX: 1 }, 200);
			this.title.showTitle();
			this.judgeGame(false);
		}
	}
	//思路：使用Timer计时器  每秒触发一次  用来更新倒计时剩余的秒数 并且判断时间是否到达
	//初始化时间
	private initTimeDown: egret.Timer;
	//总时间
	private TimeTotal: number;
	private TextTimeDown: egret.TextField;
	private initTime(): void {
		this.TextTimeDown = new egret.TextField();
		this.TextTimeDown.x = 150;
		this.TextTimeDown.y = 600;
		this.TextTimeDown.size = 60;
		this.addChild(this.TextTimeDown);
		this.TimeTotal = 30;
		this.initTimeDown = new egret.Timer(1000);
		this.initTimeDown.addEventListener(egret.TimerEvent.TIMER, this.timeDownHandler, this);
		this.initTimeDown.start();
	}
	//更新时间
	private updateTimeDown(timeRemain: number): void {
		this.TextTimeDown.text = "倒计时：" + this.TimeTotal + "秒";
	}
	//倒计时它不依赖与计时器计算 而是在外部单独计算 
	//时间控制
	private gameover:GameOverView;
	private timeDownHandler(evt: egret.TimerEvent = null): void {
		this.TimeTotal--;
		this.updateTimeDown(this.TimeTotal);
		//游戏结束的条件
		if (this.TimeTotal <= 0) {
			this.TextTimeDown.text = "时间到！";
			this.initTimeDown.stop();
			this.initTimeDown.removeEventListener(egret.TimerEvent.TIMER, this.timeDownHandler, this);
			for (var i: number = 0; i < Control.arrayContainer.length; i++) {
				Control.arrayContainer[i].touchEnabled = false;
				Control.arrayContainer[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
				this.gameover=new GameOverView();
				this.addChild(this.gameover);
			}
			
		}
	}
	//判图片全部找对 则显示结束界面
//判断胜负提示
public judgeGame(flag:boolean){
	this.reminderPlayer.x=730;
	this.reminderPlayer.y=300;
	if(flag){
		this.reminderPlayer.text="哇！眼力不错哟！";
	}else{
		this.reminderPlayer.text="很遗憾，你再找找看！";
	}
	this.addChild(this.reminderPlayer);
}
}
