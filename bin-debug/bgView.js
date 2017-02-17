var bgView = (function (_super) {
    __extends(bgView, _super);
    function bgView() {
        _super.call(this);
        this.skinName = "resource/skins/background.exml";
        // var s:smallPic=new smallPic();
        // this.addChild(s);
        var control = new Control();
        this.addChild(control);
    }
    var d = __define,c=bgView,p=c.prototype;
    return bgView;
}(eui.Component));
egret.registerClass(bgView,'bgView');
//# sourceMappingURL=bgView.js.map