var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    var d = __define,c=Main,p=c.prototype;
    /**
     * 加载进度界面
     * loading process interface
     */
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        Common.stage = this.stage;
        var resM = new ResourceManager();
        resM.startLoad(this.startCreateScene);
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    p.startCreateScene = function () {
        // var mian:bgView=new bgView();
        var mian = new bg_canvasView();
        Common.stage.addChild(mian);
    };
    return Main;
}(eui.UILayer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map