let versionNum = "0.0.4";
let score = 0
let upOneOpen = false

function startGame() {
    const bodyVar = document.createElement("div");

    document.body.appendChild(bodyVar);

    let cube = document.createElement("div");
    cube.classList.add("mainCube");
    bodyVar.appendChild(cube);

    let cubeVis = document.createElement("img");
    cubeVis.classList.add("cubeVis");
    cubeVis.setAttribute("src", "images/jerma.png");
    cubeVis.addEventListener("click", jermaClicked);
    cube.appendChild(cubeVis);

    let version = document.createElement("div");
    version.classList.add("version");
    version.innerHTML = "Jerma Clicker - Version " + versionNum;
    bodyVar.appendChild(version);

    let clickHim = document.createElement("div");
    clickHim.classList.add("clickHim");
    clickHim.innerHTML = "Click the Jerma >>>";
    bodyVar.appendChild(clickHim);

    let scoreTop = document.createElement("div");
    scoreTop.classList.add("scoreTop");
    scoreTop.innerHTML = "You have " + score + " Jerma bucks";
    bodyVar.appendChild(scoreTop);
    let scoreBottom = document.createElement("div");
    scoreBottom.classList.add("scoreBottom");
    scoreBottom.innerHTML = "(Click the Jerma cube to get more)";
    bodyVar.appendChild(scoreBottom);

    let upOneDesc = document.createElement("div");
            upOneDesc.classList.add("up1D");
            upOneDesc.innerHTML = "Increases Jerma's size, granting more Jerma bucks per click"

    function spawnCubeParticle() {
        let cubeParticle = document.createElement("div");
        let particleTop = 47;
        let particleSpeed = 0
        cubeParticle.classList.add("cubeParticle");
        cubeParticle.style.left = (45 + (Math.floor(Math.random() * 11))).toString() + "%"
        cubeParticle.style.top = particleTop + "%"
        bodyVar.appendChild(cubeParticle);
        moveParticle();
        function moveParticle() {
            setTimeout(() => {
                if (particleTop < 100) {
                particleTop = particleTop + particleSpeed;
                particleSpeed = particleSpeed + 0.01;
                cubeParticle.style.top = particleTop + "%";
                moveParticle()
                } else {
                    bodyVar.removeChild(cubeParticle);
                }
            }, 10)
        }
    }

    function jermaClicked() {
        spawnCubeParticle();
        score = score + 1;
        scoreTop.innerHTML = "You have " + score + " Jerma bucks";
    }

    function showUpgrades() {
        function showUpgradeOne() {
            let upgradeOne = document.createElement("div");
            upgradeOne.classList.add("up1");
            upgradeOne.addEventListener("mouseover", openUpOne)
            bodyVar.appendChild(upgradeOne);
        }
        showUpgradeOne();
    }

    function openUpOne() {
        if (upOneOpen == false) {
            upOneOpen = true;
            bodyVar.appendChild(upOneDesc);
        }
    }
    let upDel = document.createElement("div");
    upDel.classList.add("upDel");
    upDel.addEventListener("mouseover", delUpDesc);
    bodyVar.appendChild(upDel);

    function delUpDesc() {
        if(upOneOpen == true) {
            upOneOpen = false;
            bodyVar.removeChild(upOneDesc);
        }
    }

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

    showUpgrades();
}


startGame();