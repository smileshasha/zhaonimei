class GameOverView  extends eui.Component{
	public constructor() {
		super();
			this.skinName="resource/skins/gameover.exml";
			this.restartGame();
	}
	//重新开始游戏按钮
	public restartGame():void{
		var restartBtn:egret.Bitmap=Utils.createBitmapByName("restart_btn_png");
		restartBtn.x=380;
		restartBtn.y=260;
		this.addChild(restartBtn);
		restartBtn.touchEnabled=true;
		restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclickRestartBtn,this);
	}
	public onclickRestartBtn(){
		var bg:bgView=new bgView();
		this.parent.addChild(bg);
		this.parent.removeChild(this);
	}
}