
        window.onload = function () {

            var oDiv = document.getElementById('content');
            var aUl = oDiv.getElementsByTagName('ul')[0];
            var aImg = aUl.getElementsByTagName('img');
            var aSpan = oDiv.getElementsByTagName('span')[1];
            var tmp = null;
            var onoff = true;
            var arr = ['极差', '一般', '不错', '推荐', '力荐'];

            for (var i = 0; i < aImg.length; i++) {
                aImg[i].index = i;
                aImg[i].onmouseover = function () {
                    clear();
                    change(this.index)
                };
                aImg[i].onmouseout = function () {
                    clear();
                    aSpan.style.display = 'none';
                    if (onoff == false) {
                        change(tmp)
                    }
                };
                aImg[i].onclick = function () {
                    tmp = this.index;
                    click(tmp);
                    onoff = false
                };
            };

            function clear() {
                for (var i = 0; i < aImg.length; i++) {
                    aImg[i].src = 'img/mv-0.gif'
                }
            };

            function change(obj) {
                if (obj < 2) {
                    for (var j = 0; j < obj + 1; j++) {
                        aImg[j].src = 'img/mv-1.gif';
                    }
                    aSpan.style.display = 'block';
                    aSpan.innerHTML = arr[obj]
                } else {
                    for (var j = 0; j < obj + 1; j++) {
                        aImg[j].src = 'img/mv-2.gif';
                    }
                    aSpan.style.display = 'block';
                    aSpan.innerHTML = arr[obj]
                }
            };

            function click(obj) {
                if (obj < 2) {
                    for (var j = 0; j < obj + 1; j++) {
                        aImg[j].src = 'img/mv-1.gif'
                    }
                } else {
                    for (var j = 0; j < obj + 1; j++) {
                        aImg[j].src = 'img/mv-2.gif'
                    }
                }
            }
        };

  