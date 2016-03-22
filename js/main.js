
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
function isUrl(url) {

    var urlPatt = new RegExp("(http|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?");
    if (!urlPatt.test(url)) {
        return false;
    }
    return true;
}
function closesettings()
{
    document.getElementById("settings-checkbox1").checked = false;
}
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
function getsitesinfo()
{
    
    var jobject = { Sites: [] };
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
    if((name1.value!="")||(url1.value!=""))
    {  
        if ((name1.value == "") && (url1.value != ""))
        {
        name1.nextElementSibling.hidden = false;
        name1.className = "site-input error-input";
        valid = false;
        } 
        else {
        //name valid and url invalid
            if ((isUrl(url1.value) == false) && (name1.value != ""))
            {
            url1.nextElementSibling.hidden = false;
            url1.className = "site-input error-input";
            valid = false;
            }
        }
        if(valid==true)
            jobject.Sites.push({ "Name": name1.value, "Url": url1.value });
    }
    if (((name2.value != "") || (url2.value != ""))&&(valid)) {
        if ((name2.value == "") && (url2.value != "")) {
            name2.nextElementSibling.hidden = false;
            name2.className = "site-input error-input";
            valid = false;
        }
        else {
            //name valid and url invalid
            if ((isUrl(url2.value) == false) && (name2.value != "")) {
                url2.nextElementSibling.hidden = false;
                url2.className = "site-input error-input";
                valid = false;
            }
        }
        if (valid == true)
            jobject.Sites.push({ "Name": name2.value, "Url": url2.value });
    }
    if (((name3.value != "") || (url3.value != ""))&&(valid)) {
        if ((name3.value == "") && (url3.value != "")) {
            name3.nextElementSibling.hidden = false;
            name3.className = "site-input error-input";
            valid = false;
        }
        else {
            //name valid and url invalid
            if ((isUrl(url3.value) == false) && (name3.value != "")) {
                url3.nextElementSibling.hidden = false;
                url3.className = "site-input error-input";
                valid = false;
            }
        }
        if (valid == true)
            jobject.Sites.push({ "Name": name3.value, "Url": url3.value });
    }
    if (valid == true) {
        
        localStorage.setItem('Data', JSON.stringify(jobject));
        document.getElementById("settings-checkbox1").checked = false;
        updateinput();
        updateselect();
    }
}
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
document.getElementById("url1").addEventListener("input", function () {
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

function updateinput() {
    if (localStorage.getItem('Data') != null) {
        
        var jobject = JSON.parse(localStorage.getItem('Data'));
        var Sites = jobject.Sites;
        for (var i = 0; i < Sites.length; i++)
        {
            document.querySelector('#name'+(i + 1)).value = Sites[i].Name;
            document.querySelector('#url' + (i + 1)).value = Sites[i].Url;
        }
    }
}
function _on_load()
{
    updateinput();
    updateselect();
}
function updateiframe() {
    alert("HEREEEEE");
    if (document.querySelector("#quick-reports-tab .sites-sel").value != null && document.querySelector("#quick-reports-tab .sites-sel").value != "") {
        alert("HEREEEEE222");
        document.querySelector("#quick-reports-tab .site-iframe").src = document.querySelector("#quick-reports-tab .sites-sel").value;
        alert("hereeee3");
        document.querySelector("#quick-reports-tab .site-iframe").hidden = false;
        document.getElementById("QR-arrow").href = document.querySelector("#quick-reports-tab .sites-sel").value;
    }
    else
        document.querySelector("#quick-reports-tab .site-iframe").hidden = true;
}
function updateselect() {
    
    alert("yayyy");
    if (localStorage.getItem('Data') != null)
    {
        var jobject = JSON.parse(localStorage.getItem('Data'));
        var Sites = jobject.Sites;
        var sites_sel = document.querySelector("#quick-reports-tab .sites-sel");
        alert(sites_sel.length);
        for (var i = sites_sel.length-1  ; i >=0 ; i--)
        {
            sites_sel.remove(i);
        }
        alert(sites_sel.length);
        alert(Sites.length);
        for (var i = 0; i < Sites.length; i++) {
            var option = document.createElement("option");
            option.text = Sites[i].Name;
            option.value = Sites[i].Url;
            sites_sel.add(option);
        }
        
        updateiframe();
    }
}



var ajaxnotifications = function (notif) {
    var Data = notif;
    var element=document.getElementById("notification-file");
    element.innerHTML = Data.notification;
    element.className = "notifications show";
};

var ajax_set = { method: 'GET', done: ajaxnotifications };
UTILS.ajax('./data/config.json', ajax_set)
