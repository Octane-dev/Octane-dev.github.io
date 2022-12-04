const point1 = document.getElementsByClassName('point')[0]
        const point2 = document.getElementsByClassName('point')[1]
        const point3 = document.getElementsByClassName('point')[2]
        const point4 = document.getElementsByClassName('point')[3]
        const point5 = document.getElementsByClassName('point')[4]
        const point6 = document.getElementsByClassName('point')[5]
        const point7 = document.getElementsByClassName('point')[6]
        const line = document.getElementsByClassName('line')[0]
        const line1 = document.getElementsByClassName('line')[1]
        const line2 = document.getElementsByClassName('line')[2]
        const line3 = document.getElementsByClassName('line')[3]
        const line4 = document.getElementsByClassName('line')[4]
        const line5 = document.getElementsByClassName('line')[5]
        function lines(){
            function drawline1(){
                var p1 = {x: point1.offsetLeft, y: point1.offsetTop};
                var p2 = {x: point2.offsetLeft, y: point2.offsetTop};
                var a = p1.x - p2.x;
                var b = p1.y - p2.y;
                var length = Math.sqrt( a*a + b*b );
                var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
                var pointWidth = point1.clientWidth / 2;
                var pointHeight = point1.clientWidth / 2;
                line.style.width = length + 'px';
                line.style.left = (p1.x + pointWidth)+ 'px';
                line.style.top = (p1.y + pointHeight) + 'px';
                line.style.transform = "rotate(" + angleDeg + "deg)";
            }
            function drawline2(){
                var p1 = {x: point2.offsetLeft, y: point2.offsetTop};
                var p2 = {x: point3.offsetLeft, y: point3.offsetTop};
                var a = p1.x - p2.x;
                var b = p1.y - p2.y;
                var length = Math.sqrt( a*a + b*b );
                var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
                var pointWidth = point1.clientWidth / 2;
                var pointHeight = point1.clientWidth / 2;
                line1.style.width = length + 'px';
                line1.style.left = (p1.x + pointWidth)+ 'px';
                line1.style.top = (p1.y + pointHeight) + 'px';
                line1.style.transform = "rotate(" + angleDeg + "deg)";
            }
            function drawline3(){
                var p1 = {x: point3.offsetLeft, y: point3.offsetTop};
                var p2 = {x: point4.offsetLeft, y: point4.offsetTop};
                var a = p1.x - p2.x;
                var b = p1.y - p2.y;
                var length = Math.sqrt( a*a + b*b );
                var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
                var pointWidth = point1.clientWidth / 2;
                var pointHeight = point1.clientWidth / 2;
                line2.style.width = length + 'px';
                line2.style.left = (p1.x + pointWidth)+ 'px';
                line2.style.top = (p1.y + pointHeight) + 'px';
                line2.style.transform = "rotate(" + angleDeg + "deg)";
            }
            function drawline4(){
                var p1 = {x: point4.offsetLeft, y: point4.offsetTop};
                var p2 = {x: point5.offsetLeft, y: point5.offsetTop};
                var a = p1.x - p2.x;
                var b = p1.y - p2.y;
                var length = Math.sqrt( a*a + b*b );
                var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
                var pointWidth = point1.clientWidth / 2;
                var pointHeight = point1.clientWidth / 2;
                line3.style.width = length + 'px';
                line3.style.left = (p1.x + pointWidth)+ 'px';
                line3.style.top = (p1.y + pointHeight) + 'px';
                line3.style.transform = "rotate(" + angleDeg + "deg)";
            }
            function drawline5(){
                var p1 = {x: point5.offsetLeft, y: point5.offsetTop};
                var p2 = {x: point6.offsetLeft, y: point6.offsetTop};
                var a = p1.x - p2.x;
                var b = p1.y - p2.y;
                var length = Math.sqrt( a*a + b*b );
                var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
                var pointWidth = point1.clientWidth / 2;
                var pointHeight = point1.clientWidth / 2;
                line4.style.width = length + 'px';
                line4.style.left = (p1.x + pointWidth)+ 'px';
                line4.style.top = (p1.y + pointHeight) + 'px';
                line4.style.transform = "rotate(" + angleDeg + "deg)";
            }
            function drawline6(){
                var p1 = {x: point6.offsetLeft, y: point6.offsetTop};
                var p2 = {x: point7.offsetLeft, y: point7.offsetTop};
                var a = p1.x - p2.x;
                var b = p1.y - p2.y;
                var length = Math.sqrt( a*a + b*b );
                var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
                var pointWidth = point1.clientWidth / 2;
                var pointHeight = point1.clientWidth / 2;
                line5.style.width = length + 'px';
                line5.style.left = (p1.x + pointWidth)+ 'px';
                line5.style.top = (p1.y + pointHeight) + 'px';
                line5.style.transform = "rotate(" + angleDeg + "deg)";
            }
            drawline1()
            drawline2()
            drawline3()
            drawline4()
            drawline5()
            drawline6()
        }