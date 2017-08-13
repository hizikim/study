(function (win, $) {
    'use strict';
    win.projectName = win.projectName || {};
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    // prototype 호출구문
    win.projectName.tabFunc = function (container, args) {
        var defParams = {
            fadeSpeed : 300,
            changeMotion : 'none'
        };
        this.opts = $.extend({}, defParams, (args || {}));
        if(!(this.obj = $(container)).length) return;
        this.init();
    };
    // prototype 선언구문
    win.projectName.tabFunc.prototype = {
        init : function () {
            this.setElements();
            this.initLayout();
            this.bindEvents();
        },
        setElements : function () {
            this.tab = this.obj.find('*[class$="_tab"]');
            this.tabItems = this.tab.find('ul').children();
            this.tabBtns = this.tabItems.find('a');
            this.cont = this.obj.find('*[class$="_cont"]');
            this.contItems = this.cont.children();
            this.setting = this.obj.find('*[class$="_setting"]');
            this.settingBtn = this.setting.find('*[class$="_btn"] button');
            this.settingCurrent = this.setting.find('*[class$="_num"] .current');
            this.settingTotal = this.setting.find('*[class$="_num"] .total');
        },
        initLayout : function () {
            this.selectIdx = 0;
            this.contItems.hide();
            this.changeTo(this.selectIdx);
            if(this.settingTotal.length){
              this.settingTotal.get(0).innerHTML = this.contItems.length;             
            }
        },
        bindEvents : function () {
            for (var index = 0, max = this.tabBtns.length; index < max; index++) {
                this.tabBtns.eq(index).on('click', index, $.proxy(this.onSelectFunc, this));
            }
            this.settingBtn.eq(0).on('click', $.proxy(this.onSelectPrevFunc, this));
            this.settingBtn.eq(1).on('click', $.proxy(this.onSelectNextFunc, this));
        },
        onSelectFunc : function (e) {
            e.preventDefault();
            this.changeTo(e.data);
        },
        onSelectPrevFunc : function () {
            var index = this.selectIdx;
            if (0 === index){
                index = this.contItems.length - 1;
            } else {
                index--;
            }
            this.changeTo(index);
        },
        onSelectNextFunc : function () {
            var index = this.selectIdx;
            if (index === this.contItems.length - 1){
                index = 0;
            } else {
                index++;
            }
            this.changeTo(index);
        },
        changeTo : function (index) {
            this.contItems.finish();
            this.tabItems.eq(this.selectIdx).removeClass('active');
            this.tabItems.eq(index).addClass('active');
            this.contItems.eq(index).addClass('active');
            
            switch (this.opts.slideMotion) {
                case 'fade':
                    this.contItems.eq(this.selectIdx).fadeOut(this.opts.fadeSpeed, $.proxy(function () {
                        this.contItems.eq(index).fadeIn(this.opts.fadeSpeed);
                    }, this));
                    break;
                case 'none':
                default:
                    this.contItems.eq(this.selectIdx).hide();
                    this.contItems.eq(index).show();
                    break;
            }

            this.selectIdx = index;

            if (this.settingCurrent.length) {
                this.settingCurrent.get(0).innerHTML = this.selectIdx + 1;
            }
        },
    };
    $(function () {
         win.castBox = new win.projectName.tabFunc('.cast_box');
         win.slideBox = new win.projectName.tabFunc('.slide_box', {changeMotion: 'fade'});
    });
})(window, window.jQuery);