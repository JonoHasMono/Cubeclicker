let versionNum = "0.0.1";

function startGame() {
    const bodyVar = document.createElement("div");

    document.body.appendChild(bodyVar);

    let cube = document.createElement("div");
    cube.classList.add("mainCube");
    bodyVar.appendChild(cube);

    let cubeVis = document.createElement("img");
    cubeVis.classList.add("cubeVis");
    cubeVis.setAttribute("src", "images/jerma.png");
    cube.appendChild(cubeVis);

    let version = document.createElement("div");
    version.classList.add("version");
    version.innerHTML = "Jerma Clicker - Version " + versionNum;
    bodyVar.appendChild(version);

    let clickHim = document.createElement("div");
    clickHim.classList.add("clickHim");
    clickHim.innerHTML = "Click the Jerma --->";

    document.addEventListener('keydown', logKey);

    function logKey(e) {
        let key = ` ${e.code}`
        key = key.toString();
        if (key == ' KeyW') {
            jumping = true;
          } else if (key == ' KeyP') {
            shooting = true;
          }
    }
}


startGame();