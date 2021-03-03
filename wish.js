var p5 = 0.006;
var x5 = 90, cnt = 1;
var five_star_items = ['胡桃', '七七', '迪卢克', '刻晴', '琴', '莫娜'];
var case_range = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function p(n){
    if(n<=73)
        return p5;
    else
        return 0.994 * (n - 73) / 17 + p5;
}
function wish(){
    var pi = p(cnt);
    var test = Math.random();
    if(test<=pi)
    {
        var test1 = Math.random();
        var item;
        if(test1<=0.5)
            item = 0;
        else
            item = Math.floor(Math.random()*five_star_items.length);
        case_range[Math.floor(cnt/10)] += 1;
        var position = document.getElementById("wish_result");
        var temp = document.createElement("p");
        var text = "您抽中了" + five_star_items[item];
        temp.innerText = text;
        position.appendChild(temp);
        cnt=1;
    }
    else
        cnt += 1;
}
