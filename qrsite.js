(function ($) {
    "use strict";

    var pixelGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

    var buttons = {};

    var qr = {
        high: null,
        preview: null
    };

    var qrOptions = {
        high: {
            size: 1200,
            target: "[data-content=qr-hq]"
        },
        preview: {
            size: 300,
            target: "[data-content=qr]"
        }
    };

    var currentContent = "hi";

    var createQR = function(el, size) {
        var options = $.extend({
            text: currentContent,
            colorDark: "#c6c6c6",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        }, {
            width: size,
            height: size
        });

        var element = $(el).get(0);

        if(!element)
            return null;

        var el = new QRCode(element, options);
        el._htOption.colorDark = '#000000';

        return el;
    }

    var createObjects = function() {
        qr.high = createQR(qrOptions.high.target, qrOptions.high.size);
        qr.preview = createQR(qrOptions.preview.target, qrOptions.preview.size);
    };

    var captureCtrEnter = function (event) {

        var keyWord = event.key || event.code;
        var keyCode = event.keyCode || event.which;
        var ctrl = event.ctrlKey;

        if ((keyWord === 'Enter' || keyCode === 13) && ctrl) {
            event.preventDefault();
            updatePreview();
        }
    };


    var updatePreview = function () {
        currentContent = buttons.input.val();

        if(currentContent.trim().length === 0) {
            $(qrOptions.preview.target).find('img').attr('src', pixelGif);
            buttons.hq.attr('disabled', 'disabled');
            return;
        }
        buttons.hq.removeAttr('disabled');

        qr.preview.clear();
        qr.preview.makeCode(currentContent);

    };

    var downloadHighDef = function() {
        qr.high.clear();
        qr.high.makeCode(currentContent);

        var canvas = $(qrOptions.high.target).find('canvas').get(0);
        if(canvas) {
            canvas.toBlob(function (blob) {
                window.saveAs(blob, "qr-code.png");
            }, "image/png");
        };
    };

    var init = function () {
        // Add listeners for CTRL+Enter and the submit button
        buttons.create = $('[data-action=create-qr]').on('click', updatePreview);
        buttons.hq = $('[data-action=download-qr-hq]').on('click', downloadHighDef).attr('disabled', 'disabled');
        buttons.input = $('[data-content=qr-contents]').on('keypress', captureCtrEnter);

        // Create a simple QR code
        createObjects();
    };

    $(document).ready(init);

}(jQuery));
