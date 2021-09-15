let versionNum = "0.5.9";
let score = 0
let upOneOpen = false;
let upTwoOpen = false;
let upThreeOpen = false;
let upFourOpen = false;
let upFiveOpen = false;
let upSixOpen = false;
let upSevenOpen = false;
let upEightOpen = false;
let upNineOpen = false;
let up10Open = false;
let up11Open = false;
let up12Open = false;
let up13Open = false;
let up14Open = false;
let jermaPower = 1;
let upOnePower = 1;
let jermaSpeed = 21;
let upTwoPower = 1;
let upThreePower = 1;
let upFourPower = 1;
let upFivePower = 1;
let upSixPower = 1
let upSevenPower = 1;
let upEightPower = 1;
let upNinePower = 1;
let up10Power = 1;
let up11Power = 1;
let up12Power = 1;
let up13Power = 1;
let up14Power = 1;
let bigClick = 0;

function startGame() {
    const bodyVar = document.createElement("div");

    function numberCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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

    let scoreTop = document.createElement("div");
    scoreTop.classList.add("scoreTop");
    scoreTop.innerHTML = "You have " + score + " Jerma bucks";
    bodyVar.appendChild(scoreTop);
    let scoreBottom = document.createElement("div");
    scoreBottom.classList.add("scoreBottom");
    scoreBottom.innerHTML = "(Click the Jerma cube to get more)";
    bodyVar.appendChild(scoreBottom);
    setTimeout(() => {
        scoreBottom.style.animation = "scoreMove 6s ease infinite";
    }, 150)

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
    upFourCost.innerHTML = "$" + numberCommas(upFourCostNum);
    bodyVar.appendChild(upFourCost);
    let upFourDesc = document.createElement("div");
    upFourDesc.classList.add("up4D");
    upFourDesc.innerHTML = "Jerma gets bigger, doubling all Jerma bucks collected"

    let upFiveCostNum = 2000
    let upFiveCost = document.createElement("div");
    upFiveCost.classList.add("up5C");
    upFiveCost.innerHTML = "$" + numberCommas(upFiveCostNum);
    bodyVar.appendChild(upFiveCost);
    let upFiveDesc = document.createElement("div");
    upFiveDesc.classList.add("up5D");
    upFiveDesc.innerHTML = "Every 10th manual click is stronger, upgrading further increases it's strength"

    let upSixCostNum = 5000
    let upSixCost = document.createElement("div");
    upSixCost.classList.add("up6C");
    upSixCost.innerHTML = "$" + numberCommas(upSixCostNum);
    bodyVar.appendChild(upSixCost);
    let upSixDesc = document.createElement("div");
    upSixDesc.classList.add("up6D");
    upSixDesc.innerHTML = "An Obamahedron manifests itself into our reality, gathering Jerma bucks from other obamensions"

    let upSevenCostNum = 9000
    let upSevenCost = document.createElement("div");
    upSevenCost.classList.add("up7C");
    upSevenCost.innerHTML = "$" + numberCommas(upSevenCostNum);
    bodyVar.appendChild(upSevenCost);
    let upSevenDesc = document.createElement("div");
    upSevenDesc.classList.add("up7D");
    upSevenDesc.innerHTML = "A horrifying creature appears, colleting Jerma bucks using [REDACTED]"

    let upEightCostNum = 14000
    let upEightCost = document.createElement("div");
    upEightCost.classList.add("up8C");
    upEightCost.innerHTML = "$" + numberCommas(upEightCostNum);
    bodyVar.appendChild(upEightCost);
    let upEightDesc = document.createElement("div");
    upEightDesc.classList.add("up8D");
    upEightDesc.innerHTML = "An incredibly fat cat appears and freakin' boogies, earning Jerma bucks for his sick moves"

    let upNineCostNum = 50000
    let upNineCost = document.createElement("div");
    upNineCost.classList.add("up9C");
    upNineCost.innerHTML = "$" + numberCommas(upNineCostNum);
    bodyVar.appendChild(upNineCost);
    let upNineDesc = document.createElement("div");
    upNineDesc.classList.add("up9D");
    upNineDesc.innerHTML = "Jerma grows in power from overwhelming popularity, manual clicks become x4 stronger"

    let up10CostNum = 80000
    let up10Cost = document.createElement("div");
    up10Cost.classList.add("up10C");
    up10Cost.innerHTML = "$" + numberCommas(up10CostNum);
    bodyVar.appendChild(up10Cost);
    let up10Desc = document.createElement("div");
    up10Desc.classList.add("up10D");
    up10Desc.innerHTML = "Summons a curious god who contemplates whether or not it should give you Jerma bucks"

    let up11CostNum = 200000
    let up11Cost = document.createElement("div");
    up11Cost.classList.add("up11C");
    up11Cost.innerHTML = "$" + numberCommas(up11CostNum);
    bodyVar.appendChild(up11Cost);
    let up11Desc = document.createElement("div");
    up11Desc.classList.add("up11D");
    up11Desc.innerHTML = "Jah goes sicko mode, gaining extreme power and making even more Jerma bucks"

    let up12CostNum = 500000
    let up12Cost = document.createElement("div");
    up12Cost.classList.add("up12C");
    up12Cost.innerHTML = "$" + numberCommas(up12CostNum);
    bodyVar.appendChild(up12Cost);
    let up12Desc = document.createElement("div");
    up12Desc.classList.add("up12D");
    up12Desc.innerHTML = "Birby joins your cause, sucking up Jerma bucks gathered from across the Milky Way Galaxy"
    
    let up13CostNum = 1200000
    let up13Cost = document.createElement("div");
    up13Cost.classList.add("up13C");
    up13Cost.innerHTML = "$" + numberCommas(up13CostNum);
    bodyVar.appendChild(up13Cost);
    let up13Desc = document.createElement("div");
    up13Desc.classList.add("up13D");
    up13Desc.innerHTML = "A cool diamond appears, rewarding you with random amounts of Jerma bucks"

    let up14CostNum = 2500000
    let up14Cost = document.createElement("div");
    up14Cost.classList.add("up14C");
    up14Cost.innerHTML = "$" + numberCommas(up14CostNum);
    bodyVar.appendChild(up14Cost);
    let up14Desc = document.createElement("div");
    up14Desc.classList.add("up14D");
    up14Desc.innerHTML = "The whole planet now makes Jerma bucks for you"
    
    function spawnCubeParticle() {
        let cubeParticle = document.createElement("div");
        let particleTop = 47;
        let particleSpeed = 0;
        cubeParticle.classList.add("cubeParticle");
        cubeParticle.style.left = (12.5 + (Math.floor(Math.random() * 5))).toString() + "%"
        cubeParticle.style.top = particleTop + "%"
        bodyVar.appendChild(cubeParticle);
        moveParticle();
        function moveParticle() {
            setTimeout(() => {
                if (particleTop < 100) {
                particleTop = particleTop + particleSpeed;
                particleSpeed = particleSpeed + 0.05;
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
                score = score + (jermaPower * upFivePower * upNinePower * (upFourPower * 10))
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            } else {
            bigClick += 1;
            score = score + (jermaPower * upFourPower * upNinePower)
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            }
        } else {
        score = score + (jermaPower * upFourPower * upNinePower)
        scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
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

            let upgradeEight = document.createElement("div");
            upgradeEight.classList.add("up8");
            upgradeEight.addEventListener("mouseover", openUpEight)
            upgradeEight.addEventListener("click", buyUpEight)
            bodyVar.appendChild(upgradeEight);

            let upgradeNine = document.createElement("div");
            upgradeNine.classList.add("up9");
            upgradeNine.addEventListener("mouseover", openUpNine)
            upgradeNine.addEventListener("click", buyUpNine)
            bodyVar.appendChild(upgradeNine);

            let upgrade10 = document.createElement("div");
            upgrade10.classList.add("up10");
            upgrade10.addEventListener("mouseover", openUp10)
            upgrade10.addEventListener("click", buyUp10)
            bodyVar.appendChild(upgrade10);

            let upgrade11 = document.createElement("div");
            upgrade11.classList.add("up11");
            upgrade11.addEventListener("mouseover", openUp11)
            upgrade11.addEventListener("click", buyUp11)
            bodyVar.appendChild(upgrade11);

            let upgrade12 = document.createElement("div");
            upgrade12.classList.add("up12");
            upgrade12.addEventListener("mouseover", openUp12)
            upgrade12.addEventListener("click", buyUp12)
            bodyVar.appendChild(upgrade12);

            let upgrade13 = document.createElement("div");
            upgrade13.classList.add("up13");
            upgrade13.addEventListener("mouseover", openUp13)
            upgrade13.addEventListener("click", buyUp13)
            bodyVar.appendChild(upgrade13);

            let upgrade14 = document.createElement("div");
            upgrade14.classList.add("up14");
            upgrade14.addEventListener("mouseover", openUp14)
            upgrade14.addEventListener("click", buyUp14)
            bodyVar.appendChild(upgrade14);

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

    function openUpEight() {
        if (upEightOpen == false) {
            upEightOpen = true;
            bodyVar.appendChild(upEightDesc);
        }
    }

    function openUpNine() {
        if (upNineOpen == false) {
            upNineOpen = true;
            bodyVar.appendChild(upNineDesc);
        }
    }

    function openUp10() {
        if (up10Open == false) {
            up10Open = true;
            bodyVar.appendChild(up10Desc);
        }
    }

    function openUp11() {
        if (up11Open == false) {
            up11Open = true;
            bodyVar.appendChild(up11Desc);
        }
    }

    function openUp12() {
        if (up12Open == false) {
            up12Open = true;
            bodyVar.appendChild(up12Desc);
        }
    }

    function openUp13() {
        if (up13Open == false) {
            up13Open = true;
            bodyVar.appendChild(up13Desc);
        }
    }

    function openUp14() {
        if (up14Open == false) {
            up14Open = true;
            bodyVar.appendChild(up14Desc);
        }
    }

    function buyUpOne() {
        if(upOnePower < 100) {
        if (score >= upOneCostNum) {
            score = score - upOneCostNum
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upOneCostNum = upOneCostNum + (40 * (upOnePower ** 2));
            upOnePower = upOnePower + 1;
            jermaPower = jermaPower + 1;
            jermaSpeed = jermaSpeed - 0.1;
            cube.style.animation = "spin " + jermaSpeed + "s linear infinite";
            upOneCost.innerHTML = "$" + numberCommas(upOneCostNum);
        }
    } else {
        upgradeOne.style.animation = "spin 5s linear infinite";
        upOneCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpTwo() {
        if(upTwoPower < 25) {
        if (score >= upTwoCostNum) {
            if(upTwoPower == 1) {
                let jah = document.createElement("img")
                jah.classList.add("jah");
                jah.setAttribute("src", "images/jah.gif");
                bodyVar.appendChild(jah);
            }
            score = score - upTwoCostNum
            upTwoCostNum = upTwoCostNum + (200 * (upTwoPower ** 2));
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upTwoPower = upTwoPower + 1;
            upTwoCost.innerHTML = "$" + numberCommas(upTwoCostNum);
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
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upThreePower = upThreePower + 1;
            upThreeCost.innerHTML = "$" + numberCommas(upThreeCostNum);
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
            cube.style.left = "9%"
            cube.style.top = "34%"
            cubeVis.style.width = "160px"
            cubeVis.style.height = "160px"
            cubeVis.style.left = "44.5%"
            cubeVis.style.top = "39%"
            score = score - upFourCostNum
            upFourCostNum = upFourCostNum + (250 * (upThreePower ** 2));
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upFourPower = upFourPower + 1;
            upFourCost.innerHTML = "$" + upFourCostNum.toString();
            upgradeFour.style.animation = "spin 5s linear infinite";
            upFourCost.innerHTML = "Maxed Out";
        }
    }
    }

    function buyUpFive() {
        if(upFivePower < 10) {
        if (score >= upFiveCostNum) {
            score = score - upFiveCostNum
            upFiveCostNum = upFiveCostNum + (1000 * (upFivePower ** 2));
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upFivePower = upFivePower + 1;
            upFiveCost.innerHTML = "$" + numberCommas(upFiveCostNum);
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
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upSixPower = upSixPower + 1;
            upSixCost.innerHTML = "$" + numberCommas(upSixCostNum);
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
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upSevenPower = upSevenPower + 1;
            upSevenCost.innerHTML = "$" + numberCommas(upSevenCostNum);
        }
    } else {
        upgradeSeven.style.animation = "spin 5s linear infinite";
        upSevenCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpEight() {
        if(upEightPower < 10) {
        if (score >= upEightCostNum) {
            if(upEightPower == 1) {
                let garf = document.createElement("img")
                garf.classList.add("garf");
                garf.setAttribute("src", "images/garfield.gif");
                bodyVar.appendChild(garf);
            }
            score = score - upEightCostNum
            upEightCostNum = upEightCostNum + (6500 * (upEightPower ** 2));
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upEightPower = upEightPower + 1;
            upEightCost.innerHTML = "$" + numberCommas(upEightCostNum);
        }
    } else {
        upgradeEight.style.animation = "spin 5s linear infinite";
        upEightCost.innerHTML = "Maxed Out";
    }
    }

    function buyUpNine() {
        if(upNinePower == 1) {
            score = score - upNineCostNum
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            upNinePower = 4;
        upgradeNine.style.animation = "spin 5s linear infinite";
        upNineCost.innerHTML = "Maxed Out";
        let glow = document.createElement("div")
                glow.classList.add("glow");
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
                bodyVar.appendChild(glow);
    }
    }

    function buyUp10() {
        if(up10Power < 20) {
        if (score >= up10CostNum) {
            if(up10Power == 1) {
                let hmm = document.createElement("img")
                hmm.classList.add("hmm");
                hmm.setAttribute("src", "images/hmm.gif");
                bodyVar.appendChild(hmm);
            }
            score = score - up10CostNum
            up10CostNum = up10CostNum + (6500 * (up10Power ** 2));
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
               up10Power = up10Power + 1;
               up10Cost.innerHTML = "$" + numberCommas(up10CostNum);
        }
    } else {
        upgrade10.style.animation = "spin 5s linear infinite";
        up10Cost.innerHTML = "Maxed Out";
    }
    }

    function buyUp11() {
        if(up11Power == 1) {
            score = score - up11CostNum
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
            up11Power = 2;
        upgrade11.style.animation = "spin 5s linear infinite";
        up11Cost.innerHTML = "Maxed Out";
        jah.style.boxShadow = "0 0 150px rgb(255, 150, 0)"
    }
    }

    function buyUp12() {
        if(up12Power < 20) {
        if (score >= up12CostNum) {
            if(up12Power == 1) {
                let birby = document.createElement("img")
                birby.classList.add("birby");
                birby.setAttribute("src", "images/birby.gif");
                bodyVar.appendChild(birby);
            }
            score = score - up12CostNum
            up12CostNum = up12CostNum + (20000 * (up12Power ** 2));
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
               up12Power = up12Power + 1;
               up12Cost.innerHTML = "$" + numberCommas(up12CostNum);
        }
    } else {
        upgrade12.style.animation = "spin 5s linear infinite";
        up12Cost.innerHTML = "Maxed Out";
    }
    }

    function buyUp13() {
        if(up13Power < 10) {
        if (score >= up13CostNum) {
            if(up13Power == 1) {
                let diamond = document.createElement("img")
                diamond.classList.add("diamond");
                diamond.setAttribute("src", "images/diamond.gif");
                bodyVar.appendChild(diamond);
            }
            score = score - up13CostNum
            up13CostNum = up13CostNum + (85000 * (up13Power ** 2));
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
               up13Power = up13Power + 1;
            up13Cost.innerHTML = "$" + numberCommas(up13CostNum);
        }
    } else {
        upgrade13.style.animation = "spin 5s linear infinite";
        up13Cost.innerHTML = "Maxed Out";
    }
    }

    function buyUp14() {
        if(up14Power < 10) {
        if (score >= up14CostNum) {
            if(up14Power == 1) {
                let drip = document.createElement("img")
                drip.classList.add("drip");
                drip.setAttribute("src", "images/earth.gif");
                bodyVar.appendChild(drip);
            }
            score = score - up14CostNum
            up14CostNum = up14CostNum + (120000 * (up14Power ** 2));
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
               up14Power = up14Power + 1;
            up14Cost.innerHTML = "$" + numberCommas(up14CostNum);
        }
    } else {
        upgrade14.style.animation = "spin 5s linear infinite";
        up14Cost.innerHTML = "Maxed Out";
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
        if(upEightOpen == true) {
            upEightOpen = false;
            bodyVar.removeChild(upEightDesc);
        }
        if(upNineOpen == true) {
            upNineOpen = false;
            bodyVar.removeChild(upNineDesc);
        }
        if(up10Open == true) {
            up10Open = false;
            bodyVar.removeChild(up10Desc);
        }
        if(up11Open == true) {
            up11Open = false;
            bodyVar.removeChild(up11Desc);
        }
        if(up12Open == true) {
            up12Open = false;
            bodyVar.removeChild(up12Desc);
        }
        if(up13Open == true) {
            up13Open = false;
            bodyVar.removeChild(up13Desc);
        }
        if(up14Open == true) {
            up14Open = false;
            bodyVar.removeChild(up14Desc);
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
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
        } else if (key == ' KeyO') {
            score = 0;
            scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
          }
    }

    function jahClicker() {
        setTimeout(() => {
            if(upTwoPower >= 2) {
                score = score + (jermaPower * upFourPower * (up11Power * up11Power));
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnJahParticle();
                function spawnJahParticle() {
                    let jahParticle = document.createElement("div");
                    let jparticleTop = 28;
                    let jparticleSpeed = 0
                    jahParticle.classList.add("jahParticle");
                    jahParticle.style.left = (29 + (Math.random() * 2 )).toString() + "%"
                    jahParticle.style.top = jparticleTop + "%"
                    bodyVar.appendChild(jahParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (jparticleTop < 100) {
                            jparticleTop = jparticleTop + jparticleSpeed;
                            jparticleSpeed = jparticleSpeed + 0.05;
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
        }, (2000 / (upTwoPower * up11Power)))
    }

    function scottishClicker() {
        setTimeout(() => {
            let scottishChance = Math.random();
            if (scottishChance > 0.5) {

            if(upThreePower >= 2) {
                score = score + (jermaPower * upFourPower);
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnScottishParticle();
                function spawnScottishParticle() {
                    let scottishParticle = document.createElement("div");
                    let sparticleTop = 28;
                    let sparticleSpeed = 0
                    scottishParticle.classList.add("scottishParticle");
                    scottishParticle.style.left = (39 + (Math.random() * 2)).toString() + "%"
                    scottishParticle.style.top = sparticleTop + "%"
                    bodyVar.appendChild(scottishParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (sparticleTop < 100) {
                            sparticleTop = sparticleTop + sparticleSpeed;
                            sparticleSpeed = sparticleSpeed + 0.05;
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
                score = score + ((jermaPower * upFourPower) * 2);
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnOhedParticle();
                function spawnOhedParticle() {
                    let ohedParticle = document.createElement("div");
                    let oparticleTop = 28;
                    let oparticleSpeed = 0
                    ohedParticle.classList.add("ohedParticle");
                    ohedParticle.style.left = (49 + (Math.random() * 2)).toString() + "%"
                    ohedParticle.style.top = oparticleTop + "%"
                    bodyVar.appendChild(ohedParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (oparticleTop < 100) {
                            oparticleTop = oparticleTop + oparticleSpeed;
                            oparticleSpeed = oparticleSpeed + 0.05;
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
        }, (650 / upSixPower))
    }

    function creepyClicker() {
        setTimeout(() => {
            let creepyChance = Math.random();
            if (creepyChance > 0.925) {
            if(upSevenPower >= 2) {
                score = score + ((jermaPower * upFourPower) * 6);
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnCreepyParticle();
                function spawnCreepyParticle() {
                    let creepyParticle = document.createElement("div");
                    let cparticleTop = 28;
                    let cparticleSpeed = 0
                    creepyParticle.classList.add("creepyParticle");
                    creepyParticle.style.left = (59 + (Math.random() * 2)).toString() + "%"
                    creepyParticle.style.top = cparticleTop + "%"
                    bodyVar.appendChild(creepyParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (cparticleTop < 100) {
                            cparticleTop = cparticleTop + cparticleSpeed;
                            cparticleSpeed = cparticleSpeed + 0.05;
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
        }, (60 / upSevenPower))
    }
    function garfClicker() {
        setTimeout(() => {
            if(upEightPower >= 2) {
                score = score + ((jermaPower * upFourPower) * 4);
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnGarfParticle();
                function spawnGarfParticle() {
                    let garfParticle = document.createElement("div");
                    let gparticleTop = 28;
                    let gparticleSpeed = 0
                    garfParticle.classList.add("garfParticle");
                    garfParticle.style.left = (69 + (Math.random() * 2)).toString() + "%"
                    garfParticle.style.top = gparticleTop + "%"
                    bodyVar.appendChild(garfParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (gparticleTop < 100) {
                            gparticleTop = gparticleTop + gparticleSpeed;
                            gparticleSpeed = gparticleSpeed + 0.05;
                            garfParticle.style.top = gparticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(garfParticle);
                            }
                        }, 10)
                    }
                }
            }
            garfClicker();
        }, (1000 / upEightPower))
    }

    function hmmClicker() {
        setTimeout(() => {
            let hmmChance = Math.random();
            if (hmmChance > 0.90) {
            if(up10Power >= 2) {
                score = score + ((jermaPower * upFourPower) * 25);
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnHmmParticle();
                function spawnHmmParticle() {
                    let hmmParticle = document.createElement("div");
                    let hparticleTop = 28;
                    let hparticleSpeed = 0
                    hmmParticle.classList.add("hmmParticle");
                    hmmParticle.style.left = (78 + (Math.random() * 4)).toString() + "%"
                    hmmParticle.style.top = hparticleTop + "%"
                    bodyVar.appendChild(hmmParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (hparticleTop < 100) {
                            hparticleTop = hparticleTop + hparticleSpeed;
                            hparticleSpeed = hparticleSpeed + 0.05;
                            hmmParticle.style.top = hparticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(hmmParticle);
                            }
                        }, 10)
                    }
                }
            }
        }
            hmmClicker();
        }, (900 / up10Power))
    }

    function birbyClicker() {
        setTimeout(() => {
            if(up12Power >= 2) {
                score = score + ((jermaPower * upFourPower) * 50);
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnBirbyParticle();
                function spawnBirbyParticle() {
                    let birbyParticle = document.createElement("div");
                    let birbyparticleTop = 28;
                    let birbyparticleSpeed = 0
                    birbyParticle.classList.add("birbyParticle");
                    birbyParticle.style.left = (89 + (Math.random() * 2)).toString() + "%"
                    birbyParticle.style.top = birbyparticleTop + "%"
                    bodyVar.appendChild(birbyParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (birbyparticleTop < 100) {
                            birbyparticleTop = birbyparticleTop + birbyparticleSpeed;
                            birbyparticleSpeed = birbyparticleSpeed + 0.05;
                            birbyParticle.style.top = birbyparticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(birbyParticle);
                            }
                        }, 10)
                    }
                }
            }
            birbyClicker();
        }, (1500 / up12Power))
    }

    function diamondClicker() {
        setTimeout(() => {
            if(up13Power >= 2) {
                score = score + ((jermaPower * upFourPower) * (Math.floor(Math.random() * 100) * 10));
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnDiamondParticle();
                function spawnDiamondParticle() {
                    let diamondParticle = document.createElement("div");
                    let diamondparticleTop = 49;
                    let diamondparticleSpeed = 0
                    diamondParticle.classList.add("diamondParticle");
                    diamondParticle.style.left = (29 + (Math.random() * 2)).toString() + "%"
                    diamondParticle.style.top = diamondparticleTop + "%"
                    bodyVar.appendChild(diamondParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (diamondparticleTop < 100) {
                            diamondparticleTop = diamondparticleTop + diamondparticleSpeed;
                            diamondparticleSpeed = diamondparticleSpeed + 0.05;
                            diamondParticle.style.top = diamondparticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(diamondParticle);
                            }
                        }, 10)
                    }
                }
            }
            diamondClicker();
        }, (2400 - (up13Power * 200)))
    }

    function dripClicker() {
        setTimeout(() => {
            if(up14Power >= 2) {
                score = score + ((jermaPower * upFourPower) * 150);
                scoreTop.innerHTML = "You have " + numberCommas(score) + " Jerma bucks";
                spawnDripParticle();
                function spawnDripParticle() {
                    let dripParticle = document.createElement("div");
                    let dripParticleTop = 51;
                    let dripParticleSpeed = 0
                    dripParticle.classList.add("dripParticle");
                    dripParticle.style.left = (39 + (Math.random() * 2)).toString() + "%"
                    dripParticle.style.top = dripParticleTop + "%"
                    bodyVar.appendChild(dripParticle);
                    moveParticle();
                    function moveParticle() {
                        setTimeout(() => {
                            if (dripParticleTop < 100) {
                            dripParticleTop = dripParticleTop + dripParticleSpeed;
                            dripParticleSpeed = dripParticleSpeed + 0.05;
                            dripParticle.style.top = dripParticleTop + "%";
                            moveParticle()
                            } else {
                                bodyVar.removeChild(dripParticle);
                            }
                        }, 10)
                    }
                }
            }
            dripClicker();
        }, (550 - (up14Power * 50)))
    }

    jahClicker();
    scottishClicker(); 
    ohedClicker();
    creepyClicker();
    garfClicker();garfClicker();
    hmmClicker();hmmClicker();hmmClicker();hmmClicker();hmmClicker();hmmClicker();hmmClicker();hmmClicker();
    birbyClicker();
    diamondClicker();
    dripClicker();
}


startGame();