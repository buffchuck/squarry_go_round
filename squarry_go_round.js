// Start and stop the Squarry Go Round
            function goRound() {
            if(typeof goRound.g=='undefined') { 
                  goRound.g = true;
                  goRound.myInt;
                  goRound.btn = document.getElementById("gob");
              } 
                if (goRound.g) {
                    goRound.mySq1 = setInterval(function(){ move("sq1") },10);
                    goRound.mySq2 = setInterval(function(){ move("sq2") },10);
                    goRound.mySq3 = setInterval(function(){ move("sq3") },10);
                    goRound.mySq4 = setInterval(function(){ move("sq4") },10);
                    goRound.btn.innerHTML = "No Go";
                    goRound.g = false;
                }
                else {
                    clearInterval(goRound.mySq1);
                    clearInterval(goRound.mySq2);
                    clearInterval(goRound.mySq3);
                    clearInterval(goRound.mySq4);
                    goRound.btn = document.getElementById("gob");
                    goRound.btn.innerHTML = "Go Round";
                    goRound.g = true;
                }
            }
            
            // Move the postion of the Squarry Go Round
            function move(sq) { 
                if(typeof move.poscounter=='undefined') { 
                    move.negcounter = 150;
                    move.poscounter = 20;
                    move.direction = ["L","T","R","B"];
                    move.dir = move.direction[0];
                } 
                    move.poscounter++;  
                    move.negcounter--;
                //let the program know which square 
                //to move and how to move it
                switch (sq){
                    case "sq1":
                        move.dir = move.direction[0];
                        break;
                    case "sq2":
                        move.dir = move.direction[1];
                        break;
                    case "sq3":
                        move.dir = move.direction[2];
                        break;
                    case "sq4":
                        move.dir = move.direction[3];
                        break;
                }
                if (move.dir == "L" || move.dir == "T"){
                    var pos = move.poscounter;
                }else{
                    var pos = move.negcounter;
                }
                if(pos<=150 && pos >=20){
                    pos.toString();
                    var shift = pos + "px";
                    var msq = document.getElementById(sq);

                    switch(move.dir) {
                    case "L":
                    case "R":
                        msq.style.left=shift;
                        break;
                    case "T":
                    case "B":
                        msq.style.top=shift;
                        break;
                    }
                  }
                else {
                        //reset the direction array
                        var temp = move.direction.shift();
                        move.direction.push(temp);
                        //reset the positive and negative counters
                        move.poscounter = 20;    
                        move.negcounter = 150;
                }
            }