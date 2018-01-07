function pixelPainterModule() {

    function PixelPainter(width, height) {
        var ppCanvas = document.createElement('div');
        ppCanvas.id = 'ppCanvas';
        pixelPainter.appendChild(ppCanvas);

        for (var i = 0; i < width; i++) {
            var cols = document.createElement('div');
            cols.className = 'col';
            for (var j = 1; j <= height; j++){
                var cell = document.createElement('div');
                cell.className = 'cell';
                cols.appendChild(cell);
            }
            ppCanvas.appendChild(cols);
        }
  
            
        

      


     
    }









    return {
        PixelPainter: PixelPainter
    };

}

var myPixelPainter = pixelPainterModule();
myPixelPainter.PixelPainter(25, 30);