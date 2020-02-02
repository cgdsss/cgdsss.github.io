function get_width()
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
document.getElementById("page_size").style = "width:"+get_width() +"px";
if (get_width() < 1000) {

  maxline = "maxwidth leftfloat";
  document.getElementById("title_div_left").className = maxline;
  document.getElementById("title_div_right").className = maxline;
  document.getElementById("imglove").style = "";
  document.getElementById("title_div_right").align = "left";
  document.getElementById("about_title").className = maxline;
  document.getElementById("about_content").className = maxline;
  document.getElementById("edu_title").className = maxline;
  document.getElementById("edu_content").className = maxline;
  document.getElementById("project_title").className = maxline;
  document.getElementById("project_content").className = maxline;
  document.getElementById("pub_title").className = maxline;
  document.getElementById("pub_content").className = maxline;
  document.getElementById("service_title").className = maxline;
  document.getElementById("service_content").className = maxline;

  var e = document.getElementById("about_title");
  e.innerHTML = e.innerHTML.replace('<br>', '');
  e = document.getElementById("title_br");
  e.innerHTML = e.innerHTML.replace('<br>', '');
  var e = document.getElementById("edu_title");
  e.innerHTML = e.innerHTML.replace('<br>', '');
  var e = document.getElementById("project_title");
  e.innerHTML = e.innerHTML.replace('<br>', '');
  var e = document.getElementById("pub_title");
  e.innerHTML = e.innerHTML.replace('<br>', '');
  var e = document.getElementById("service_title");
  e.innerHTML = e.innerHTML.replace('<br>', '');
}