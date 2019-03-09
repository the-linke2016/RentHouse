<?php


$img = isset($_POST['imgs'])? $_POST['imgs'] : '';
//$imgFile = json_decode($_FILES, true);
//$myfile = fopen("file.txt", "w") or die("Unable to open file!");
//fwrite($myfile, $imgFile);
//fclose($myfile);
 
// 获取图片
list($type, $data) = explode(',', $img);
 
// 判断类型
if(strstr($type,'image/jpeg')!=''){
    $ext = '.jpg';
}elseif(strstr($type,'image/gif')!=''){
    $ext = '.gif';
}elseif(strstr($type,'image/png')!=''){
    $ext = '.png';
}
 
// 生成的文件名
$photo = "./imgCache/".time().$ext;
 
// 生成文件
file_put_contents($photo, base64_decode($data), true);
 
// 返回
header('content-type:application/json;charset=utf-8');
$res = array('img'=>$photo);
echo json_encode($res);
?>