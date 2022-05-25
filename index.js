const newImage = (source, left, bottom) => {
    let image = document.createElement('img');
    image.src = source;
    image.style.position = 'fixed';
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
    return image
}

const newItem = (source, left, bottom) => {
    // let item = document.createElement('img');
    // item.src = source;
    // item.style.position = 'fixed';
    // item.style.left = left;
    // item.style.bottom = bottom;
    // document.body.append(item);

    let item = newImage(source, left, bottom);
    item.addEventListener('dblclick', function () {
        item.remove();
    })

}

const makeBackground = (source, bottom, top) => {

    for (let y = bottom; y < top; y += 100) {
        for (let x = 0; x < window.innerWidth; x += 100) {
            newImage(source, x + "px", y + "px");
        }
    }

}

makeBackground("./assets/grass.png", 0, (window.innerHeight * 0.6));
makeBackground("./assets/sky.png", (window.innerHeight * 0.6), window.innerHeight);

// for (let y = window.innerHeight * 0.6; y < window.innerHeight; y += 100) {
//     for (let x = 0; x < window.innerWidth; x += 100) {
//         newImage("./assets/sky.png", x + "px", y + "px");
//     }
// }

newImage("./assets/green-character.gif", "100px", "100px");

// let greenCharacter = document.createElement('img');
// greenCharacter.src = './assets/green-character.gif';
// greenCharacter.style.position = 'fixed';
// greenCharacter.style.left = '100px';
// greenCharacter.style.bottom = '100px';
// document.body.append(greenCharacter);

newImage("./assets/pine-tree.png", "450px", "200px");

// let pineTree = document.createElement("img");
// pineTree.src = './assets/pine-tree.png';
// pineTree.style.position = 'fixed';
// pineTree.style.left = '450px';
// pineTree.style.bottom = '200px';
// document.body.append(pineTree);

newImage("./assets/tree.png", "200px", "300px");
newImage("./assets/pillar.png", "350px", "100px");
newImage("./assets/crate.png", "150px", "200px");
newImage("./assets/well.png", "500px", "425px");


newItem("./assets/sword.png", "500px", "405px");
newItem("./assets/shield.png", "165px", "185px");
newItem("./assets/staff.png", "600px", "100px");
