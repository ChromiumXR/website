XRLoader.init({desktop: true, id: 'ha'});
setInterval(function() {
    let oldY = parseInt(document.getElementById('r2d2').getAttribute('rotation').split(',')[1]);
    document.getElementById('r2d2').setAttribute('rotation', '0,' + (oldY + 1) + ',0')
}, 20);
