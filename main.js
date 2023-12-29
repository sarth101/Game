let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let val;
rock.addEventListener("click",() => {
    val = 0;
    rock.style.borderColor = "red";
    paper.style.borderColor = "black";
    scissor.style.borderColor = "black";
});
paper.addEventListener("click", () => {
    val = 1;
    rock.style.borderColor = "black";
    paper.style.borderColor = "red";
    scissor.style.borderColor = "black";
});
scissor.addEventListener("click", () => {
    val = 2;
    rock.style.borderColor = "black";
    paper.style.borderColor = "black";
    scissor.style.borderColor = "red";
});
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let ps = document.querySelector("#ps");
let cs = document.querySelector("#cs");
let psc = 0;
let csc = 0;
let win = document.querySelector("#winner");
let bt1 = document.querySelector("#bt1");
bt1.addEventListener("click", () => {
    let com = getRandomInt(3);
    if(val == com ){
        win.innerText="It's Draw";
    }
    else if(val > com){
        if(val==2 && com == 0){
            win.innerText="Computer Win";
            cs.innerText= ++csc;
        }
        else{
            win.innerText="Player Win";
            ps.innerText= ++psc;
        }
    }
    else{
        if (val == 0 && com == 2) {
            win.innerText = "Player Win";
            ps.innerText= ++psc;
        }
        win.innerText="Computer Win";
        cs.innerText= ++csc;
    }
});
