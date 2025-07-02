//  **------1 Basic round slider**
// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
//     start: 40,
//     connect: 'lower',
//     range: {
//         'min': 0,
//         'max': 100
//     }
// });

// **------ 2 values slider**
var valuesSlider = document.getElementById('values-slider');
var valuesForSlider = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32];

var format = {
    to: function (value) {
        return valuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return valuesForSlider.indexOf(Number(value));
    }
};

noUiSlider.create(valuesSlider, {
    start: 0,
    connect: 'lower',
    range: { min: 0, max: valuesForSlider.length - 1 },
    step: 2,
    tooltips: true,
    format: format,
    pips: { mode: 'steps', format: format },
});
valuesSlider.noUiSlider.set(5);

// **------ 3 multi-values-slider**
var arbitraryValuesSlider = document.getElementById('multi-values-slider');
var arbitraryValuesForSlider = ['MB', '256MB', '1GB', '8GB', '16GB', '32GB', 'GB'];

var format = {
    to: function (value) {
        return arbitraryValuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return arbitraryValuesForSlider.indexOf(value);
    }
};

noUiSlider.create(arbitraryValuesSlider, {
    start: ['1GB', '16GB'],
    connect: true,
    range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
    step: 1,
    tooltips: false,
    format: format,
    pips: { mode: 'steps', format: format, density: 50 },
});


//  **------4 Tooltips slider**
var slider = document.getElementById('hide-tooltips');

noUiSlider.create(slider, {
    start: 20,
    tooltips: true,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

// **------ 5 HTML5 input**
var select = document.getElementById('select-input');

for (var i = -20; i <= 40; i++) {

    var option = document.createElement("option");
    option.text = i;
    option.value = i;

    select.appendChild(option);
}
var html5Slider = document.getElementById('html-input');

noUiSlider.create(html5Slider, {
    start: [10, 30],
    connect: true,
    range: {
        'min': -20,
        'max': 40
    }
});

var inputNumber = document.getElementById('number-input');

html5Slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
        inputNumber.value = value;
    } else {
        select.value = Math.round(value);
    }
});

select.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
});

inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
});



//  **------7 Colored Connect Slider**
var slider = document.getElementById('slider-colored');

noUiSlider.create(slider, {
    start: [20, 32, 50, 70, 80, 90],
    connect: true,
    tooltips: [false, true, true, true, true, true],
    range: {
        'min': 0,
        'max': 100
    }
});

var slider = slider.querySelectorAll('.noUi-connect');
var classes = ['c1-color', 'c2-color', 'c3-color', 'c4-color', 'c5-color'];

for (var i = 0; i < slider.length; i++) {
    slider[i].classList.add(classes[i]);
}

// **------ 8 Hover slider**
// var hoverSlider = document.getElementById('slider-hover');
// var field = document.getElementById('value');

// noUiSlider.create(hoverSlider, {
//     start: 20,
//     behaviour: 'hover-snap',
//     direction: 'rtl',
//     range: {
//         'min': 0,
//         'max': 10
//     }
// });




// **------ 10 primary-slider**
var slider = document.getElementById('primary-slider');

noUiSlider.create(slider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

// 11 secondary-slider
var slider = document.getElementById('secondary-slider');

noUiSlider.create(slider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

// **------ 12 success-slider**
var slider = document.getElementById('success-slider');

noUiSlider.create(slider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

//  **------13 danger-slider**
var slider = document.getElementById('danger-slider');

noUiSlider.create(slider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

//  **------14 warning-slider**
var slider = document.getElementById('warning-slider');

noUiSlider.create(slider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

// **------ 15 info-slider**
var slider = document.getElementById('info-slider');

noUiSlider.create(slider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

//  **------16 light-slider**
var slider = document.getElementById('light-slider');

noUiSlider.create(slider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});


//  **------17 dark-slider**
var slider = document.getElementById('dark-slider');

noUiSlider.create(slider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

// **------ 18 vertical-slider**
var slider = document.getElementById('vertical-slider');

noUiSlider.create(slider, {
    start: 20,
    connect: 'lower',
    orientation: "vertical",
    range: {
        'min': 0,
        'max': 100
    }
});

// **------ 19 Colorpicker slider**
var resultElement = document.getElementById('result');
var sliders = document.querySelectorAll('.verticalsliders');
var colors = [0, 0, 0];

sliders.forEach(function (slider, index) {

    noUiSlider.create(slider, {
        start: 127,
        connect: [true, false],
        orientation: "vertical",
        range: {
            'min': 0,
            'max': 255
        },
    });
    slider.noUiSlider.on('update', function () {

        colors[index] = slider.noUiSlider.get();

        var color = 'rgb(' + colors.join(',') + ')';

        resultElement.style.background = color;
        resultElement.style.color = color;
    });
});


// **------ 20 toggle slider**
var toggleSlider = document.getElementById('toggle-slider');

noUiSlider.create(toggleSlider, {
    orientation: "vertical",
    start: 0,
    range: {
        'min': [0, 1],
        'max': 1
    },
    format: wNumb({
        decimals: 0
    })
});

toggleSlider.noUiSlider.on('update', function (values, handle) {
    if (values[handle] === '1') {
        toggleSlider.classList.add('off');
    } else {
        toggleSlider.classList.remove('off');
    }
});

// **------ 6 Locking sliders together**
var lockedState = false;
var lockedSlider = false;
var lockedValues = [60, 80];

var slider1 = document.getElementById('slider-1');
var slider2 = document.getElementById('slider-2');

var lockButton = document.getElementById('lockbtn');
var slider1Value = document.getElementById('val1');
var slider2Value = document.getElementById('val2');


lockButton.addEventListener('click', function () {
    lockedState = !lockedState;
    this.textContent = lockedState ? 'unlock' : 'lock';
});
function crossUpdate(value, slider) {
    if (!lockedState) return;
    var a = slider1 === slider ? 0 : 1;
    var b = a ? 0 : 1;
    value -= lockedValues[b] - lockedValues[a];
    slider.noUiSlider.set(value);
}
noUiSlider.create(slider1, {
    start: 20,
    connect: 'lower',
    range: {
        min: 10,
        max: 100
    }
});

noUiSlider.create(slider2, {
    start: 60,
    connect: 'lower',
    animate: false,
    range: {
        min: 50,
        max: 100
    }
});

slider1.noUiSlider.on('update', function (values, handle) {
    slider1Value.innerHTML = values[handle];
});

slider2.noUiSlider.on('update', function (values, handle) {
    slider2Value.innerHTML = values[handle];
});
function setLockedValues() {
    lockedValues = [
        Number(slider1.noUiSlider.get()),
        Number(slider2.noUiSlider.get())
    ];
}

slider1.noUiSlider.on('change', setLockedValues);
slider2.noUiSlider.on('change', setLockedValues);

slider1.noUiSlider.on('slide', function (values, handle) {
    crossUpdate(values[handle], slider2);
});

slider2.noUiSlider.on('slide', function (values, handle) {
    crossUpdate(values[handle], slider1);
});


// **------ 9 Soft limits**
var softSlider = document.getElementById('limit-slider');

noUiSlider.create(softSlider, {
    start: 50,
    connect: 'lower',
    range: {
        min: 0,
        max: 100
    },
    pips: {
        mode: 'values',
        values: [40, 80],
        density: 2
    }
});
softSlider.noUiSlider.on('change', function (values, handle) {
    if (values[handle] < 20) {
        softSlider.noUiSlider.set(20);
    } else if (values[handle] > 80) {
        softSlider.noUiSlider.set(80);
    }
});
// hoverSlider.noUiSlider.on('hover', function (value) {
//     field.innerHTML = value;
// });


