"use strict";

function addSwitcher() {
  var dzSwitcher =
    '<div class="sidebar-right"><div class="bg-overlay"></div><a class="sidebar-right-trigger wave-effect wave-effect-x" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-original-title="Change Layout"><span><i class="fa fa-spin"> <img src="logo.png" alt="" class="new-setting" /></i></span></a><a class="sidebar-close-trigger" href="javascript:void(0);"><span><i class="">&#x2715;</i></span></a><div class="sidebar-right-inner"><h4>Pick your style<a class="btn btn-primary btn-sm pull-right" href="javascript:void(0);" onclick="deleteAllCookie()">Delete All Cookie</a></h4><div class="card-tabs"><ul class="nav nav-tabs" role="tablist"><li class="nav-item"><a class="nav-link active" href="#tab1" data-bs-toggle="tab">Theme</a></li><li class="nav-item"><a class="nav-link" href="#tab2" data-bs-toggle="tab">Header</a></li><li class="nav-item"><a class="nav-link" href="#tab3" data-bs-toggle="tab">Content</a></li><li class="nav-item"><a class="nav-link" href="#tab4" data-bs-toggle="tab">Navigation</a></li></ul></div><div class="tab-content tab-content-default tabcontent-border"><div class="fade tab-pane active show" id="tab1"><div class="admin-settings"><div class="row"><div class="col-sm-12"><p>Background</p><select class="default-select form-control wide" id="theme_version" name="theme_version"><option value="disabled selected hidden">Choose Mode</option><option value="light">Light</option><option value="dark">Dark</option></select></div><div class="col-sm-6"><p>Primary Color</p><div><span data-bs-toggle="tooltip" title="Color 1" data-bs-placement="top"><input class="chk-col-primary filled-in" id="primary_color_1" name="primary_bg" type="radio" value="color_1"><label for="primary_color_1" class="bg-label-pattern"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_2" name="primary_bg" type="radio" value="color_2"><label for="primary_color_2"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_3" name="primary_bg" type="radio" value="color_3"><label for="primary_color_3"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_4" name="primary_bg" type="radio" value="color_4"><label for="primary_color_4"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_5" name="primary_bg" type="radio" value="color_5"><label for="primary_color_5"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_6" name="primary_bg" type="radio" value="color_6"><label for="primary_color_6"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_7" name="primary_bg" type="radio" value="color_7"><label for="primary_color_7"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_9" name="primary_bg" type="radio" value="color_9"><label for="primary_color_9"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_10" name="primary_bg" type="radio" value="color_10"><label for="primary_color_10"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_11" name="primary_bg" type="radio" value="color_11"><label for="primary_color_11"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_12" name="primary_bg" type="radio" value="color_12"><label for="primary_color_12"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_13" name="primary_bg" type="radio" value="color_13"><label for="primary_color_13"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_14" name="primary_bg" type="radio" value="color_14"><label for="primary_color_14"></label></span><span><input class="chk-col-primary filled-in" id="primary_color_15" name="primary_bg" type="radio" value="color_15"><label for="primary_color_15"></label></span></div></div><div class="col-sm-6"><p>Navigation Header</p><div><span><input class="chk-col-primary filled-in" id="nav_header_color_1" name="navigation_header" type="radio" value="color_1"><label for="nav_header_color_1" class="bg-label-pattern"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_2" name="navigation_header" type="radio" value="color_2"><label for="nav_header_color_2"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_3" name="navigation_header" type="radio" value="color_3"><label for="nav_header_color_3"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_4" name="navigation_header" type="radio" value="color_4"><label for="nav_header_color_4"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_5" name="navigation_header" type="radio" value="color_5"><label for="nav_header_color_5"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_6" name="navigation_header" type="radio" value="color_6"><label for="nav_header_color_6"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_7" name="navigation_header" type="radio" value="color_7"><label for="nav_header_color_7"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_8" name="navigation_header" type="radio" value="color_8"><label for="nav_header_color_8" class="border"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_9" name="navigation_header" type="radio" value="color_9"><label for="nav_header_color_9"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_10" name="navigation_header" type="radio" value="color_10"><label for="nav_header_color_10"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_11" name="navigation_header" type="radio" value="color_11"><label for="nav_header_color_11"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_12" name="navigation_header" type="radio" value="color_12"><label for="nav_header_color_12"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_13" name="navigation_header" type="radio" value="color_13"><label for="nav_header_color_13"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_14" name="navigation_header" type="radio" value="color_14"><label for="nav_header_color_14"></label></span><span><input class="chk-col-primary filled-in" id="nav_header_color_15" name="navigation_header" type="radio" value="color_15"><label for="nav_header_color_15"></label></span></div></div><div class="col-sm-6"><p>Header</p><div><span><input class="chk-col-primary filled-in" id="header_color_1" name="header_bg" type="radio" value="color_1"><label for="header_color_1" class="bg-label-pattern"></label></span><span><input class="chk-col-primary filled-in" id="header_color_2" name="header_bg" type="radio" value="color_2"><label for="header_color_2"></label></span><span><input class="chk-col-primary filled-in" id="header_color_3" name="header_bg" type="radio" value="color_3"><label for="header_color_3"></label></span><span><input class="chk-col-primary filled-in" id="header_color_4" name="header_bg" type="radio" value="color_4"><label for="header_color_4"></label></span><span><input class="chk-col-primary filled-in" id="header_color_5" name="header_bg" type="radio" value="color_5"><label for="header_color_5"></label></span><span><input class="chk-col-primary filled-in" id="header_color_6" name="header_bg" type="radio" value="color_6"><label for="header_color_6"></label></span><span><input class="chk-col-primary filled-in" id="header_color_7" name="header_bg" type="radio" value="color_7"><label for="header_color_7"></label></span><span><input class="chk-col-primary filled-in" id="header_color_8" name="header_bg" type="radio" value="color_8"><label for="header_color_8" class="border"></label></span><span><input class="chk-col-primary filled-in" id="header_color_9" name="header_bg" type="radio" value="color_9"><label for="header_color_9"></label></span><span><input class="chk-col-primary filled-in" id="header_color_10" name="header_bg" type="radio" value="color_10"><label for="header_color_10"></label></span><span><input class="chk-col-primary filled-in" id="header_color_11" name="header_bg" type="radio" value="color_11"><label for="header_color_11"></label></span><span><input class="chk-col-primary filled-in" id="header_color_12" name="header_bg" type="radio" value="color_12"><label for="header_color_12"></label></span><span><input class="chk-col-primary filled-in" id="header_color_13" name="header_bg" type="radio" value="color_13"><label for="header_color_13"></label></span><span><input class="chk-col-primary filled-in" id="header_color_14" name="header_bg" type="radio" value="color_14"><label for="header_color_14"></label></span><span><input class="chk-col-primary filled-in" id="header_color_15" name="header_bg" type="radio" value="color_15"><label for="header_color_15"></label></span></div></div><div class="col-sm-6"><p>Sidebar</p><div><span><input class="chk-col-primary filled-in" id="sidebar_color_1" name="sidebar_bg" type="radio" value="color_1"><label for="sidebar_color_1" class="bg-label-pattern"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_2" name="sidebar_bg" type="radio" value="color_2"><label for="sidebar_color_2"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_3" name="sidebar_bg" type="radio" value="color_3"><label for="sidebar_color_3"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_4" name="sidebar_bg" type="radio" value="color_4"><label for="sidebar_color_4"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_5" name="sidebar_bg" type="radio" value="color_5"><label for="sidebar_color_5"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_6" name="sidebar_bg" type="radio" value="color_6"><label for="sidebar_color_6"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_7" name="sidebar_bg" type="radio" value="color_7"><label for="sidebar_color_7"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_8" name="sidebar_bg" type="radio" value="color_8"><label for="sidebar_color_8" class="border"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_9" name="sidebar_bg" type="radio" value="color_9"><label for="sidebar_color_9"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_10" name="sidebar_bg" type="radio" value="color_10"><label for="sidebar_color_10"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_11" name="sidebar_bg" type="radio" value="color_11"><label for="sidebar_color_11"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_12" name="sidebar_bg" type="radio" value="color_12"><label for="sidebar_color_1"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_13" name="sidebar_bg" type="radio" value="color_13"><label for="sidebar_color_13"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_14" name="sidebar_bg" type="radio" value="color_14"><label for="sidebar_color_14"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_color_15" name="sidebar_bg" type="radio" value="color_15"><label for="sidebar_color_15"></label></span></div></div></div></div></div><div class="fade tab-pane" id="tab2"><div class="admin-settings"><div class="row"><div class="col-sm-6"><p>Layout</p><select class="default-select form-control wide" id="theme_layout" name="theme_layout"><option value="disabled selected hidden">Choose Layout</option><option value="vertical">Vertical</option><option value="horizontal">Horizontal</option></select></div><div class="col-sm-6"><p>Header position</p><select class="default-select form-control wide" id="header_position" name="header_position"><option value="disabled selected hidden">Choose Header Positon</option><option value="static">Static</option><option value="fixed">Fixed</option></select></div><div class="col-sm-6"><p>Sidebar</p><select class="default-select form-control wide" id="sidebar_style" name="sidebar_style"><option value="disabled selected hidden">Choose Sidebar</option><option value="full">Full</option><option value="mini">Mini</option><option value="compact">Compact</option><option value="overlay">Overlay</option><option value="icon-hover">Icon-hover</option></select></div><div class="col-sm-6"><p>Sidebar position</p><select class="default-select form-control wide" id="sidebar_position" name="sidebar_position"><option value="disabled selected hidden">Choose Sidebar Position</option><option value="static">Static</option><option value="fixed">Fixed</option></select></div></div></div></div><div class="fade tab-pane" id="tab3"><div class="admin-settings"><div class="row"><div class="col-sm-6"><p>Container</p><select class="default-select form-control wide" id="container_layout" name="container_layout"><option value="disabled selected hidden">Choose Container</option><option value="wide">Wide</option><option value="boxed">Boxed</option><option value="wide-boxed">Wide Boxed</option></select></div><div class="col-sm-6"><p>Body Font</p><select class="default-select form-control wide" id="typography" name="typography"><option value="disabled selected hidden">Choose Font</option><option value="roboto">Roboto</option><option value="poppins">Poppins</option><option value="opensans">Open Sans</option><option value="HelveticaNeue">HelveticaNeue</option></select></div><div class="col-sm-6"><p>Direction</p><select class="default-select form-control" id="theme_direction" name="theme_direction"><option value="disabled selected hidden">Choose Direction</option><option value="ltr">LTR</option><option value="rtl">RTL</option></select></div></div></div></div><div class="fade tab-pane" id="tab4"><div class="admin-settings"><div class="row"><div class="col-sm-12"><p>Sidebar Menu Color</p><div><span data-bs-toggle="tooltip" title="Color 1" data-placement="top"><input class="chk-col-primary filled-in" id="sidebar_text_color_1" name="sidebar_text" type="radio" value="color_1"><label for="sidebar_text_color_1" class="bg-label-pattern"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_2" name="sidebar_text" type="radio" value="color_2"><label for="sidebar_text_color_2"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_3" name="sidebar_text" type="radio" value="color_3"><label for="sidebar_text_color_3"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_4" name="sidebar_text" type="radio" value="color_4"><label for="sidebar_text_color_4"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_5" name="sidebar_text" type="radio" value="color_5"><label for="sidebar_text_color_5"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_6" name="sidebar_text" type="radio" value="color_6"><label for="sidebar_text_color_6"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_7" name="sidebar_text" type="radio" value="color_7"><label for="sidebar_text_color_7"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_8" name="sidebar_text" type="radio" value="color_8"><label for="sidebar_text_color_8"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_9" name="sidebar_text" type="radio" value="color_9"><label for="sidebar_text_color_9"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_10" name="sidebar_text" type="radio" value="color_10"><label for="sidebar_text_color_10"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_11" name="sidebar_text" type="radio" value="color_11"><label for="sidebar_text_color_11"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_12" name="sidebar_text" type="radio" value="color_12"><label for="sidebar_text_color_12"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_13" name="sidebar_text" type="radio" value="color_13"><label for="sidebar_text_color_13"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_text_color_14" name="sidebar_text" type="radio" value="color_14"><label for="sidebar_text_color_14"></label></span></div></div><div class="col-sm-12"><p>Set Sidebar Image<div class="navigation-bg"><span><input class="chk-col-primary filled-in" id="sidebar_img_1" name="sidebar_img_bg" type="radio" value="images/sidebar-img/1.jpg"><label for="sidebar_img_1" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/1.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_2" name="sidebar_img_bg" type="radio" value="images/sidebar-img/2.jpg"><label for="sidebar_img_2" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/2.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_3" name="sidebar_img_bg" type="radio" value="images/sidebar-img/3.jpg"><label for="sidebar_img_3" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/3.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_4" name="sidebar_img_bg" type="radio" value="images/sidebar-img/4.jpg"><label for="sidebar_img_4" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/4.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_5" name="sidebar_img_bg" type="radio" value="images/sidebar-img/5.jpg"><label for="sidebar_img_5" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/5.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_6" name="sidebar_img_bg" type="radio" value="images/sidebar-img/6.jpg"><label for="sidebar_img_6" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/6.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_7" name="sidebar_img_bg" type="radio" value="images/sidebar-img/7.jpg"><label for="sidebar_img_7" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/7.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_8" name="sidebar_img_bg" type="radio" value="images/sidebar-img/8.jpg"><label for="sidebar_img_8" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/8.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_9" name="sidebar_img_bg" type="radio" value="images/sidebar-img/9.jpg"><label for="sidebar_img_9" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/9.jpg)"></label></span><span><input class="chk-col-primary filled-in" id="sidebar_img_10" name="sidebar_img_bg" type="radio" value="images/sidebar-img/10.jpg"><label for="sidebar_img_10" class="bg-image-sidebar" style="background-image:url(images/sidebar-img/10.jpg)"></label></span></div><span><a href="javascript:void(0)" class="btn btn-primary btn-sm remove-img">Remove Image</a></span></div></div></div></div></div><div class="note-text"><span class="text-danger">*Note :</span>This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a class="doc text-primary" href="/doc/index.html" target="_blank">documentation.</a></div></div></div>';

  if ($("#dzSwitcher").length == 0) {
    jQuery("body").append(dzSwitcher);

    $(".sidebar-right-trigger").on("click", function () {
      $(".sidebar-right").toggleClass("show");
    });
    $(".sidebar-close-trigger,.bg-overlay").on("click", function () {
      $(".sidebar-right").removeClass("show");
    });
  }
}

(function ($) {
  "use strict";
  addSwitcher();

  const body = $("body");
  const html = $("html");

  //get the DOM elements from right sidebar
  const typographySelect = $("#typography");
  const versionSelect = $("#theme_version");
  const layoutSelect = $("#theme_layout");
  const sidebarStyleSelect = $("#sidebar_style");
  const sidebarPositionSelect = $("#sidebar_position");
  const headerPositionSelect = $("#header_position");
  const containerLayoutSelect = $("#container_layout");
  const themeDirectionSelect = $("#theme_direction");

  //change the theme typography controller
  typographySelect.on("change", function () {
    body.attr("data-typography", this.value);

    setCookie("typography", this.value);
  });

  //change the theme version controller
  versionSelect.on("change", function () {
    body.attr("data-theme-version", this.value);

    if (this.value === "dark") {
      jQuery(".dz-theme-mode").addClass("active");
      jQuery(".nav-header .logo-compact").attr(
        "src",
        "images/logo-text-white.png"
      );
      jQuery(".nav-header .brand-title").attr(
        "src",
        "images/logo-text-white.png"
      );

      setCookie("logo_src", "./images/logo-white.png");
      setCookie("logo_src2", "images/logo-text-white.png");
    } else {
      jQuery(".dz-theme-mode").removeClass("active");

      jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
      jQuery(".nav-header .logo-compact").attr("src", "images/logo-text.png");
      jQuery(".nav-header .brand-title").attr("src", "images/logo-text.png");

      setCookie("logo_src", "./images/logo.png");
      setCookie("logo_src2", "images/logo-text.png");
    }

    setCookie("version", this.value);
  });

  //change the sidebar position controller
  sidebarPositionSelect.on("change", function () {
    this.value === "fixed" &&
    body.attr("data-sidebar-style") === "modern" &&
    body.attr("data-layout") === "vertical"
      ? alert("Sorry, Modern sidebar layout dosen't support fixed position!")
      : body.attr("data-sidebar-position", this.value);
    setCookie("sidebarPosition", this.value);
  });

  //change the header position controller
  headerPositionSelect.on("change", function () {
    body.attr("data-header-position", this.value);
    setCookie("headerPosition", this.value);
  });

  //change the theme direction (rtl, ltr) controller
  themeDirectionSelect.on("change", function () {
    html.attr("dir", this.value);
    html.attr("class", "");
    html.addClass(this.value);
    body.attr("direction", this.value);
    setCookie("direction", this.value);
  });

  //change the theme layout controller
  layoutSelect.on("change", function () {
    if (body.attr("data-sidebar-style") === "overlay") {
      body.attr("data-sidebar-style", "full");
      body.attr("data-layout", this.value);
      return;
    }

    body.attr("data-layout", this.value);
    setCookie("layout", this.value);
  });

  //change the container layout controller
  containerLayoutSelect.on("change", function () {
    if (this.value === "boxed") {
      if (
        body.attr("data-layout") === "vertical" &&
        body.attr("data-sidebar-style") === "full"
      ) {
        body.attr("data-sidebar-style", "overlay");
        body.attr("data-container", this.value);
        setCookie("containerLayout", this.value);

        setTimeout(function () {
          $(window).trigger("resize");
        }, 200);

        return;
      }
    }

    body.attr("data-sidebar-style", "full");
    body.attr("data-container", this.value);
    setCookie("containerLayout", this.value);
  });

  var currentURL = window.location.href;

  jQuery("#theme_direction").on("change", function () {
    if (html.attr("dir") === "rtl") {
      jQuery(".main-css").attr("href", "css/style-rtl.css");
    } else {
      jQuery(".main-css").attr("href", "css/style.css");
    }
  });

  //change the sidebar style controller
  sidebarStyleSelect.on("change", function () {
    if (body.attr("data-layout") === "horizontal") {
      if (this.value === "overlay") {
        alert("Sorry! Overlay is not possible in Horizontal layout.");
        return;
      }
    }
    if (body.attr("data-layout") === "vertical") {
      if (body.attr("data-container") === "boxed" && this.value === "full") {
        alert("Sorry! Full menu is not available in Vertical Boxed layout.");
        return;
      }
      if (
        this.value === "modern" &&
        body.attr("data-sidebar-position") === "fixed"
      ) {
        alert(
          "Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static."
        );
        return;
      }
    }
    body.attr("data-sidebar-style", this.value);

    if (body.attr("data-sidebar-style") === "icon-hover") {
      $(".deznav").hover(
        function () {
          $("#main-wrapper").addClass("iconhover-toggle");
        },
        function () {
          $("#main-wrapper").removeClass("iconhover-toggle");
        }
      );
    }
    setCookie("sidebarStyle", this.value);
  });

  //change the nav-header background controller
  $('input[name="navigation_header"]').on("click", function () {
    body.attr("data-nav-headerbg", this.value);
    $(".nav-header").removeAttr("style");
    setCookie("navheaderBg", this.value);
  });

  //change the header background controller
  $('input[name="header_bg"]').on("click", function () {
    body.attr("data-headerbg", this.value);
    setCookie("headerBg", this.value);
  });

  //change the sidebar text controller
  $('input[name="sidebar_text"]').on("click", function () {
    body.attr("data-sidebartext", this.value);
    setCookie("navTextColor", this.value);
  });

  //change the primary color controller
  $('input[name="primary_bg"]').on("click", function () {
    body.attr("data-primary", this.value);
    setCookie("primary", this.value);
  });

  //change the primary color controller
  $('input[name="sidebar_img_bg"]').on("click", function () {
    var sidebarBgImg = this.value;
    $(".deznav").css("background", "url(" + sidebarBgImg + ")");
    $(".nav-header").css("background", "url(" + sidebarBgImg + ")");
    $(".nav-header").addClass("light-logo");
    $(".nav-header").addClass("dez-bg");
    $(".deznav").addClass("dez-bg");
  });

  //change the sidebar background controller
  $('input[name="sidebar_bg"]').on("click", function () {
    body.attr("data-sidebarbg", this.value);
    $(".deznav, .nav-header").removeAttr("style");
    setCookie("sidebarBg", this.value);
    $(".deznav").removeClass("dez-bg");
  });

  $("#nav_header_color_1").on("click", function () {
    $(".nav-header").removeClass("light-logo");
  });

  //change the primary color controller
  $('input[name="sidebar_img_bg"]').on("click", function () {
    var sidebarBgImg = this.value;
    $(".deznav").css("background-image", "url(" + sidebarBgImg + ")");
    $(".nav-header").css("background-image", "url(" + sidebarBgImg + ")");
    $("body").attr("data-navigationbarimg", sidebarBgImg);
    $(".nav-header").addClass("nav-header-brand");
    $(".deznav").addClass("dz-bg");

    setCookie("navigationBarImg", this.value);
  });

  //change the theme color controller
  $('input[name="themecolor_bg"]').on("click", function () {
    body.attr("data-theme", this.value);
    setCookie("themeBg", this.value);
  });

  //remove the sidebar image
  $(".remove-img").on("click", function () {
    $(".deznav, .nav-header").removeAttr("style");
    $(".deznav, .nav-header").removeClass("dz-bg");
    $(".deznav,.nav-header").removeClass("dez-bg");
    $(".nav-header").removeClass("light-logo");

    $("body").attr("data-navigationbarimg", "");
    jQuery(".chk-col-primary").prop("checked", false);
    setCookie("navigationBarImg", "");
  });
})(jQuery);
