// JavaScript Document
document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function() {
            document.getElementById('interactive');
        }, 10);
    }
}