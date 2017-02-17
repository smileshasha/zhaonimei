var GameOverView = (function (_super) {
    __extends(GameOverView, _super);
    function GameOverView() {
        _super.call(this);
        this.skinName = "resource/skins/gameover.exml";
        this.restartGame();
    }
    var d = __define,c=GameOverView,p=c.prototype;
    //重新开始游戏按钮
    p.restartGame = function () {
        var restartBtn = Utils.createBitmapByName("restart_btn_png");
        restartBtn.x = 380;
        restartBtn.y = 260;
        this.addChild(restartBtn);
        restartBtn.touchEnabled = true;
        restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickRestartBtn, this);
    };
    p.onclickRestartBtn = function () {
        var bg = new bgView();
        this.parent.addChild(bg);
        this.parent.removeChild(this);
    };
    return GameOverView;
}(eui.Component));
egret.registerClass(GameOverView,'GameOverView');
//# sourceMappingURL=GameOverView.js.map