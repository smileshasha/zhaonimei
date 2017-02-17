class Main extends eui.UILayer {
    /**
     * 加载进度界面
     * loading process interface
     */
    protected createChildren(): void {
        super.createChildren();
        Common.stage=this.stage;
        var resM:ResourceManager=new ResourceManager();
        resM.startLoad(this.startCreateScene);
    }
    private textfield:egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected startCreateScene(): void {
        // var mian:bgView=new bgView();
         var mian:bg_canvasView=new bg_canvasView();
        Common.stage.addChild(mian);
    
    }   
}
