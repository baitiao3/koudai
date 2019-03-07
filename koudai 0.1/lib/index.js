$(function(){
	console.log("loading---加载完成");
	// tools 工具 去换行
	$(".sub-br").bind("click",function(){
		var v = $(".v-text").val().replace(/[\r\n]/g,"");
		$(".b-text").val(v);
	});
	// tools 工具 去空格
	$(".sub-bb").bind("click",function(){
		var v = $(".v-text").val().replace(/\ +/g,"");
		$(".b-text").val(v);
	});
	// tools 工具 去换行
	$(".sub-all").bind("click",function(){
		var v = ($(".v-text").val().replace(/[\r\n]/g,"")).replace(/\ +/g,"");

		$(".b-text").val(v);
	});
});

