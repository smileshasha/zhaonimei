var bg_canvasView = (function (_super) {
    __extends(bg_canvasView, _super);
    function bg_canvasView() {
        _super.call(this);
        this.skinName = "resource/skins/bg_canvas.exml";
        this.beginGame();
    }
    var d = __define,c=bg_canvasView,p=c.prototype;
    //开始游戏按钮
    p.beginGame = function () {
        var beginButton = Utils.createBitmapByName("start_btn_png");
        beginButton.x = 450;
        beginButton.y = 360;
        this.addChild(beginButton);
        beginButton.touchEnabled = true;
        beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickStsrtBtn, this);
    };
    p.onclickStsrtBtn = function () {
        var bg = new bgView();
        this.parent.addChild(bg);
        this.parent.removeChild(this);
    };
    return bg_canvasView;
}(eui.Component));
egret.registerClass(bg_canvasView,'bg_canvasView');
//# sourceMappingURL=bg_canvasView.js.map