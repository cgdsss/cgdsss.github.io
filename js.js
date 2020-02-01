function w()
{
  screen_w = window.screen.availWidth;
  if (screen_w > 1000)
  {
    return 1000;
  }
  else
  {
    return screen_w;
  }
}
document.getElementById("page_size").style = "width:"+w() +"px";
if (w() < 1000) {
    maxline = "maxwidth leftfloat";
    document.getElementById("11").className = maxline;
    document.getElementById("12").className = maxline;
    document.getElementById("imglove").style = "";
    document.getElementById("12").align = "left";
    document.getElementById("abouttext").className = maxline;
    document.getElementById("aboutword").className = maxline;
    document.getElementById("edutext").className = maxline;
    document.getElementById("eduword").className = maxline;
    document.getElementById("projecttext").className = maxline;
    document.getElementById("projectword").className = maxline;
    document.getElementById("pubtext").className = maxline;
    document.getElementById("pubword").className = maxline;
    document.getElementById("Servicetext").className = maxline;
    document.getElementById("Serviceword").className = maxline;

    var e = document.getElementById("abouttext");
    e.innerHTML = e.innerHTML.replace('<br>', '');
    e = document.getElementById("title_br");
    e.innerHTML = e.innerHTML.replace('<br>', '');
    var e = document.getElementById("edutext");
    e.innerHTML = e.innerHTML.replace('<br>', '');
    var e = document.getElementById("projecttext");
    e.innerHTML = e.innerHTML.replace('<br>', '');
    var e = document.getElementById("pubtext");
    e.innerHTML = e.innerHTML.replace('<br>', '');
    var e = document.getElementById("Servicetext");
    e.innerHTML = e.innerHTML.replace('<br>', '');
}