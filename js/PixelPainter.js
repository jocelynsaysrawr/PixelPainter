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

    var allColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","WhiteSmoke","Yellow","YellowGreen"];
        
    function colorGrid() {
        var colorCanvas = document.createElement('div');
        colorCanvas.id = 'colorCanvas';
        pixelPainter.appendChild(colorCanvas);

        var colorIndex = 0;

        for (var i = 0; i < 12; i++) {
            var cols2 = document.createElement('div');
            cols2.className = 'color';
            for (var j = 1; j <= 12; j++, colorIndex++) {
                var colorCell = document.createElement('div');
                colorCell.className = 'colorCell';
                colorCell.style.backgroundColor = allColors[colorIndex];
                cols2.appendChild(colorCell);
            }
            colorCanvas.appendChild(cols2);
        }
    }


            
        

      


     
    









    return {
        PixelPainter: PixelPainter,
        colorGrid: colorGrid
    };

}

var myPixelPainter = pixelPainterModule();
myPixelPainter.PixelPainter(25, 30);
myPixelPainter.colorGrid();

