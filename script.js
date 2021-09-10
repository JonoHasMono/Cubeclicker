let versionNum = "0.0.9";
let score = 0
let upOneOpen = false;
let upTwoOpen = false;
let upThreeOpen = false;
let upFourOpen = false;
let jermaPower = 1;
let upOnePower = 1;
let jermaSpeed = 21;
let upTwoPower = 1;
let upThreePower = 1;
let upFourPower = 1;

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

    let upTwoCostNum = 250
    let upTwoCost = document.createElement("div");
    upTwoCost.classList.add("up2C");
    upTwoCost.innerHTML = "$" + upTwoCostNum.toString();
    bodyVar.appendChild(upTwoCost);
    let upTwoDesc = document.createElement("div");
    upTwoDesc.classList.add("up2D");
    upTwoDesc.innerHTML = "Jerma's friend Jah appears, clicking Jerma for you"
    
    let upThreeCostNum = 400
    let upThreeCost = document.createElement("div");
    upThreeCost.classList.add("up3C");
    upThreeCost.innerHTML = "$" + upThreeCostNum.toString();
    bodyVar.appendChild(upThreeCost);
    let upThreeDesc = document.createElement("div");
    upThreeDesc.classList.add("up3D");
    upThreeDesc.innerHTML = "A very drunk scottish man appears, clicking Jerma in random intervals"

    let upFourCostNum = 690
    let upFourCost = document.createElement("div");
    upFourCost.classList.add("up4C");
    upFourCost.innerHTML = "$" + upFourCostNum.toString();
    bodyVar.appendChild(upFourCost);
    let upFourDesc = document.createElement("div");
    upFourDesc.classList.add("up4D");
    upFourDesc.innerHTML = "Jerma gets bigger, doubling all Jerma bucks collected"

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
        function showUpgradeTwo() {
            let upgradeTwo = document.createElement("div");
            upgradeTwo.classList.add("up2");
            upgradeTwo.addEventListener("mouseover", openUpTwo)
            upgradeTwo.addEventListener("click", buyUpTwo)
            bodyVar.appendChild(upgradeTwo);
        }
        function showUpgradeThree() {
            let upgradeThree = document.createElement("div");
            upgradeThree.classList.add("up3");
            upgradeThree.addEventListener("mouseover", openUpThree)
            upgradeThree.addEventListener("click", buyUpThree)
            bodyVar.appendChild(upgradeThree);
        }
        function showUpgradeFour() {
            let upgradeFour = document.createElement("div");
            upgradeFour.classList.add("up4");
            upgradeFour.addEventListener("mouseover", openUpFour)
            upgradeFour.addEventListener("click", buyUpFour)
            bodyVar.appendChild(upgradeFour);
        }
        showUpgradeOne();
        showUpgradeTwo();
        showUpgradeThree();
        showUpgradeFour();
    }

    function openUpOne() {
        if (upOneOpen == false) {
            upOneOpen = true;
            bodyVar.appendChild(upOneDesc);
        }
    }

    function openUpTwo() {
        if (upTwoOpen == false) {
            upTwoOpen = true;
            bodyVar.appendChild(upTwoDesc);
        }
    }

    function openUpThree() {
        if (upThreeOpen == false) {
            upThreeOpen = true;
            bodyVar.appendChild(upThreeDesc);
        }
    }

    function openUpFour() {
        if (upFourOpen == false) {
            upFourOpen = true;
            bodyVar.appendChild(upFourDesc);
        }
    }

    function buyUpOne() {
        if(upOnePower < 20) {
        if (score >= upOneCostNum) {
            score = score - upOneCostNum
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upOneCostNum = upOneCostNum + (50 * (upOnePower ** 2));
            upOnePower = upOnePower + 1;
            jermaPower = jermaPower + 1;
            jermaSpeed = jermaSpeed - 1;
            cube.style.animation = "spin " + jermaSpeed + "s linear infinite";
            upOneCost.innerHTML = "$" + upOneCostNum.toString();
        }
    } else {
        upOneCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpTwo() {
        if(upTwoPower < 10) {
        if (score >= upTwoCostNum) {
            if(upTwoPower == 1) {
                let jah = document.createElement("img")
                jah.classList.add("jah");
                jah.setAttribute("src", "images/jah.gif");
                bodyVar.appendChild(jah);
            }
            score = score - upTwoCostNum
            upTwoCostNum = upTwoCostNum + (250 * (upTwoPower ** 2));
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upTwoPower = upTwoPower + 1;
            upTwoCost.innerHTML = "$" + upTwoCostNum.toString();
        }
    } else {
        upTwoCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpThree() {
        if(upThreePower < 10) {
        if (score >= upThreeCostNum) {
            if(upThreePower == 1) {
                let scottish = document.createElement("img")
                scottish.classList.add("scottish");
                scottish.setAttribute("src", "images/scottish.gif");
                bodyVar.appendChild(scottish);
            }
            score = score - upThreeCostNum
            upThreeCostNum = upThreeCostNum + (250 * (upThreePower ** 2));
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upThreePower = upThreePower + 1;
            upThreeCost.innerHTML = "$" + upThreeCostNum.toString();
        }
    } else {
        upThreeCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpFour() {
        if(upFourPower == 1) {
        if (score >= upFourCostNum) {
            cube.style.width = "175px"
            cube.style.height = "175px"
            cube.style.left = "44%"
            cube.style.top = "39%"
            cubeVis.style.width = "160px"
            cubeVis.style.height = "160px"
            cubeVis.style.left = "44.5%"
            cubeVis.style.top = "39%"
            score = score - upFourCostNum
            upFourCostNum = upFourCostNum + (250 * (upThreePower ** 2));
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upFourPower = upFourPower + 1;
            upFourCost.innerHTML = "$" + upFourCostNum.toString();
        }
    } else {
        upFourCost.innerHTML = "Maxed Out";
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
        if(upTwoOpen == true) {
            upTwoOpen = false;
            bodyVar.removeChild(upTwoDesc);
        }
        if(upThreeOpen == true) {
            upThreeOpen = false;
            bodyVar.removeChild(upThreeDesc);
        }
        if(upFourOpen == true) {
            upFourOpen = false;
            bodyVar.removeChild(upFourDesc);
        }
    }

    document.addEventListener('keydown', logKey);

    function logKey(e) {
        let key = ` ${e.code}`
        key = key.toString();
        if (key == ' KeyW') {
          } else if (key == ' KeyP') {
            score = 420420420;
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
          }
    }

    function jahClicker() {
        setTimeout(() => {
            if(upTwoPower >= 2) {
                score = score + jermaPower;
                scoreTop.innerHTML = "You have " + score + " Jerma bucks";
                spawnJahParticle();
                function spawnJahParticle() {
                    let jahParticle = document.createElement("div");
                    let jparticleTop = 42;
                    let jparticleSpeed = 0
                    jahParticle.classList.add("jahParticle");
                    jahParticle.style.left = (63 + (Math.floor(Math.random() * 5))).toString() + "%"
                    jahParticle.style.top = jparticleTop + "%"
                    bodyVar.appendChild(jahParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (jparticleTop < 100) {
                            jparticleTop = jparticleTop + jparticleSpeed;
                            jparticleSpeed = jparticleSpeed + 0.01;
                            jahParticle.style.top = jparticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(jahParticle);
                            }
                        }, 10)
                    }
                }
            }
            jahClicker();
        }, (2000 / upTwoPower))
    }

    function scottishClicker() {
        setTimeout(() => {
            let scottishChance = Math.random();
            if (scottishChance > 0.5) {

            if(upThreePower >= 2) {
                score = score + jermaPower;
                scoreTop.innerHTML = "You have " + score + " Jerma bucks";
                spawnScottishParticle();
                function spawnScottishParticle() {
                    let scottishParticle = document.createElement("div");
                    let sparticleTop = 42;
                    let sparticleSpeed = 0
                    scottishParticle.classList.add("scottishParticle");
                    scottishParticle.style.left = (73 + (Math.floor(Math.random() * 5))).toString() + "%"
                    scottishParticle.style.top = sparticleTop + "%"
                    bodyVar.appendChild(scottishParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (sparticleTop < 100) {
                            sparticleTop = sparticleTop + sparticleSpeed;
                            sparticleSpeed = sparticleSpeed + 0.01;
                            scottishParticle.style.top = sparticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(scottishParticle);
                            }
                        }, 10)
                    }
                }
            }
        }
            scottishClicker();
        }, (500 / upThreePower))
    }
    jahClicker();
    scottishClicker();
    showUpgrades();
}


startGame();