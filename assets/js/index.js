XRLoader.init({desktop: true, id: 'ha'});
setInterval(function() {
    let oldY = parseInt(document.getElementById('chrome').getAttribute('rotation').split(',')[1]);
    document.getElementById('chrome').setAttribute('rotation', '0,' + (oldY + 1) + ',0')
}, 20);
