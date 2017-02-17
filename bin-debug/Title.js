var Title = (function (_super) {
    __extends(Title, _super);
    function Title() {
        _super.call(this);
        this.wenzi = new egret.TextField();
        this.wenzi.text = "";
        this.wenzi.size = 60;
        this.wenzi.x = 780;
        this.wenzi.y = 100;
        this.addChild(this.wenzi);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.showTitle, this);
    }
    var d = __define,c=Title,p=c.prototype;
    //随机显示题目
    p.showTitle = function () {
        this.titleType = Math.floor(Math.random() * Control.array.length);
        this.newType = Control.array[this.titleType];
        var TypeName = ["动物", "衣服", "钻石", "花", "水果", "礼物", "百宝箱", "钥匙", "鞋", "工具"];
        var title = TypeName[this.newType - 1];
        this.wenzi.text = title;
        this.titleType++;
    };
    return Title;
}(egret.DisplayObjectContainer));
egret.registerClass(Title,'Title');
//# sourceMappingURL=Title.js.map