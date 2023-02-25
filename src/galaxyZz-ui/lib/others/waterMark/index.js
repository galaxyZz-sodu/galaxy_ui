export default async function waterMark(el, binding) {
    function srcToImg(src) {
        return new Promise((res, rej) => {
            let img = new Image();
            // img.crossOrigin="";
            img.addEventListener('load', () => res(img))
            img.src = src;
            // img.width = 200;
            // img.height = 100;
            // img.objectFit = 'cover'
        })
        
    };

    function imgToCanvas(img) {
        // img.onload = () => {
            let canvas = document.createElement('canvas')
            canvas.width = img.width;
            canvas.height = img.height;
            let cans = canvas.getContext('2d');
            cans.drawImage(img, 0, 0);
            return canvas
            // ca =  canvas
        // }
    };

    function mark(canvas, text = '默认水印', textColor = '#ccc') {
        return new Promise((res, rej) => {
            let ctx = canvas.getContext('2d');
            // 设置填充字号和字体，样式
            ctx.font = "12px 微软雅黑"
            ctx.rotate(-Math.PI/18)
            ctx.fillStyle = textColor
            // 设置右对齐
            ctx.textAlign = 'right'
            // 在指定位置绘制文字，这里指定距离右下角20坐标的地方
            for (let i = -canvas.height / 3; i <= canvas.width * 4 / 3; i += 80) {
                for (let j = -canvas.height / 3; j <= canvas.height * 4 / 3; j += 40) {
                    ctx.fillText(text, i, j);
                }
            }
            res(canvas)
        })
        
    };

            console.log(binding.value.textColor);
          let img = await srcToImg(binding.value.imgUrl)
          console.log(img.width)
          let canvas = imgToCanvas(img)
          let markCan = await mark(canvas, binding.value.text, binding.value.textColor);
          el.appendChild(markCan)
}

