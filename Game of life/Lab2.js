var CELL_SIZE = 20; //размер клетки
var cells = [], buffCells = [];
var timeout = 100; //задержка для автоплея
var canvas, game;

function init() {
    canvas = document.getElementById('back').getContext('2d');
    canvas.width =  document.getElementById('back').width;
    canvas.height =  document.getElementById('back').height;
    
    //game
    game = document.getElementById('game').getContext('2d');
    
    // Сетка 
    function Setka() 
    {
        this.size = { x : 0, y : 0 };
        this.width = canvas.width;
        this.height = canvas.height;      
        this.size.x = parseInt(canvas.width / CELL_SIZE, 10); 
        this.size.y = parseInt(canvas.height / CELL_SIZE, 10);
        
        // заполняем массив cells 
        this.fill = function () 
        {
            var i, j;
            for (i = 0; i < this.size.x; i += 1)
            {
                cells[i] = [];
                buffCells[i] = [];
                for (j = 0; j < this.size.y; j += 1) 
                {
                    cells[i][j] = false; 
                    buffCells[i][j] = false;
                }
            }
        };
        
        // рисуем сетку 
        this.draw = function () {
            var i;
            
            canvas.translate(0.5, 0.5);
            canvas.beginPath();
            for (i = 0; i <= this.size.x; i += 1) 
            {
                canvas.moveTo(0, i * CELL_SIZE);
                canvas.lineWidth = 1;
                canvas.lineTo(this.width, i * CELL_SIZE);
                canvas.strokeStyle = "#ddd"; // цвет линии
            }
            
            for (i = 0; i <= this.size.x; i += 1) 
            {
                canvas.lineWidth = 1;
                canvas.moveTo(i * CELL_SIZE, 0);
                canvas.lineTo(i * CELL_SIZE, canvas.height);
                canvas.strokeStyle = "#ddd"; // цвет линии
            }
            
            canvas.stroke();
        };
    }
        
    // обновляем отрисовку 
    function Update() {
        
        // Очистка ячеек 
        this.clear = function () {
            game.clearRect(0, 0, canvas.width, canvas.height);
        };
        
        // Заполнить конкретную ячейку 
        this.fillCell = function (x, y) {
            game.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE + 1, CELL_SIZE + 1);    
        };
        
        // Заполнить всё поле 
        this.fill = function () {
            var i, j, setka = new Setka(), upd = new Update();
            
            //Очищаем предыдущий кадр
            upd.clear();
            
            for (i = 0; i < setka.size.x; i += 1) {
                for (j = 0; j < setka.size.y; j += 1) {
                    if (cells[i][j] === true) {
                        upd.fillCell(i, j);
                    }
                }
            }
            
            //Перессчитываем ячейки
            upd.cells();
        };
        // рандом
        this.randomFill = function () {
            var i, j, fill, fillRnd, setka = new Setka(), upd = new Update();
            //очищаем предыдущий рисунок
            upd.clear();
            
            for (i = 0; i < setka.size.x; i += 1) {
                for (j = 0; j < setka.size.y; j += 1) {
                    //рандомизация boolean
                    fill = [true, false][Math.round(Math.random())];
                    cells[i][j] = Boolean(fill);
                }
            }
            
            for (i = 0; i < setka.size.x; i += 1) {
                for (j = 0; j < setka.size.y; j += 1) {
                    fill = cells[i][j];
                    if (fill === true) {
                        //заполняем новый рисунок
                        fillRnd = new Update();
                        fillRnd.fillCell(i, j);
                    }
                }
            }
        };
        
        // авто
        this.autoplay = function () {
            var upd = new Update();
            upd.fill();
            setTimeout(function () { upd.autoplay(); }, timeout);
        };
        
        // Проверяем количество живых соседей 
        this.getLivingNeighbors = function (x, y) {
            var setka = new Setka(), count = 0, sx = setka.size.x, sy = setka.size.y;

            //Проверяем верхнюю левую ячейку 
            if (x !== 0 && y !== 0) {
                if (cells[x - 1][y - 1] === true) {
                    count += 1;
                }
            }
            
            //Проверяем верхнюю ячейку 
            if (y !== 0) {
                if (cells[x][y - 1] === true) {
                    count += 1;
                }
            }
            
            //Проверяем верхнюю правую ячейку 
            if (x !== sx - 1 && y !== 0) {
                if (cells[x + 1][y - 1] === true) {
                    count += 1;
                }
            }
            
            //Проверяем левую ячейку 
            if (x !== 0) {
                if (cells[x - 1][y] === true) {
                    count += 1;
                }
            }
            
            //Проверяем правую ячейку 
            if (x !== sx - 1) {
                if (cells[x + 1][y] === true) {
                    count += 1;
                }
            }
            
            //Проверяем нижнюю левую ячейку 
            if (x !== 0 && y !== sy - 1) {
                if (cells[x - 1][y + 1] === true) {
                    count += 1;
                }
            }
            
            //Проверяем нижнюю ячейку 
            if (y !== sy - 1) {
                if (cells[x][y + 1] === true) {
                    count += 1;
                }
            }
            
            //Проверяем нижнюю правую ячейку 
            if (x !== sx - 1 && y !== sy - 1) {
                if (cells[x + 1][y + 1] === true) {
                    count += 1;
                }
            }
            
            return count;
        };
        
        // Проверяем клетки по правилам игры 
        this.cells = function () {
            var i, j, isAlive, count, result = false, gameUpd = new Update(), setka = new Setka();
            
            //Копируем массив
            for (i = 0; i < setka.size.x; i += 1) {
                for (j = 0; j < setka.size.y; j += 1) {
                    
                    result = false;
                    
                    //Проверяем состояние ячейки
                    isAlive = cells[i][j];
                    
                    //считаем живых соседей
                    count = gameUpd.getLivingNeighbors(i, j);
                    //применяем правила
                    if (isAlive && count < 2) {
                        result = false;
                    }
                    if (isAlive && (count === 2 || count === 3)) {
                        result = true;
                    }
                    if (isAlive && count > 3) {
                        result = false;
                    }
                    if (!isAlive && count === 3) {
                        result = true;
                    }
                    
                    //записываем результат
                    buffCells[i][j] = result;
                }
            }
            
            //копируем массив
            for (i = 0; i < setka.size.x; i += 1) {
                for (j = 0; j < setka.size.y; j += 1) {
                    cells[i][j] = buffCells[i][j];
                }
            }
            
        };
    }

    var gameSetka = new Setka(), gameUpd = new Update(), clearBtn, randBtn, stepBtn;
    gameSetka.draw();
    gameSetka.fill();
    
    //Кнопка очистки
    clearBtn = document.getElementById('clear');
    clearBtn.onclick = function () {  location.reload(); };
    
    //Кнопка рандомизации
    randBtn = document.getElementById('rand');
    randBtn.onclick = function () { gameUpd.randomFill(); };
    
    //Кнопка шага(двойное нажатие при ручном заполнении)
    stepBtn = document.getElementById('step');
    stepBtn.onclick = function () {
         gameUpd.fill();
        };
    
    //Кнопка автоплей
    stepBtn = document.getElementById('autoplay');
    stepBtn.onclick = function () { gameUpd.autoplay(); };
    var x_Size = 9;
    var y_Size = 49;

    var canvasOfTheGame = document.getElementById('back')
    //Самому заполнить клетку
    canvasOfTheGame.onclick = function(event) {
        var event = event || window.event;
        var x = (event.clientX - x_Size) / CELL_SIZE, y = (event.clientY - y_Size) / CELL_SIZE;
        if(x % 1 != 0) x -= (x % 1);
        if(y % 1 != 0) y -= (y % 1);
        gameUpd.fillCell(x, y);
        cells[x][y] = true;
    };
}
    
window.onload = init();