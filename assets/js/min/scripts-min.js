$(document).ready(function(){$(".caption__joined .join").click(function(i){i.preventDefault(),$(this).toggleClass("joined"),setTimeout(function(){$(".caption__joined .join").find($(".tooltip")).addClass("hid")},900)}),$(".join_wrapper .join").click(function(i){i.preventDefault(),$(this).toggleClass("joined"),setTimeout(function(){$(".join_wrapper .join").find($(".tooltip")).addClass("hid")},900)});var i=0,n=$(".like svg");n.click(function(){i++,$(".like span").text(i),$(this).css("fill","#28ccd2")})});