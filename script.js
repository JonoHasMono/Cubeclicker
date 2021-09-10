let versionNum = "0.0.5";
let score = 0
let upOneOpen = false
let jermaPower = 1;
let upOnePower = 1;
let jermaSpeed = 22;

function startGame() {
    const bodyVar = document.createElement("div");

    document.body.appendChild(bodyVar);

    let cube = document.createElement("div");
    cube.classList.add("mainCube");
    cube.style.animation = "spin " + jermaSpeed + "s linear infinite";
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

    let upOneCostNum = 50
    let upOneCost = document.createElement("div");
    upOneCost.classList.add("up1C");
    upOneCost.innerHTML = "$" + upOneCostNum.toString();
    bodyVar.appendChild(upOneCost);

    let upOneDesc = document.createElement("div");
    upOneDesc.classList.add("up1D");
    upOneDesc.innerHTML = "Jerma spins faster, granting more Jerma bucks per click"

    function spawnCubeParticle() {
        let cubeParticle = document.createElement("div");
        let particleTop = 47;
        let particleSpeed = 0
        cubeParticle.classList.add("cubeParticle");
        cubeParticle.style.left = (48 + (Math.floor(Math.random() * 5))).toString() + "%"
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
        score = score + jermaPower;
        scoreTop.innerHTML = "You have " + score + " Jerma bucks";
    }

    function showUpgrades() {
        function showUpgradeOne() {
            let upgradeOne = document.createElement("div");
            upgradeOne.classList.add("up1");
            upgradeOne.addEventListener("mouseover", openUpOne)
            upgradeOne.addEventListener("click", buyUpOne)
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

    function buyUpOne() {
        if(upOnePower < 10) {
        if (score >= upOneCostNum) {
            score = score - upOneCostNum
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upOneCostNum = upOneCostNum + (50 * (upOnePower ** 2));
            upOnePower = upOnePower + 1;
            jermaPower = jermaPower + 1;
            jermaSpeed = jermaSpeed - 2;
            cube.style.animation = "spin " + jermaSpeed + "s linear infinite";
            upOneCost.innerHTML = "$" + upOneCostNum.toString();
        }
    } else {
        upOneCost.innerHTML = "Maxed Out";
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