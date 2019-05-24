window.onload = function(){
    var myTab = document.getElementById("tab");    //整个div
    var myUl = myTab.getElementsByTagName("ul")[0];//一个节点
    var myLi = myUl.getElementsByTagName("li");    //数组
    var myDiv = document.querySelectorAll("#tab>div");

    for(var i = 0; i<myLi.length;i++){
        myLi[i].index = i;
        myLi[i].onclick = function(){
            for(var j = 0; j < myLi.length; j++){
                myLi[j].className="off";
                myDiv[j].className = "hide";
            }
            this.className = "on";
            myDiv[this.index].className = "show";
        }
    }
}