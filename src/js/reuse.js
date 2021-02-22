const $ = function (q, a = false) {
    if (a) {
        return document.querySelectorAll(q)
    }
    return document.querySelector(q);
}

const elements = {
    top_holder: $('.top_holder'),
    top: $('.top'),
    left_holder: $('.left_holder'),
    left: $('.left'),
    right_holder: $('.right_holder'),
    right: $('.right'),
    middle: $('.middle'),

}


export {
    $,
    elements
};