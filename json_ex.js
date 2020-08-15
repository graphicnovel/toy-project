window.addEventListener("DOMContentLoaded", function () {
    var data = new XMLHttpRequest(); //외부 파일 가져오기
    data.open("get", "jsonData_ex.json", true);
    data.send(null);

    var search = document.querySelector("input[name=srch]");
    var btn = document.querySelector(".search button");
    var list = document.querySelector(".list");
    var ul = document.querySelector('ul');
    var title = document.querySelectorAll(".list h5");
    var tResult = [];

    btn.addEventListener("click", listShow);

    function listShow() {

        var response = JSON.parse(data.responseText);
        
        ul.innerHTML = '';

        
        //검색 결과 출력
        response.gallery.forEach(function (el, idx) {

            if (el.title.indexOf(search.value) != -1) {
                tResult = [];
                tResult.push(el);

                list.classList.add("active");
                

                tResult.forEach(function (re) {
                    ul.innerHTML += "<li><h5>" + re.title + "</h5><article><figure><img src=" + re.src + "></figure><figcaption>" + re.fig + "</figcaption></article>";
                });
                
                
            }

        });
        
        var liEle = document.querySelectorAll('ul li');
        
                
        
        liEle.forEach(function(li,idx){
           li.addEventListener('click',open);
        });
    }
    
    function open(){
        var arti = document.querySelectorAll('ul li article');
        arti.forEach(function(a,idx){
            a.classList.toggle('active');
        });
        
    }
    
    
});
