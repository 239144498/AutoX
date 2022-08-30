let img = images.read("./1.png")
let start = new Date()
// 识别图片中的文字，返回完整识别信息（兼容百度OCR格式）。
//可选语言：拉丁 "la" , 中文 "zh" ,梵文 "sa" ,日语 "ja" , 韩语 "ko"
let result = mlkit.ocr(img, "zh")
log('OCR识别耗时：' + (new Date() - start) + 'ms')
log("识别信息: " + result)
log("-------------------------------------------")
log("文本识别信息: " + result.text)
log("-------------------------------------------")
toastLog("json识别信息: " + JSON.stringify(result))
// 回收图片
img.recycle()

