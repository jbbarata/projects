document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.querySelector("canvas");
    const canvasCtx = canvas.getContext("2d");

    const colorPicker = document.querySelector('select[name="colorPicker"]');
    canvasCtx.strokeStyle = colorPicker.value;

    const lineWidthPicker = document.querySelector('select[name="lineWidthPicker"');
    canvasCtx.lineWidth = lineWidthPicker.value;

    const resetButton = document.getElementById("Reset");

    let clicking = false;

    canvas.addEventListener("mousedown", (event) => {
        const canvasX = event.pageX - canvas.offsetLeft;
        const canvasY = event.pageY - canvas.offsetTop;

        clicking = true;

        canvasCtx.beginPath();

        canvasCtx.moveTo(canvasX, canvasY);
    });

    canvas.addEventListener("mousemove", (event) => {
        if(clicking) {
            
            const canvasX = event.pageX - canvas.offsetLeft;
            const canvasY = event.pageY - canvas.offsetTop;

            canvasCtx.lineTo(canvasX, canvasY);

            canvasCtx.stroke();
        }
        
    });

    canvas.addEventListener("mouseup", (event) => {
        clicking = false;
    });

    canvas.addEventListener("mouseout", () => {
        clicking = false;
    });

    colorPicker.addEventListener("change", () => {
        canvasCtx.strokeStyle = colorPicker.value;
    });

    lineWidthPicker.addEventListener("change", () => {
        canvasCtx.lineWidth = lineWidthPicker.value;
    });

    resetButton.addEventListener("click", () => {
        if (confirm("Quer mesmo apagar tudo?")) {
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
    
});