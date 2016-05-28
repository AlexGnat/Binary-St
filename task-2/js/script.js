var Application = {};

(function (Application, $) {
    var _document,
        _$container,
        _$itemlist;

    Application.init = function (document) {
        _document = document;
        _$container = $('main');
        _$itemlist = $('.item-list');

        _$container.on('keypress', '.add-item', $.proxy(this.onAddItem, this));
        _$container.on('dblclick', '.item-text', $.proxy(this.onStartEditItem, this));
        _$container.on('click', '.check-item', $.proxy(this.onToggleCheck, this));
        _$container.on('click', '.delete-item', $.proxy(this.onDeleteItem, this));
        _$container.on('click', '.check-all', $.proxy(this.onCheckAll, this));
        _$container.on('click', '.delete-all', $.proxy(this.onDeleteAllChecked, this));
    };

    Application.onAddItem = function (evt) {
        if (evt.keyCode == 13) {
            evt.preventDefault();
            var $target = $(evt.target);
            var itemText = $target.val();
            if (itemText) {
                _$itemlist.append('<li class="item">' +
                        '<span class="check-item glyphicon glyphicon-unchecked"></span>' +
                        '<span class="item-text">' + itemText + '</span>' +
                        '<span class="delete-item glyphicon glyphicon-remove-sign"></span>' +
                        '</li>'
                );
                $target.val('');
            }
        }
    };

    Application.onStartEditItem = function (evt) {
        var $itemTarget = $(evt.target).parent();
        var $currentCheckItem = $itemTarget.find(".check-item");
        var $currentTextItem = $itemTarget.find(".item-text");
        $currentTextItem.css('display', 'none');
        var $editItem = $('<input class="edit-item" type="text"/>');
        $editItem.val($currentTextItem.text());
        $editItem.insertAfter($currentCheckItem);

        _$container.on('keyup', '.edit-item', $.proxy(this.onEditItem, this));
    };

    Application.onEditItem = function (evt) {
        if (evt.keyCode == 13) {
            updateItem($(evt.target), true);
        }

        if (evt.keyCode == 27) {
            updateItem($(evt.target), false);
        }
    };

    Application.onDeleteItem = function (evt) {
        $(evt.target).parent().remove();
    };

    Application.onToggleCheck = function (evt) {
        var $itemTarget = $(evt.target).parent();
        var $checked = $itemTarget.find('.check-item');
        $itemTarget.toggleClass('checked');
        $checked.toggleClass('glyphicon-unchecked');
        $checked.toggleClass('glyphicon-check');
    };

    Application.onCheckAll = function () {
        _$itemlist.find('.item').each(function () {
            var $item = $(this);
            $item.addClass('checked');
            var $itemChecked = $item.find('.check-item');
            $itemChecked.removeClass('glyphicon-unchecked');
            $itemChecked.addClass('glyphicon-check');
        });
    };

    Application.onDeleteAllChecked = function () {
        _$itemlist.find('.item').each(function () {
            var $item = $(this);
            if ($item.hasClass('checked')) {
                $item.remove();
            }
        });
    };

    function updateItem($target, changeText) {
        //helper function that updates targeted item
        var $itemTarget = $target.parent();
        var $currentTextItem = $itemTarget.find('.item-text');
        if (changeText) {
            var $newItemText = $target.val();
            $currentTextItem.text($newItemText);
        }
        $target.remove();
        $currentTextItem.css('display', '');
    }

})(Application, jQuery);