function _on_load() {
    updateinput();
    updateselect();
    updateiframe();
    updateinput2();
    updateselect2();
    updateiframe2();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './data/config.json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var status = xhr.status;
            if ((status >= 200 && status < 300) || status === 304) {
                try {
                    var Data = JSON.parse(xhr.responseText);
                    document.getElementById("notification-file").innerHTML = Data.notification;
                    document.getElementById("notification-file").className = "notifications show";
                }
                catch (err) {
                    console.log(err.message);
                }

            } else {

                console.log(xhr.responseText);
            }
        }
    }
    xhr.send(null);
    
   
}
function focus_name1() {
    document.getElementById("name1").focus();
}
function focus_name4() {
    document.getElementById("name4").focus();
}
/*****switch tabs*****/
changetab();
window.addEventListener("hashchange", changetab, false);
function changetab() {
    if(location.hash=="")
    {
        location.hash="#quick-reports"
    }
    if(location.hash=="#quick-reports")
    {
       
        document.getElementById("quick-reports-tab").className = "show-tab";
        document.getElementById("my-folders-tab").className = "hide-tab";
        document.getElementById("my-team-folders-tab").className = "hide-tab";
        document.getElementById("public-folders-tab").className = "hide-tab";
        document.querySelector(".tabs>ul li:first-child a").className = "selected-tab";
        document.querySelector(".tabs>ul li:nth-child(2) a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(3) a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(4) a").className = "unselected-tab";

    }
    if (location.hash == "#my-folders") {
        
        document.getElementById("quick-reports-tab").className = "hide-tab";
        document.getElementById("my-folders-tab").className = "show-tab";
        document.getElementById("my-team-folders-tab").className = "hide-tab";
        document.getElementById("public-folders-tab").className = "hide-tab";
        document.querySelector(".tabs>ul li:first-child a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(2) a").className = "selected-tab";
        document.querySelector(".tabs>ul li:nth-child(3) a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(4) a").className = "unselected-tab";
    }
    if (location.hash == "#my-team-folders") {
       
        document.getElementById("quick-reports-tab").className = "hide-tab";
        document.getElementById("my-folders-tab").className = "hide-tab";
        document.getElementById("my-team-folders-tab").className = "show-tab";
        document.getElementById("public-folders-tab").className = "hide-tab";
        document.querySelector(".tabs>ul li:first-child a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(2) a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(3) a").className = "selected-tab";
        document.querySelector(".tabs>ul li:nth-child(4) a").className = "unselected-tab";

    }
    if (location.hash == "#public-folders") {
        
        document.getElementById("quick-reports-tab").className = "hide-tab";
        document.getElementById("my-folders-tab").className = "hide-tab";
        document.getElementById("my-team-folders-tab").className = "hide-tab";
        document.getElementById("public-folders-tab").className = "show-tab";
        document.querySelector(".tabs>ul li:first-child a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(2) a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(3) a").className = "unselected-tab";
        document.querySelector(".tabs>ul li:nth-child(4) a").className = "selected-tab";
    }
}

//switch with keyboard
document.addEventListener("keydown",arrowsPressed,false );
function arrowsPressed(key) {
    var next_tab="#quick-reports";
    if (key.keyCode == 37) {
        if (location.hash == "#quick-reports") {
            next_tab = "#public-folders";
        }
        if (location.hash == "#my-folders") {
            next_tab = "#quick-reports";
        }
        if (location.hash == "#my-team-folders") {
            next_tab = "#my-folders";
        }
        if (location.hash == "#public-folders") {
            next_tab = "#my-team-folders";
        }
        location.hash = next_tab;
    }
    if(key.keyCode == 39)
    {
        if (location.hash == "#quick-reports") {
            next_tab= "#my-folders";
        }
        if (location.hash == "#my-folders") {
            next_tab = "#my-team-folders";
        }
        if (location.hash == "#my-team-folders") {
            next_tab = "#public-folders";
        }
        if (location.hash === "#public-folders") {
            next_tab = "#quick-reports";
        }
        location.hash = next_tab;
    }
    
}

document.getElementById("name1").addEventListener("keydown", Pressbtn1, false);
document.getElementById("name2").addEventListener("keydown", Pressbtn1, false);
document.getElementById("name3").addEventListener("keydown", Pressbtn1, false);
document.getElementById("url1").addEventListener("keydown", Pressbtn1, false);
document.getElementById("url2").addEventListener("keydown", Pressbtn1, false);
document.getElementById("url3").addEventListener("keydown", Pressbtn1, false);
document.getElementById("name4").addEventListener("keydown", Pressbtn2, false);
document.getElementById("name5").addEventListener("keydown", Pressbtn2, false);
document.getElementById("name6").addEventListener("keydown", Pressbtn2, false);
document.getElementById("url4").addEventListener("keydown", Pressbtn2, false);
document.getElementById("url5").addEventListener("keydown", Pressbtn2, false);
document.getElementById("url6").addEventListener("keydown", Pressbtn2, false);
function Pressbtn1(key) {
    if (key.keyCode == 13) // enter
        getsitesinfo();

    if (key.keyCode==27) //escape
        document.querySelector('#settings-checkbox1').checked = false;            
    }
function Pressbtn2(key) {
    if (key.keyCode == 13) // enter
        getsitesinfo2();

    if (key.keyCode == 27) //escape
        document.querySelector('#settings-checkbox2').checked = false;
       
}



document.querySelector('#quick-reports-tab .save').addEventListener("keydown", restore_tab1,false);
function restore_tab1(key) {
    var keyCode = key.keyCode;
    if (keyCode == 9) {
        focus_name1();
    }
}
document.querySelector('#my-team-folders-tab .save').addEventListener("keydown", restore_tab2);
function restore_tab2(key) {
    if (key.keyCode == 9) {
        focus_name4();
    }

}







/*****URL check****/
function isUrl(url) {
    //fix if needed
    var url_val = url.value;
    var http = url_val.substring(0, 7);
    var https = url_val.substring(0, 8);
    if ((http != "http://") && (https != "https://"))
    {
        alert("wrong");
        url.value = "http://" + url_val;
    }
    var urlPatt = new RegExp("(http|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?");
    if (!urlPatt.test(url.value)) {
        return false;
    }
    return true;
}
/********cancel btn*********/
function closesettings()
{
    document.getElementById("settings-checkbox1").checked = false;
   
}
function closesettings2()
{
    document.getElementById("settings-checkbox2").checked = false;
    
}
/*******clear errors **********/
function clear_errors()
{
    document.getElementById("name1").nextElementSibling.hidden = true;
    document.getElementById("name1").className = "site-input";
    document.getElementById("name2").nextElementSibling.hidden = true;
    document.getElementById("name2").className = "site-input";
    document.getElementById("name3").nextElementSibling.hidden = true;
    document.getElementById("name3").className = "site-input";
    document.getElementById("url1").nextElementSibling.hidden = true;
    document.getElementById("url1").className = "site-input";
    document.getElementById("url2").nextElementSibling.hidden = true;
    document.getElementById("url2").className = "site-input";
    document.getElementById("url3").nextElementSibling.hidden = true;
    document.getElementById("url3").className = "site-input";
}
function clear_errors2()
{
    document.getElementById("name4").nextElementSibling.hidden = true;   
    document.getElementById("name4").className = "site-input";
    document.getElementById("name5").nextElementSibling.hidden = true;
    document.getElementById("name5").className = "site-input";
    document.getElementById("name6").nextElementSibling.hidden = true;
    document.getElementById("name6").className = "site-input";
    document.getElementById("url4").nextElementSibling.hidden = true;
    document.getElementById("url4").className = "site-input";
    document.getElementById("url5").nextElementSibling.hidden = true;
    document.getElementById("url5").className = "site-input";
    document.getElementById("url6").nextElementSibling.hidden = true;
    document.getElementById("url6").className = "site-input";
}





function updateinput() {
    if (localStorage.getItem('Data') != null) {
        var jobject = JSON.parse(localStorage.getItem('Data'));
        var Sites = jobject.Sites;
        for (var i = 0; i < Sites.length; i++) {
            document.querySelector('#name' + (i + 1)).value = Sites[i].Name;
            document.querySelector('#url' + (i + 1)).value = Sites[i].Url;
        }
        
    }
    
}
function updateinput2() {
    if (localStorage.getItem('Data') != null) {
        var jobject = JSON.parse(localStorage.getItem('Data'));
        var Sites2 = jobject.Sites2;
        for (var i = 0; i < Sites2.length; i++) {
            document.querySelector('#name' + (i + 4)).value = Sites2[i].Name;
            document.querySelector('#url' + (i + 4)).value = Sites2[i].Url;
        }
        
    }
   
}
function updateiframe() {

    if (document.querySelector("#quick-reports-tab .sites-sel").value != null && document.querySelector("#quick-reports-tab .sites-sel").value != "") {
        document.querySelector("#quick-reports-tab .site-iframe").src = document.querySelector("#quick-reports-tab .sites-sel").value;
        document.querySelector("#quick-reports-tab .site-iframe").hidden = false;
        document.getElementById("QR-arrow").href = document.querySelector("#quick-reports-tab .sites-sel").value;
    }
    else
        document.querySelector("#quick-reports-tab .site-iframe").hidden = true;
}
function updateiframe2() {

    if (document.querySelector("#my-team-folders-tab .sites-sel").value != null && document.querySelector("#my-team-folders-tab .sites-sel").value != "") {
        document.querySelector("#my-team-folders-tab .site-iframe").src = document.querySelector("#my-team-folders-tab .sites-sel").value;
        document.querySelector("#my-team-folders-tab .site-iframe").hidden = false;
        document.getElementById("QR-arrow2").href = document.querySelector("#my-team-folders-tab .sites-sel").value;
    }
    else
        document.querySelector("#my-team-folders-tab .site-iframe").hidden = true;
}
function updateselect() {


    if (localStorage.getItem('Data') != null) {
        var jobject = JSON.parse(localStorage.getItem('Data'));
        var Sites = jobject.Sites;
        var sites_sel = document.querySelector("#quick-reports-tab .sites-sel");

        for (var i = sites_sel.length - 1  ; i >= 0 ; i--) {
            sites_sel.remove(i);
        }
        for (var i = 0; i < Sites.length; i++) {
            var option = document.createElement("option");
            option.text = Sites[i].Name;
            option.value = Sites[i].Url;
            sites_sel.add(option);
        }

        updateiframe();
    }
}
function updateselect2() {

    
    if (localStorage.getItem('Data') != null) {
        var jobject = JSON.parse(localStorage.getItem('Data'));
        var Sites2 = jobject.Sites2;
        var sites_sel = document.querySelector("#my-team-folders-tab .sites-sel");
        for (var i = sites_sel.length - 1  ; i >= 0 ; i--) {
            sites_sel.remove(i);
        }
        for (var i = 0; i < Sites2.length; i++) {
            var option = document.createElement("option");
            option.text = Sites2[i].Name;
            option.value = Sites2[i].Url;
            sites_sel.add(option);
        }

        updateiframe2();
    }
}
/********site info*********/

function getsitesinfo() {

    var Sites = [];
    var name1 = document.getElementById("name1");
    var name2 = document.getElementById("name2");
    var name3 = document.getElementById("name3");
    var url1 = document.getElementById("url1");
    var url2 = document.getElementById("url2");
    var url3 = document.getElementById("url3");
    clear_errors();
    var valid = true;
    /****checks for report1***/
    //name empty url not
    if ((name1.value != "") || (url1.value != "")) {
        if ((name1.value == "") && (url1.value != "")) {
            name1.nextElementSibling.hidden = false;
            name1.className = "site-input error-input";
            valid = false;
        }
        else {
            //name valid and url invalid
            if ((isUrl(url1) == false) && (name1.value != "")) {
                url1.nextElementSibling.hidden = false;
                url1.className = "site-input error-input";
                valid = false;
            }
        }
        if (valid == true)
            Sites.push({ "Name": name1.value, "Url": url1.value });
    }
    if (((name2.value != "") || (url2.value != "")) && (valid)) {
        if ((name2.value == "") && (url2.value != "")) {
            name2.nextElementSibling.hidden = false;
            name2.className = "site-input error-input";
            valid = false;
        }
        else {
            //name valid and url invalid
            if ((isUrl(url2) == false) && (name2.value != "")) {
                url2.nextElementSibling.hidden = false;
                url2.className = "site-input error-input";
                valid = false;
            }
        }
        if (valid == true)
            Sites.push({ "Name": name2.value, "Url": url2.value });
    }
    if (((name3.value != "") || (url3.value != "")) && (valid)) {
        if ((name3.value == "") && (url3.value != "")) {
            name3.nextElementSibling.hidden = false;
            name3.className = "site-input error-input";
            valid = false;
        }
        else {
            //name valid and url invalid
            if ((isUrl(url3) == false) && (name3.value != "")) {
                url3.nextElementSibling.hidden = false;
                url3.className = "site-input error-input";
                valid = false;
            }
        }
        if (valid == true)
            Sites.push({ "Name": name3.value, "Url": url3.value });
    }
    if (valid == true) {

        if (localStorage.getItem('Data') != null) {
            var jobject = JSON.parse(localStorage.getItem('Data'));
            jobject.Sites = Sites;
            localStorage.setItem('Data', JSON.stringify(jobject));
        }
        else {
            var jobject = { Sites: Sites };
            localStorage.setItem('Data', JSON.stringify(jobject));
        }

        document.getElementById("settings-checkbox1").checked = false;
        updateinput();
        updateselect();

    }


}
function getsitesinfo2() {
    var Sites2 = [];
    var name4 = document.getElementById("name4");
    var name5 = document.getElementById("name5");
    var name6 = document.getElementById("name6");
    var url4 = document.getElementById("url4");
    var url5 = document.getElementById("url5");
    var url6 = document.getElementById("url6");
    clear_errors2();
    var valid = true;
    /****checks for report1***/
    //name empty url not
    if ((name4.value != "") || (url4.value != "")) {
        if ((name4.value == "") && (url4.value != "")) {
            name4.nextElementSibling.hidden = false;
            name4.className = "site-input error-input";
            valid = false;
        }
        else {
            //name valid and url invalid
            if ((isUrl(url4) == false) && (name4.value != "")) {
                url4.nextElementSibling.hidden = false;
                url4.className = "site-input error-input";
                valid = false;
            }
        }
        if (valid == true)
            Sites2.push({ "Name": name4.value, "Url": url4.value });
    }
    if (((name5.value != "") || (url5.value != "")) && (valid)) {
        if ((name5.value == "") && (url5.value != "")) {
            name5.nextElementSibling.hidden = false;
            name5.className = "site-input error-input";
            valid = false;
        }
        else {
            //name valid and url invalid
            if ((isUrl(url5) == false) && (name5.value != "")) {
                url5.nextElementSibling.hidden = false;
                url5.className = "site-input error-input";
                valid = false;
            }
        }
        if (valid == true)
            Sites2.push({ "Name": name5.value, "Url": url5.value });
    }
    if (((name6.value != "") || (url6.value != "")) && (valid)) {
        if ((name6.value == "") && (url6.value != "")) {
            name6.nextElementSibling.hidden = false;
            name6.className = "site-input error-input";
            valid = false;
        }
        else {
            //name valid and url invalid
            if ((isUrl(url6) == false) && (name6.value != "")) {
                url6.nextElementSibling.hidden = false;
                url6.className = "site-input error-input";
                valid = false;
            }
        }
        if (valid == true)
            Sites2.push({ "Name": name6.value, "Url": url6.value });
    }
    if (valid == true) {
        if (localStorage.getItem('Data') != null) {
            var jobject = JSON.parse(localStorage.getItem('Data'));
            jobject.Sites2 = Sites2;
            localStorage.setItem('Data', JSON.stringify(jobject));
        }
        else {
            var jobject = { Sites2: Sites2 };
            localStorage.setItem('Data', JSON.stringify(jobject));
        }


        document.getElementById("settings-checkbox2").checked = false;
        updateinput2();
        updateselect2();

    }
}































/***********event listeners****************/
document.getElementById("name1").addEventListener("input", function () {
    if (document.getElementById("name1").value != "") {
        document.getElementById("name1").className = "site-input";
        document.getElementById("name1").nextElementSibling.hidden = true;
    }
}, false);
document.getElementById("name2").addEventListener("input", function () {
    if (document.getElementById("name2").value != "") {
        document.getElementById("name2").className = "site-input";
        document.getElementById("name2").nextElementSibling.hidden = true;
    }
}, false);
document.getElementById("name3").addEventListener("input", function () {
    if (document.getElementById("name3").value != "") {
        document.getElementById("name3").className = "site-input";
        document.getElementById("name3").nextElementSibling.hidden = true;
    }
}, false);
document.getElementById("url").addEventListener("input", function () {
    if (isUrl(document.getElementById("url1").value)) {
        document.getElementById("url1").className = "site-input";
        document.getElementById("url1").nextElementSibling.hidden = true;
    }

}, false);
document.getElementById("url2").addEventListener("input", function () {
    if (isUrl(document.getElementById("url2").value)) {
        document.getElementById("url2").className = "site-input";
        document.getElementById("url2").nextElementSibling.hidden = true;
    }

}, false);
document.getElementById("url3").addEventListener("input", function () {
    if (isUrl(document.getElementById("url3").value)) {
        document.getElementById("url3").className = "site-input";
        document.getElementById("url3").nextElementSibling.hidden = true;
    }

}, false);
document.getElementById("name4").addEventListener("input", function () {
    if (document.getElementById("name4").value != "") {
        document.getElementById("name4").className = "site-input";
        document.getElementById("name4").nextElementSibling.hidden = true;
    }
}, false);
document.getElementById("name5").addEventListener("input", function () {
    if (document.getElementById("name5").value != "") {
        document.getElementById("name5").className = "site-input";
        document.getElementById("name5").nextElementSibling.hidden = true;
    }
}, false);
document.getElementById("name6").addEventListener("input", function () {
    if (document.getElementById("name6").value != "") {
        document.getElementById("name6").className = "site-input";
        document.getElementById("name6").nextElementSibling.hidden = true;
    }
}, false);
document.getElementById("url4").addEventListener("input", function () {
    if (isUrl(document.getElementById("url4").value)) {
        document.getElementById("url4").className = "site-input";
        document.getElementById("url4").nextElementSibling.hidden = true;
    }

}, false);
document.getElementById("url5").addEventListener("input", function () {
    if (isUrl(document.getElementById("url5").value)) {
        document.getElementById("url5").className = "site-input";
        document.getElementById("url5").nextElementSibling.hidden = true;
    }

}, false);
document.getElementById("url6").addEventListener("input", function () {
    if (isUrl(document.getElementById("url6").value)) {
        document.getElementById("url6").className = "site-input";
        document.getElementById("url6").nextElementSibling.hidden = true;
    }

}, false);



