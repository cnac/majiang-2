// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        //
        inAnimationClip: cc.AnimationClip,//定义动画片段的节点属性
        outAnimationClip: cc.AnimationClip,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        var animation = this.node.addComponent(cc.Animation);//添加组件的方式返回一个实例
        animation.addClip(this.inAnimationClip,"in");//获得该对象实例上的具体内容（动画剪辑）并重命名
        animation.addClip(this.outAnimationClip,"out");
        //添加事件
        this.node.on(cc.Node.EventType.TOUCH_START, function (args) {
          //  cc.log(args);查看一下输出
            animation.play("in");//写回调函数的方法
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            animation.play("out");

        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            animation.play("out");

        }, this.node);



    },

    start () {



    },

    // update (dt) {},
});
