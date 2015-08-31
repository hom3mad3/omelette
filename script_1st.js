//dove = (love) ? olive : bean ; 

var ingredient = {
    "egg": "icons/egg.svg",
    "butter": "icons/butter.svg",
    "salt": "icons/salt.svg",  
    "watermelon": "icons/watermelon.svg",
    "onion" : "icons/onion.svg",
    "pepper" : "icons/pepper.svg",
    "rice" : "icons/rice.svg",
    "chile" : "icons/chile.svg",

    "whisk": "icons/whisk.svg",
    "bowl" : "icons/bowl.svg",
    "pan" : "icons/pan.svg",
    "plate" : "icons/plate.svg",
    "fork" : "icons/fork.svg"



};

$(document).ready(function () {
    $('body').html(replaceWords($('body').html()));
});

function replaceWords(html) {
    for (var word in ingredient) {
        var re = new RegExp('\\b' + word + '\\b', 'gi');
        html = html.replace(re, '<img class="ingredient" src="icons/' + ingredient[word] + '.svg">');
    }
    return html;
}
