$(function(){
	console.log("loading---加载完成");
	//更新2019/3/6
	// #Hou-Follow
	// #Hou-form
	// 
	
	var Mou_ul = $(".Mou-ul li");
	var Mou_x = $(".Mou-x");

	var Hou_Follow =$(".Hou-Follow");
	var Hou_form = $(".Hou-form");
	var Hou_qrcode = $(".Hou-qrcode");

	var hou = [".Hou-form",".Hou-qrcode"];
	var hou_all = [".Hou-form",".Hou-qrcode",".Hou-Follow"];
	houHide(hou);
	// 回到首页
	Mou_x.bind("click",function(){
		Hou_Follow.show();
		houHide(hou);
	})
	// 导航栏点击事件
	Mou_ul.bind("click",function(res){
		var li = "."+res.target.dataset['name'];
		houShow(li,hou_all);
	});
	//  .Hou-form start
	//  去换行
	$(".sub-br").bind("click",function(){
		var v = $(".v-text").val().replace(/[\r\n]/g,"");
		$(".b-text").val(v);
	});
	//  去空格
	$(".sub-bb").bind("click",function(){
		var v = $(".v-text").val().replace(/\ +/g,"");
		$(".b-text").val(v);
	});
	//  去换行
	$(".sub-all").bind("click",function(){
		var v = ($(".v-text").val().replace(/[\r\n]/g,"")).replace(/\ +/g,"");
		$(".b-text").val(v);
	});
	// .Hou-form end
	// .Hou-qrcode strat
	$("#Qrcode").bind("click",function(){
		var w = $(".W-code").val();
		w = "http://"+w;
		console.log(w);
		$("#code").html("");
		$("#code").qrcode(w);
	})
	
	// .Hou-qrcode end

});
/**
 * @param  {[type]} hou [description]
 * @return {[type]}     [description]
 * hou[class1,class2] 隐藏数组里的类对象 
 */
function houHide(hou){
	for(var i = 0 ; i < hou.length;i++){
		$(hou[i]).hide();
	}
}
function houShow(li,hou_all){
	houHide(hou_all);
	$(li).show();
}
