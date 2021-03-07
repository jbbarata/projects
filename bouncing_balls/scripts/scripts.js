document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas").getContext("2d");

    const balls = [
        {
            x: 123,
            y: 234,
            dx: 5,
            dy: 5,
            r: 30,
            color: "#00F"
        },
        {
            x: 200,
            y: 100,
            dx: 8,
            dy: 8,
            r: 20,
            color: "#F00"
        },
        {
            x: 400,
            y: 200,
            dx: 10,
            dy: 10,
            r: 25,
            color: "#060"
        },
        {
            x: Math.ceil(Math.random() * 860),
            y: Math.ceil(Math.random() * 860),
            dx: 3,
            dy: 3,
            r: 35,
            color: "#CCC"
        }
    ];
    
    function drawBall(currentCircle) {
        
        canvas.beginPath();

        canvas.fillStyle = balls[currentCircle].color;

        canvas.arc(balls[currentCircle].x, 
        balls[currentCircle].y, 
        balls[currentCircle].r, 
        0, 
        Math.PI*2
        );

        canvas.fill();

        if(balls[currentCircle].x <= 0 || balls[currentCircle].x >= 900) {
            balls[currentCircle].dx = -balls[currentCircle].dx;
        }

        if(balls[currentCircle].y <= 0 || balls[currentCircle].y >= 900) {
            balls[currentCircle].dy = -balls[currentCircle].dy;
        }

        balls[currentCircle].x = balls[currentCircle].x + balls[currentCircle].dx;
        balls[currentCircle].y = balls[currentCircle].y + balls[currentCircle].dy;
    }

    setInterval(function() {
        
        canvas.clearRect(0, 0, 900, 900);
        
        for(let i = 0; i < balls.length; i++) {
            drawBall(i);
        }
    }, 15);

});