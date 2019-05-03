XRLoader.init({desktop: true, id: 'ha'});
let model = new XRModel({ obj: './models/chrome/chrome.obj', mtl: './models/chrome/chrome.mtl', texturePath: './models/chrome/'});

model.setRotation(0, 0, 0);
model.setScale(1, 1, 1);
model.build();
