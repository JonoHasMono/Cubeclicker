let gravityForce = 1;
let jumpPower = 500;
let positionY = 10;
let jumping = false;
let shooting = false;
let positionYJump = 10;
let jumpValue = 1;

function startGame() {
    const bodyVar = document.createElement("div");

    document.body.appendChild(bodyVar);

    let player = document.createElement("div");
    player.classList.add("character");
    player.style.bottom = (positionY / 10) + "em";
    bodyVar.appendChild(player);

    document.addEventListener('keydown', logKey);
    document.addEventListener('keyup', logKey2);

    function logKey(e) {
        let key = ` ${e.code}`
        key = key.toString();
        if (key == ' KeyW') {
            jumping = true;
          } else if (key == ' KeyP') {
            shooting = true;
          }
    }

    function logKey2(e) {
        let key = ` ${e.code}`
        key = key.toString();
        if (key == ' KeyW') {
            jumping = false;
          } else if (key == ' KeyP') {
            shooting = false;
          }
    }

    function gravity() {
        if(jumping == false) {
            if (positionY > 10) {
                positionY = positionY - 3;
                player.style.bottom = (positionY / 10) + "em";
            } else {
                positionY = 10;
                player.style.bottom = (positionY / 10) + "em";
            }
        }
        setTimeout(() => {
            gravity();
    }, 5)
    }

    function jump() {
        if(jumping == true) {
            if (positionY < 455) {
                positionY = positionY + 3;
                player.style.bottom = (positionY / 10) + "em";
            } else {
                positionY = 455;
                player.style.bottom = (positionY / 10) + "em";
            }
        }
        setTimeout(() => {
            jump();
    }, 5)
    }
    
    gravity();
    jump();


    function enemyAttackLoop() {
        let attack = document.createElement("a");
        let attackX = -10
        attack.setAttribute("id", "attack");
        attack.setAttribute("class", "attack");
        setTimeout(() => {
        attack.style.top = ((Math.random() * 750) + 10)+ "px";
        attack.style.right = attackX + "%";
        let attackSpeed = 1;
        attackMove();
        function attackMove() {
            setTimeout(() => {
                attackX = attackX + (1 * attackSpeed);
                attack.style.right = attackX + "%"
                if (attackX <= 100) {
                    attackMove();
                } else {
                    bodyVar.removeChild(attack);
                }
            }, 20);
        }
        bodyVar.appendChild(attack);
        enemyAttackLoop();
        }, 500)
    }

    function bulletLoop() {
        if(shooting == true) {
        let bullet = document.createElement("a");
        let bulletX = 5
        bullet.setAttribute("id", "bullet");
        bullet.setAttribute("class", "bullet");
        setTimeout(() => {
        bullet.style.bottom = (positionY / 10) + 1 + "em";
        bullet.style.left = bulletX + "%";
        let bulletSpeed = 1;
        bulletMove();
        function bulletMove() {
            setTimeout(() => {
                bulletX = bulletX + (1 * bulletSpeed);
                bullet.style.left = bulletX + "%"
                if (bulletX <= 100) {
                    bulletMove();
                } else {
                    bodyVar.removeChild(bullet);
                }
            }, 5);
        }
        bodyVar.appendChild(bullet);
        }, 100)
    }
    setTimeout(() => {
        bulletLoop();
    },100)
}
    enemyAttackLoop();
    bulletLoop();
}


startGame();