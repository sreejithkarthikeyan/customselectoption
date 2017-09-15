/*
 * customselectoption v 1.0
 * http://pointslabs.co/
 * MIT licensed
 * Copyright (C) 2016 Sreejith K S, http://pointslabs.co/
 * sreeksleo@gmail.com
 * A simple jQuery plugin that allows you to add a Custom select which can add new option value
 * sreejith k s
 */

(function ($) {
    var _selectArr = [];
    var _list;
    var typingTimer;
    var doneTypingInterval = 10000;
    var _count = 0;
    var _debug = false;
    var inputtxt = {};
    var myOpt = {};
    $.fn.customselectOpt = function (options) {
        var opts = $.extend({}, $.fn.customselectOpt.defaults, options);
        return this.each(function () {
            $this = $(this);
            $.fn.customselectOpt.init($this, opts);
            // PluginFeatures.init($this, opts);
        });
    };
    $.fn.customselectOpt.defaults = {
        bgcolor: 'red',
        txtcolor: 'black',
        selecttext: 'Select '
    };
    $.fn.customselectOpt.init = function (obj, opts) {
        PluginFeatures.init($this, opts);
    };
    var IsHtml = {
        init: function isHTML(str) {
            var doc = new DOMParser().parseFromString(str, "text/html");
            return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
        }

    };
    var PluginFeatures = {
        init: function (obj, opts) {
            myOpt = opts;

            if ($(obj).length) {

                PluginFeatures.getallselectAndWrap(obj, opts);

            } else {
                console.log("element does not exists");
            }
        },
        addSelect: function (obj, opts) {
            console.log(obj.find('select option').val());
        },
        getallselectAndWrap: function (obj, opts) {
            var input = '<option value=" " class="input"> </option>';
            $(obj).find(".cselect").append(input);
            $(obj).find(".cselect").each(function (i) {
                _selectArr[i] = this;
                $(_selectArr[i]).wrap("<div class='selectopt'></div>");
                $(this).attr('id', 'cSelect_' + i).click(function () {
                    CreateDropDown.create(this, $(this).attr('id'), 0)
                })
            })
        }
    };
    var CreateDropDown = {
        init: function (obj) {
            $.each(_selectArr, function (key, value) {});
        },
        create: function (obj, id, flg) {
            if (_list != null) {

                _list.remove();
            }
            _list = $("#" + id).closest('.selectopt').append('<ul class="ul" ></ul>').find('ul');
            var _txt;
            $(obj).find("option").each(function (i) {
                _txt = $(this).val();
                if ($(this).hasClass('input')) {

                    _txt = '<div class="form-inline"><input type="text" id=' + _txt + ' style="width:100%"  /><input type="button" class="btn sbtn" value="ADD"/></div>'
                }
                var OnsVal = $(this).closest('.selectopt').find('select').val();
                _list.append('<li class="divider" id=' + $(this).val() + '>' + _txt + '</li>')

                $(this).closest('.selectopt').find('#' + OnsVal).css({
                    'color': myOpt.txtcolor,
                    'background-color': myOpt.bgcolor
                });
                $(this).closest(".selectopt").find("ul").mouseenter(function () {

                    })
                    .mouseleave(function () {

                        if (_list != null) {
                            if (!_debug) {
                                _list.remove();
                            }
                        }
                    });
                $(this).closest(".selectopt").find('li').click(function (e) {
                    $(this).closest(".selectopt").find('li').css({
                        'color': 'black',
                        'background-color': 'white'
                    });
                    $(e.currentTarget).css({
                        'color': myOpt.txtcolor,
                        'background-color': myOpt.bgcolor
                    });
                    var str = e.currentTarget.innerHTML;
                    var chk = IsHtml.init(str);
                    if (chk) {} else {
                        var sVal = $(this).closest('.selectopt').find('select');
                        sVal.val(str);
                    }
                    if ($(this).find('input')) {
                        inputtxt = {};
                        inputtxt = $(this).find('input');
                        $(this).find('.btn').click(function () {
                            setClick(obj, id)
                        })
                        inputtxt.on('keyup', function () {
                            var val = $(this).val();
                            if (val.match(/[^a-zA-Z]/g)) {
                                $(this).val(val.replace(/[^a-zA-Z]/g, ''));
                            }
                            clearTimeout(typingTimer);
                        });
                        inputtxt.on('keydown', function () {

                            clearTimeout(typingTimer);

                        });
                    }
                })
            });

            /* loop end*/

        }
    }

    function setClick(obj, id) {
        doneTyping(_list, obj, id)
    }

    function doneTyping(obj, o, id) {
        var length = $.trim(obj.find('input').val()).length;
        obj.find('input[type=text]').css({
            'background-color': 'red'
        })
        if (length == 0) {
            console.log("Input field is Empty")
          /*  obj.find('input[type=text]').css({
                'background-color': 'yellow',
                'color':"red"
            })*/
           //  obj.find('input[type=text]').hide();

        } else {
            obj.find('input').attr('id', obj.find('input').val());

            var l = $('<option>', {
                value: obj.find('input').val(),
                text: obj.find('input').val()
            });

            obj.closest('.selectopt').find('select').find('.input').before(l);
            obj.closest('.selectopt').find('select').val(obj.find('input').attr('id'));
        }
        CreateDropDown.create(o, id, 1)
    }
})(jQuery);


