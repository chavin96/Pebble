class Helpers {
    forEach(array, callback, scope) {
        for (let i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    }
    removeClass(nodelist, toremove) {
        for (let i = 0; i < nodelist.length; i++) {
            nodelist[i].classList.remove(toremove);
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    let h = new Helpers;
    let filterwrappers = document.querySelectorAll('.filters');
    if (filterwrappers.length > 0) {
        h.forEach(filterwrappers, function (index, value) {
            let filterwrapper = value;
            let filteroptions = filterwrapper.querySelectorAll('.filter');
            let filterobject = filterwrapper.getAttribute('data-object');

            filterwrapper.addEventListener('click', function (e) {
                e.stopPropagation();
                this.classList.add('open');
            }, false);

            let max = 0;
            h.forEach(filteroptions, function (index, value) {
                let current = parseInt(value.querySelector('span').getBoundingClientRect().width);
                max = current > max ? current : max;
                value.addEventListener('click', function (e) {
                    e.stopPropagation();
                    h.removeClass(filteroptions, 'active');
                    this.classList.add('active');
                    let parent = this.closest('.widget');
                    filterwrapper.classList.remove('open');
                });
            });
        });
    }
});
$(document).ready(function () {

    $('input[type="range"]').change(function () {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, '
            + 'color-stop(' + val + ', #4392F1), '
            + 'color-stop(' + val + ', #A6CEFF)'
            + ')'
        );
    });
});

$(document).ready(function () {
    var flag = 0;
    $("#bulb-switch").click(function () {
        if (flag == 0) {
            $("#bulb-change").attr("src", "../icons/bulb/bulb.svg");
            flag = 1;
        }
        else if (flag == 1) {
            $("#bulb-change").attr("src", "../icons/bulb/bulb-off.png");
            flag = 0;
        }
    });
});