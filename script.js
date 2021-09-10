let versionNum = "0.1.8";
let score = 0
let upOneOpen = false;
let upTwoOpen = false;
let upThreeOpen = false;
let upFourOpen = false;
let upFiveOpen = false;
let upSixOpen = false;
let upSevenOpen = false;
let jermaPower = 1;
let upOnePower = 1;
let jermaSpeed = 21;
let upTwoPower = 1;
let upThreePower = 1;
let upFourPower = 1;
let upFivePower = 1;
let upSixPower = 1
let upSevenPower = 1;
let bigClick = 0;

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

    let upFourCostNum = 1250
    let upFourCost = document.createElement("div");
    upFourCost.classList.add("up4C");
    upFourCost.innerHTML = "$" + upFourCostNum.toString();
    bodyVar.appendChild(upFourCost);
    let upFourDesc = document.createElement("div");
    upFourDesc.classList.add("up4D");
    upFourDesc.innerHTML = "Jerma gets bigger, doubling all Jerma bucks collected"

    let upFiveCostNum = 2000
    let upFiveCost = document.createElement("div");
    upFiveCost.classList.add("up5C");
    upFiveCost.innerHTML = "$" + upFiveCostNum.toString();
    bodyVar.appendChild(upFiveCost);
    let upFiveDesc = document.createElement("div");
    upFiveDesc.classList.add("up5D");
    upFiveDesc.innerHTML = "Every 10th manual click is stronger, upgrading further increases it's strength"

    let upSixCostNum = 5000
    let upSixCost = document.createElement("div");
    upSixCost.classList.add("up6C");
    upSixCost.innerHTML = "$" + upSixCostNum.toString();
    bodyVar.appendChild(upSixCost);
    let upSixDesc = document.createElement("div");
    upSixDesc.classList.add("up6D");
    upSixDesc.innerHTML = "An Obamahedron manifests itself into our reality, gathering Jerma bucks from other dimensions"

    let upSevenCostNum = 9000
    let upSevenCost = document.createElement("div");
    upSevenCost.classList.add("up7C");
    upSevenCost.innerHTML = "$" + upSevenCostNum.toString();
    bodyVar.appendChild(upSevenCost);
    let upSevenDesc = document.createElement("div");
    upSevenDesc.classList.add("up7D");
    upSevenDesc.innerHTML = "A horrifying creature appears, colleting Jerma bucks using [REDACTED]"

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
        if(upFivePower > 1) {
            if (bigClick == 10) {
                bigClick = 0;
                score = score + (jermaPower * (upFourPower * 10))
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            } else {
            bigClick += 1;
            score = score + (jermaPower * upFourPower)
        scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            }
        } else {
        score = score + (jermaPower * upFourPower)
        scoreTop.innerHTML = "You have " + score + " Jerma bucks";
        }
    }

            let upgradeOne = document.createElement("div");
            upgradeOne.classList.add("up1");
            upgradeOne.addEventListener("mouseover", openUpOne)
            upgradeOne.addEventListener("click", buyUpOne)
            bodyVar.appendChild(upgradeOne);

            let upgradeTwo = document.createElement("div");
            upgradeTwo.classList.add("up2");
            upgradeTwo.addEventListener("mouseover", openUpTwo)
            upgradeTwo.addEventListener("click", buyUpTwo)
            bodyVar.appendChild(upgradeTwo);

            let upgradeThree = document.createElement("div");
            upgradeThree.classList.add("up3");
            upgradeThree.addEventListener("mouseover", openUpThree)
            upgradeThree.addEventListener("click", buyUpThree)
            bodyVar.appendChild(upgradeThree);

            let upgradeFour = document.createElement("div");
            upgradeFour.classList.add("up4");
            upgradeFour.addEventListener("mouseover", openUpFour)
            upgradeFour.addEventListener("click", buyUpFour)
            bodyVar.appendChild(upgradeFour);

            let upgradeFive = document.createElement("div");
            upgradeFive.classList.add("up5");
            upgradeFive.addEventListener("mouseover", openUpFive)
            upgradeFive.addEventListener("click", buyUpFive)
            bodyVar.appendChild(upgradeFive);

            let upgradeSix = document.createElement("div");
            upgradeSix.classList.add("up6");
            upgradeSix.addEventListener("mouseover", openUpSix)
            upgradeSix.addEventListener("click", buyUpSix)
            bodyVar.appendChild(upgradeSix);
            
            let upgradeSeven = document.createElement("div");
            upgradeSeven.classList.add("up7");
            upgradeSeven.addEventListener("mouseover", openUpSeven)
            upgradeSeven.addEventListener("click", buyUpSeven)
            bodyVar.appendChild(upgradeSeven);

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

    function openUpFive() {
        if (upFiveOpen == false) {
            upFiveOpen = true;
            bodyVar.appendChild(upFiveDesc);
        }
    }

    function openUpSix() {
        if (upSixOpen == false) {
            upSixOpen = true;
            bodyVar.appendChild(upSixDesc);
        }
    }

    function openUpSeven() {
        if (upSevenOpen == false) {
            upSevenOpen = true;
            bodyVar.appendChild(upSevenDesc);
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
        upgradeOne.style.animation = "spin 5s linear infinite";
        upOneCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpTwo() {
        if(upTwoPower < 20) {
        if (score >= upTwoCostNum) {
            if(upTwoPower == 1) {
                let jah = document.createElement("img")
                jah.classList.add("jah");
                jah.setAttribute("src", "images/jah.gif");
                bodyVar.appendChild(jah);
            }
            score = score - upTwoCostNum
            upTwoCostNum = upTwoCostNum + (200 * (upTwoPower ** 2));
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upTwoPower = upTwoPower + 1;
            upTwoCost.innerHTML = "$" + upTwoCostNum.toString();
        }
    } else {
        upgradeTwo.style.animation = "spin 5s linear infinite";
        upTwoCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpThree() {
        if(upThreePower < 20) {
        if (score >= upThreeCostNum) {
            if(upThreePower == 1) {
                let scottish = document.createElement("img")
                scottish.classList.add("scottish");
                scottish.setAttribute("src", "images/scottish.gif");
                bodyVar.appendChild(scottish);
            }
            score = score - upThreeCostNum
            upThreeCostNum = upThreeCostNum + (300 * (upThreePower ** 2));
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upThreePower = upThreePower + 1;
            upThreeCost.innerHTML = "$" + upThreeCostNum.toString();
        }
    } else {
        upgradeThree.style.animation = "spin 5s linear infinite";
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
            upgradeFour.style.animation = "spin 5s linear infinite";
            upFourCost.innerHTML = "Maxed Out";
        }
    }
    }

    function buyUpFive() {
        if(upFivePower < 5) {
        if (score >= upFiveCostNum) {
            score = score - upFiveCostNum
            upFiveCostNum = upFiveCostNum + (500 * (upFivePower ** 2));
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upFivePower = upFivePower + 1;
            upFiveCost.innerHTML = "$" + upFiveCostNum.toString();
        }
    } else {
        upgradeFive.style.animation = "spin 5s linear infinite";
        upFiveCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpSix() {
        if(upSixPower < 10) {
        if (score >= upSixCostNum) {
            if(upSixPower == 1) {
                let ohed = document.createElement("img")
                ohed.classList.add("ohed");
                ohed.setAttribute("src", "images/Obamahedron.gif");
                bodyVar.appendChild(ohed);
            }
            score = score - upSixCostNum
            upSixCostNum = upSixCostNum + (500 * (upSixPower ** 2));
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upSixPower = upSixPower + 1;
            upSixCost.innerHTML = "$" + upSixCostNum.toString();
        }
    } else {
        upgradeSix.style.animation = "spin 5s linear infinite";
        upSixCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpSeven() {
        if(upSevenPower < 10) {
        if (score >= upSevenCostNum) {
            if(upSevenPower == 1) {
                let creepy = document.createElement("img")
                creepy.classList.add("creepy");
                creepy.setAttribute("src", "images/creepy.gif");
                bodyVar.appendChild(creepy);
            }
            score = score - upSevenCostNum
            upSevenCostNum = upSevenCostNum + (2500 * (upSevenPower ** 2));
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
            upSevenPower = upSevenPower + 1;
            upSevenCost.innerHTML = "$" + upSevenCostNum.toString();
        }
    } else {
        upgradeSeven.style.animation = "spin 5s linear infinite";
        upSevenCost.innerHTML = "Maxed Out";
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
        if(upFiveOpen == true) {
            upFiveOpen = false;
            bodyVar.removeChild(upFiveDesc);
        }
        if(upSixOpen == true) {
            upSixOpen = false;
            bodyVar.removeChild(upSixDesc);
        }
        if(upSevenOpen == true) {
            upSevenOpen = false;
            bodyVar.removeChild(upSevenDesc);
        }
    }

    document.addEventListener('keydown', logKey);

    function logKey(e) {
        let key = ` ${e.code}`
        key = key.toString();
        if (key == ' KeyW') {
            jermaClicked();
            } else if (key == ' KeyQ') {
                jermaClicked();
        } else if (key == ' KeyE') {
            jermaClicked();
    } else if (key == ' KeyR') {
        jermaClicked();
          } else if (key == ' KeyP') {
            score = 420420420;
            scoreTop.innerHTML = "You have " + score + " Jerma bucks";
          }
    }

    function jahClicker() {
        setTimeout(() => {
            if(upTwoPower >= 2) {
                score = score + (jermaPower * upFourPower);
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
                score = score + (jermaPower * upFourPower);
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
    function ohedClicker() {
        setTimeout(() => {
            if(upSixPower >= 2) {
                score = score + (jermaPower * upFourPower);
                scoreTop.innerHTML = "You have " + score + " Jerma bucks";
                spawnOhedParticle();
                function spawnOhedParticle() {
                    let ohedParticle = document.createElement("div");
                    let oparticleTop = 42;
                    let oparticleSpeed = 0
                    ohedParticle.classList.add("ohedParticle");
                    ohedParticle.style.left = (83 + (Math.floor(Math.random() * 5))).toString() + "%"
                    ohedParticle.style.top = oparticleTop + "%"
                    bodyVar.appendChild(ohedParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (oparticleTop < 100) {
                            oparticleTop = oparticleTop + oparticleSpeed;
                            oparticleSpeed = oparticleSpeed + 0.01;
                            ohedParticle.style.top = oparticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(ohedParticle);
                            }
                        }, 10)
                    }
                }
            }
            ohedClicker();
        }, (500 / upSixPower))
    }

    function creepyClicker() {
        setTimeout(() => {
            let creepyChance = Math.random();
            if (creepyChance > 0.35) {
            if(upSevenPower >= 2) {
                score = score + (jermaPower * upFourPower);
                scoreTop.innerHTML = "You have " + score + " Jerma bucks";
                spawnCreepyParticle();
                function spawnCreepyParticle() {
                    let creepyParticle = document.createElement("div");
                    let cparticleTop = 62;
                    let cparticleSpeed = 0
                    creepyParticle.classList.add("ohedParticle");
                    creepyParticle.style.left = (63 + (Math.floor(Math.random() * 5))).toString() + "%"
                    creepyParticle.style.top = cparticleTop + "%"
                    bodyVar.appendChild(creepyParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (cparticleTop < 100) {
                            cparticleTop = cparticleTop + cparticleSpeed;
                            cparticleSpeed = cparticleSpeed + 0.01;
                            creepyParticle.style.top = cparticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(creepyParticle);
                            }
                        }, 10)
                    }
                }
            }
        }
            creepyClicker();
        }, (250 / upSevenPower))
    }
    jahClicker();
    scottishClicker(); 
    ohedClicker();
    creepyClicker();

}


startGame();