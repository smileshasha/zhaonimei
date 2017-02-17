class smallPic extends egret.Sprite {
	public smalltype:number;
	public smallindex:number;
	public constructor() {
		super();
		this.showSmallPic();
	}
	//随机显示一张图片
	public showSmallPic():void{
		this.smalltype=Math.floor(Math.random()*10)+1;
		this.smallindex=Math.floor(Math.random()*3)+1;
		var smallpic:egret.Bitmap=new egret.Bitmap(RES.getRes("gameAssets_json.pic_"+this.smalltype+"_"+this.smallindex));
		smallpic.touchEnabled=true;
		this.addChild(smallpic);
	}
}