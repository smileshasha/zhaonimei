var Control = (function (_super) {
    __extends(Control, _super);
    function Control() {
        _super.call(this);
        this.reminderPlayer = new egret.TextField();
        this.title = new Title();
        this.addChild(this.title);
        this.title.showTitle();
        this.showAllPic();
        this.initTime();
    }
    var d = __define,c=Control,p=c.prototype;
    //显示30张图片 
    p.showAllPic = function () {
        for (var i = 0; i < 30; i++) {
            this.small = new smallPic();
            this.small.x = 50 + Math.floor((i % 6)) * 120; //6列
            this.small.y = 50 + Math.floor((i / 6)) * 120; //5行
            this.small.rotation = Math.random() * 90 - 90;
            this.addChild(this.small);
            Control.array.push(this.small.smalltype);
            Control.arrayContainer.push(this.small);
            this.small.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        }
    };
    //控制点击图片
    p.touchHandler = function (evt) {
        var small = evt.currentTarget;
        if (small.smalltype == this.title.newType) {
            for (var i = Control.array.length - 1; i >= 0; i--) {
                if (Control.array[i] == this.title.newType) {
                    Control.array.splice(i, 1);
                    break;
                }
            }
            this.TimeTotal += 2;
            egret.Tween.get(small).to({ rotation: small.rotation + 360, scaleX: 0.2, scalexY: 0.2, alpha: 0 }, 500);
            this.title.showTitle();
            this.judgeGame(true);
        }
        else {
            this.TimeTotal -= 5;
            egret.Tween.get(small).to({ scaleX: 0.8 }, 200).to({ scaleX: 1.2 }, 200).to({ scaleX: 0.8 }, 200).to({ scaleX: 1.2 }, 200).to({ scaleX: 0.8 }, 200).to({ scaleX: 1 }, 200);
            this.title.showTitle();
            this.judgeGame(false);
        }
    };
    p.initTime = function () {
        this.TextTimeDown = new egret.TextField();
        this.TextTimeDown.x = 150;
        this.TextTimeDown.y = 600;
        this.TextTimeDown.size = 60;
        this.addChild(this.TextTimeDown);
        this.TimeTotal = 30;
        this.initTimeDown = new egret.Timer(1000);
        this.initTimeDown.addEventListener(egret.TimerEvent.TIMER, this.timeDownHandler, this);
        this.initTimeDown.start();
    };
    //更新时间
    p.updateTimeDown = function (timeRemain) {
        this.TextTimeDown.text = "倒计时：" + this.TimeTotal + "秒";
    };
    p.timeDownHandler = function (evt) {
        if (evt === void 0) { evt = null; }
        this.TimeTotal--;
        this.updateTimeDown(this.TimeTotal);
        //游戏结束的条件
        if (this.TimeTotal <= 0) {
            this.TextTimeDown.text = "时间到！";
            this.initTimeDown.stop();
            this.initTimeDown.removeEventListener(egret.TimerEvent.TIMER, this.timeDownHandler, this);
            for (var i = 0; i < Control.arrayContainer.length; i++) {
                Control.arrayContainer[i].touchEnabled = false;
                Control.arrayContainer[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
                this.gameover = new GameOverView();
                this.addChild(this.gameover);
            }
        }
    };
    //判断胜负提示
    p.judgeGame = function (flag) {
        this.reminderPlayer.x = 730;
        this.reminderPlayer.y = 300;
        if (flag) {
            this.reminderPlayer.text = "哇！眼力不错哟！";
        }
        else {
            this.reminderPlayer.text = "很遗憾，你再找找看！";
        }
        this.addChild(this.reminderPlayer);
    };
    Control.array = new Array();
    Control.arrayContainer = new Array();
    return Control;
}(egret.Sprite));
egret.registerClass(Control,'Control');
//# sourceMappingURL=Control.js.map