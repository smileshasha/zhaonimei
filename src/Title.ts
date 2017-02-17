class Title  extends egret.DisplayObjectContainer {
	public titleType:number;
	private wenzi:egret.TextField;
	public newType;
	public constructor() {
		super();
		this.wenzi=new egret.TextField();
		this.wenzi.text="";
		this.wenzi.size=60;
		this.wenzi.x=780;
		this.wenzi.y=100;
		this.addChild(this.wenzi);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.showTitle,this);
	}
	//随机显示题目
	public showTitle():void{
		this.titleType=Math.floor(Math.random()*Control.array.length);
		this.newType=Control.array[this.titleType];
		var TypeName:Array<string>=["动物","衣服","钻石","花","水果","礼物","百宝箱","钥匙","鞋","工具"];
		var title=TypeName[this.newType-1];
		this.wenzi.text=title;
		this.titleType++;
	}
}