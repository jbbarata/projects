
const squares = document.querySelectorAll("#gameBoard button");
let symbol = "X";

for(let i = 0; i < squares.length; i++) {
    
    squares[i].addEventListener("click", () => {
    
        if(squares[i].textContent == "") {
            squares[i].textContent = symbol;

            if (
                squares[0].textContent != "" &&
                squares[0].textContent == squares[1].textContent && 
                squares[1].textContent == squares[2].textContent) {
                alert("Game over!");
                window.location.reload();
            }

            if (
                squares[3].textContent != "" &&
                squares[3].textContent == squares[4].textContent &&
                squares[4].textContent == squares[5].textContent) {
                    alert("Game over!");
                    window-location.reload();
                }
                
            if (
                squares[6].textContent != "" && 
                squares[6].textContent == squares[7].textContent &&
                squares[7].textContent == squares[8].textContent) {
                    alert("Game over!");
                    window.location.reload();
                }

            if (
                squares[0].textContent != "" &&
                squares[0].textContent == squares[3].textContent &&
                squares[3].textContent == squares[6].textContent) {
                    alert("Game over!");
                    window.location.reload();
                }

            if (
                squares[1].textContent != "" &&
                squares[1].textContent == squares[4].textContent &&
                squares[4].textContent == squares[7].textContent) {
                    alert("Game over!");
                    window.location.reload();
                }
            
            if (
                squares[2].textContent != "" &&
                squares[2].textContent == squares[5].textContent &&
                squares[5].textContent == squares[8].textContent) {
                    alert("Game over!");
                    window.location.reload();
                }
            
            if (
                squares[0].textContent != "" &&
                squares[0].textContent == squares[4].textContent &&
                squares[4].textContent == squares[8].textContent) {
                    alert("Game over!");
                    window.location.reload();
                }
            
            if (
                squares[2].textContent != "" &&
                squares[2].textContent == squares[4].textContent &&
                squares[4].textContent == squares[6].textContent) {
                    alert("Game over!");
                    window.location.reload();
                }

            let isDraw = true;
            for(let i = 0; i < squares.length; i++){
                if(squares[i].textContent == "") {
                    isDraw = false;
                }
            }

            if(isDraw) {
                alert("Draw");
                window.location.reload();
            }

            if(symbol == "X") {
                symbol = "O";
            } else {
                symbol = "X";
            }
        }
        
    });
}