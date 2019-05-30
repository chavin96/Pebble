$(document).ready(function () {

    $("#ac-slider").roundSlider({
        // min / max value 
        min: 16,
        max: 30,

        // custom step
        step: 1,

        // initial value
        value: null,

        // customize the slider
        radius: 85,
        width: 18,
        handleSize: "+0",
        startAngle: 0,
        endAngle: "+360",

        // enable animation
        animation: true,

        // enable tooltip
        showTooltip: true,
        editableTooltip: false,

        // read-only mode
        readOnly: false,

        // disabled mode
        disabled: false,

        // allow for keyboard interaction
        keyboardAction: true,

        // enable mousel scroll action
        mouseAction: false,

        // achieve the rounded edges
        lineCap: "square",

        // default, min-range or range
        sliderType: "min-range",

        // full, quarter-top-left, quarter-top-right, quarter-bottom-right, 
        // quarter-bottom-left, half-top, half-bottom, half-left, half-right, 
        // pie, custom-half, custom-quarter
        circleShape: "half-top",

        // handle shapes
        handleShape: "round",

        // events
        beforeCreate: null,
        create: null,
        start: null,
        drag: null,
        change: null,
        stop: null,
        tooltipFormat: null
    });
});