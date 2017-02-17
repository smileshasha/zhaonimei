var smallPic = (function (_super) {
    __extends(smallPic, _super);
    function smallPic() {
        _super.call(this);
        this.showSmallPic();
    }
    var d = __define,c=smallPic,p=c.prototype;
    //随机显示一张图片
    p.showSmallPic = function () {
        this.smalltype = Math.floor(Math.random() * 10) + 1;
        this.smallindex = Math.floor(Math.random() * 3) + 1;
        var smallpic = new egret.Bitmap(RES.getRes("gameAssets_json.pic_" + this.smalltype + "_" + this.smallindex));
        smallpic.touchEnabled = true;
        this.addChild(smallpic);
    };
    return smallPic;
}(egret.Sprite));
egret.registerClass(smallPic,'smallPic');
//# sourceMappingURL=smallPic.js.map