class bg_canvasView  extends eui.Component {
	public constructor() {
		super();
			this.skinName="resource/skins/bg_canvas.exml";
			this.beginGame();
	}
	//开始游戏按钮
	private beginGame():void{
		var beginButton:egret.Bitmap=Utils.createBitmapByName("start_btn_png");
		beginButton.x=450;
		beginButton.y=360;
		this.addChild(beginButton);
		beginButton.touchEnabled=true;
		beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclickStsrtBtn,this);
	}
	private onclickStsrtBtn(){
		var bg:bgView=new bgView();
		this.parent.addChild(bg);
		this.parent.removeChild(this);
	}
}