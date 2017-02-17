class bgView extends eui.Component {
	public constructor() {
		super();
		this.skinName="resource/skins/background.exml";
		// var s:smallPic=new smallPic();
		// this.addChild(s);
		var control:Control=new Control();
		this.addChild(control);
	}
}