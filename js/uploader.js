var uploadCount = 0;
var uploadCustomFileList = [];
weui.uploader('#uploader', {
	url: './uploader.php',
	auto: false,
	type: 'base64',
	fileVal: 'imgs',
	compress: {
		width: 1600,
		height: 1600,
		quality: .8
	},
	onBeforeQueued: function(files) {
		// `this` 是轮询到的文件, `files` 是所有文件

		if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0) {
			weui.alert('请上传图片');
			return false; // 阻止文件添加
		}
		if(this.size > 10 * 1024 * 1024) {
			weui.alert('请上传不超过10M的图片');
			return false;
		}
		if(files.length > 5) { // 防止一下子选择过多文件
			weui.alert('最多只能上传5张图片，请重新选择');
			return false;
		}
		if(uploadCount + 1 > 5) {
			weui.alert('最多只能上传5张图片');
			return false;
		}

		++uploadCount;

		// return true; // 阻止默认行为，不插入预览图的框架
	},
	onQueued: function() {
		console.log(this);
		uploadCustomFileList.push(this);

		// console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
		// console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64

		// this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
		// this.stop(); // 中断上传

		// return true; // 阻止默认行为，不显示预览图的图像
	},
	onSuccess: function(ret) {
		console.log(this, ret);
		// return true; // 阻止默认行为，不使用默认的成功态
	},
	onError: function(err) {
		console.log(this, err);
		// return true; // 阻止默认行为，不使用默认的失败态
	}
});

// 延时函数
function sleep(n) {
	var start = new Date().getTime();
	while(true)
		if(new Date().getTime() - start > n) break;
}

// 手动上传按钮
$("#uploaderCustomBtn").on('click', function() {
	console.log(uploadCustomFileList);
//	uploadCustomFileList.forEach(function(file) {
//		file.upload();
//		// alert("上传第 " + file.id + " 张图片成功！");
//		sleep(2000);
//	});
});

// 缩略图预览
document.querySelector('#uploaderFiles').addEventListener('click', function(e) {
	var target = e.target;

	while(!target.classList.contains('weui-uploader__file') && target) {
		target = target.parentNode;
	}
	if(!target) return;

	var url = target.getAttribute('style') || '';
	var id = target.getAttribute('data-id');

	if(url) {
		url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
	}
	var gallery = weui.gallery(url, {
		onDelete: function() {
			weui.confirm('确定删除该图片？', function() {
				var index;
				for(var i = 0, len = uploadCustomFileList.length; i < len; ++i) {
					var file = uploadCustomFileList[i];
					if(file.id == id) {
						index = i;
						break;
					}
				}
				if(index !== undefined) uploadCustomFileList.splice(index, 1);

				target.remove();
				gallery.hide();
			});
		}
	});
});