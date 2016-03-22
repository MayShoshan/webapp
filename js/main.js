
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

    var urlpatt = new RegExp("(http|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?");
    if (!urlPatt.test(url)) {
        return false;
    }
    return true;
}
function closesttings()
{
    document.getElementById("reports-list-wrap").classname = "hide-tab";
}
function getsitesinfo()
{
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var url1 = document.getElementById("url1").value;
    var url2 = document.getElementById("url2").value;
    var url3 = document.getElementById("url3").value;
    /****checks for report1***/
    //name empty url not
    if ((name1 == "") && (url1 != ""))
    {
        
    }
    //name valid and url invalid
    if (isUrl(url1)==false )
    {

    }
    var url1=document
}
















