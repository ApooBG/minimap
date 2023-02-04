document.onkeydown = checkKey;
var walkNumber = 0;
var attackNumber = 0;
var runNumber = 0;
var lastKey = 0;
var character = document.getElementById('inFront'); // don't go to to DOM every time you need it. Instead store in a variable and manipulate.
var insideBox = document.getElementById('insideBox'); // don't go to to DOM every time you need it. Instead store in a variable and manipulate.
var scroll = document.getElementById('scroll');
var scroll_text = document.getElementById('pageOneText');
var walking = ["images/Character/walking/walk1.png", "images/Character/walking/walk2.png", "images/Character/walking/walk3.png", "images/Character/walking/walk4.png", "images/Character/walking/walk5.png"]
var running = ["images/Character/Run/run1.png", "images/Character/Run/run2.png", "images/Character/Run/run3.png", "images/Character/Run/run4.png", "images/Character/Run/run5.png", "images/Character/Run/run6.png", "images/Character/Run/run7.png", "images/Character/Run/run8.png"]
var attack = ["images/Character/Attack/Attack1.png", "images/Character/Attack/Attack2.png", "images/Character/Attack/Attack3.png", "images/Character/Attack/Attack4.png", "images/Character/Attack/Attack5.png", "images/Character/Attack/Attack6.png", "images/Character/Attack/Attack7.png"]
var date = getTimestampInSeconds();
var canvas = document.createElement("canvas");
var flipped = false;


function delayKeydownBy(ms, keyFuncMap) {
    let t = null; // holds a timeout ID
    return function (event) { // this will be the event handler function
      let f = keyFuncMap[event.key]; // is the key defined/known?
      if (!t) { // if we do not have a pending timeout...
        if (f != null) { // ... and the key is known ...
          t = setTimeout( // ... create a new timeout ...
            () => {
              t = null; // ... that resets itself ...
              f(); // ... and calls the function ...
            },
            ms // ... after X milliseconds
          );
        }
      }
    }
  }


function Walk(position) {
    walkNumber = -1;
    date = getTimestampInSeconds();
    console.log("walk");

    try {
        (function myLoop(i) {
            setTimeout(function() {
                if (position == "right")
                    character.style.left = getOffset(character).left + 15;
                else if (position == "top")
                    character.style.top = getOffset(character).top - 17;
                else if (position == "left")
                {
                    character.style.left = getOffset(character).left - 14;

                }
                else if (position == "bottom")
                    character.style.top = getOffset(character).top + 10;
                walkNumber++;
                if (walkNumber == 5)
                {
                    character.crossOrigin = "anonymous";
                    character.src = walking[0];
                    if (position == "left" && flipped == false)
                    {
                        canvas.width = character.width;
                        canvas.height = character.height;
                        const ctx = canvas.getContext("2d");
                        ctx.translate(character.width, 0);
                        ctx.scale(-1, 1);
                        ctx.drawImage(character, 0, 0);
                        const dataURL = canvas.toDataURL();
                        document.getElementById("inFront").src = dataURL;
                        console.log("flip");
                    }
                }
    
                else
                {
                    character.crossOrigin = "anonymous";
                    character.src = walking[walkNumber];//  your code here    
                    if (position == "left" && flipped == false)
                    {
                        //flipped = true;
                        canvas.width = character.width;
                        canvas.height = character.height;
                        const ctx = canvas.getContext("2d");
                        ctx.translate(character.width, 0);
                        ctx.scale(-1, 1);
                        ctx.drawImage(character, 0, 0);
                        const dataURL = canvas.toDataURL();
                        document.getElementById("inFront").src = dataURL;
                        console.log("flip");
                    }

                    else if (position == "right" && flipped == true)
                    {
                        flipped = false;
                        canvas.width = character.width;
                        canvas.height = character.height;
                        const ctx = canvas.getContext("2d");
                        ctx.translate(character.width, 0);
                        ctx.scale(-1, 1);
                        ctx.drawImage(character, 0, 0);
                        const dataURL = canvas.toDataURL();
                        document.getElementById("inFront").src = dataURL;
                        console.log("non-flip");
                    }
                }
                console.log(character.src);
              if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
            }, 95)
          })(6); 
    }
   
    catch {
        character.src = walking[walkNumber];


    }
    
}

function Run(position) {
    if (getTimestampInSeconds() - date > 0.2)
    {
    console.log("run");

        runNumber = -1;
        date = getTimestampInSeconds();

        try {
            (function myLoop(i) {
                setTimeout(function() {
                    if (position == "right")
                        character.style.left = getOffset(character).left + 22;
                    else if (position == "top")
                        character.style.top = getOffset(character).top - 24;
                    else if (position == "left")
                        character.style.left = getOffset(character).left - 18;
                    else if (position == "bottom")
                        character.style.top = getOffset(character).top + 13;
                        runNumber++;
                    if (runNumber == 8)
                    {
                        
                    }
                    else
                {
                    character.crossOrigin = "anonymous";
                    character.src = running[runNumber];//  your code here    
                    if (position == "left" && flipped == false)
                    {
                        //flipped = true;
                        canvas.width = character.width;
                        canvas.height = character.height;
                        const ctx = canvas.getContext("2d");
                        ctx.translate(character.width, 0);
                        ctx.scale(-1, 1);
                        ctx.drawImage(character, 0, 0);
                        const dataURL = canvas.toDataURL();
                        document.getElementById("inFront").src = dataURL;
                        console.log("flip");
                    }

                    else if (position == "right" && flipped == true)
                    {
                        flipped = false;
                        canvas.width = character.width;
                        canvas.height = character.height;
                        const ctx = canvas.getContext("2d");
                        ctx.translate(character.width, 0);
                        ctx.scale(-1, 1);
                        ctx.drawImage(character, 0, 0);
                        const dataURL = canvas.toDataURL();
                        document.getElementById("inFront").src = dataURL;
                        console.log("non-flip");
                    }
                }           
                  if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
                }, 82)
              })(8); 
        }
       
        catch {
            character.src="images/inFront.png";
    
        }
    }
}



function Attack() {
    attackNumber = -1;
    (function myLoop(i) {
        setTimeout(function() {
            attackNumber++;
        character.src=attack[attackNumber];//  your code here                
          if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
        }, 60)
      })(7); 
}

function onMouseClick(event) {
    if (event.button == 0)
    {
        Attack();
    }
}

function checkKey(e) {
    
    if (getTimestampInSeconds() - date > 0.4)
    {
    
    if (Overlaping(scroll, character) == true)
    {
        scroll.src="images/scroll_revealed.png";
        scroll_text.style.visibility = "visible"
        if (e.keyCode == 32)
        {
            window.location.href = "http://127.0.0.1:5500/skills.html";
        }
    }

    else
    {
        scroll.src="images/scroll.png";
        scroll_text.style.visibility = "hidden";
    }

    e = e || window.event;



    if (e.keyCode == '38') {
        // up arrow
        if(VerticallyBound(document.getElementById("insideBox"), document.getElementById("inFront")) == true)
        {
            return;
        }    

        if (lastKey == e.keyCode && getTimestampInSeconds() - date > 0.7 && getTimestampInSeconds() - date < 1.2)
            Run("top");
        else if (lastKey != e.keyCode || getTimestampInSeconds() - date >= 1.2)
            Walk("top");
        if (((character.style.top).slice(0, -2) - vhToPixels(0) + 81 -165) <= 0)
        {
            insideBox.style.top = getOffset(insideBox).top + 600;
            character.style.top = getOffset(character).top + (600);

           
        }
    }
    else if (e.keyCode == '40') {
        if(VerticallyBoundBottom(document.getElementById("insideBox"), document.getElementById("inFront")) == true)
        {
            return;
        }    
        if (lastKey == e.keyCode && getTimestampInSeconds() - date > 0.7 && getTimestampInSeconds() - date < 1.2)
            Run("bottom");
        else if (lastKey != e.keyCode || getTimestampInSeconds() - date >= 1.2)
            Walk("bottom");


        if ((vhToPixels(99) - (character.style.top).slice(0, -2)) <= 0)
        {
            insideBox.style.top = getOffset(insideBox).top + -600;
            character.style.top = getOffset(character).top + (-600);
        }
        // down arrow
    }
    else if (e.keyCode == '37') {
        if(HorizontallyBound(document.getElementById("insideBox"), document.getElementById("inFront")) == true)
        {
            return;
        }    
        if (lastKey == e.keyCode && getTimestampInSeconds() - date > 0.7 && getTimestampInSeconds() - date < 1.2)
            Run("left");
        else if (lastKey != e.keyCode || getTimestampInSeconds() - date >= 1.2)
            Walk("left");

        if (((character.style.left).slice(0, -2) - vwToPixels(0) - 140) <= 0)
        {
            insideBox.style.left = getOffset(insideBox).left + 600;
            character.style.left = getOffset(character).left + (600);
        }
       // left arrow
    }
    else if (e.keyCode == '39') {
        if(HorizontallyBoundRight(document.getElementById("insideBox"), document.getElementById("inFront")) == true)
        {
            return;
        }   
        if (lastKey == e.keyCode && getTimestampInSeconds() - date > 0.7 && getTimestampInSeconds() - date < 1.2)
            Run("right");
        else if (lastKey != e.keyCode || getTimestampInSeconds() - date >= 1.2)
            Walk("right");


        if ((vwToPixels(96) - (character.style.left).slice(0, -2)) + ((50/100) * document.documentElement.clientWidth) <= 0)
        {
            insideBox.style.left = getOffset(insideBox).left + -600;
            character.style.left = getOffset(character).left + (-600);
        }

       // right arrow
    }
    lastKey = e.keyCode;
    }
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

function checkOverflow(elem) {
    const elemWidth = elem.getBoundingClientRect().width
    const parentWidth = elem.parentElement.getBoundingClientRect().width

    return elemWidth > parentWidth
}

function vhToPixels (vh) {
    return Math.round(window.innerHeight / (100 / vh) - 168);
  }

  function vwToPixels (vw) {
    return Math.round(window.innerHeight / (100 / vw) - 168);
  }


function HorizontallyBound(parentDiv, childDiv) {
    var parentRect = parentDiv.getBoundingClientRect();
    var childRect = childDiv.getBoundingClientRect();
    return parentRect.left >= childRect.right - 200 || parentRect.right <= childRect.left - 200;
}

function HorizontallyBoundRight(parentDiv, childDiv) {
    var parentRect = parentDiv.getBoundingClientRect();
    var childRect = childDiv.getBoundingClientRect();


    return parentRect.right <= childRect.left + ((15/100) * document.documentElement.clientWidth);
}

function VerticallyBound(parentDiv, childDiv) {
    var parentRect = parentDiv.getBoundingClientRect();
    var childRect = childDiv.getBoundingClientRect();

    return parentRect.top >= childRect.bottom - 135;
}

function VerticallyBoundBottom(parentDiv, childDiv) {
    var parentRect = parentDiv.getBoundingClientRect();
    var childRect = childDiv.getBoundingClientRect();

    return parentRect.bottom <= childRect.top + 200;
}


//checks if two elements overlaps
  function Overlaping(ele1, ele2)
  {
    const domRect1 = ele1.getBoundingClientRect();
    const domRect2 = ele2.getBoundingClientRect();
    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}
  



function getTimestampInSeconds () {
    return Date.now() / 1000;
  }  