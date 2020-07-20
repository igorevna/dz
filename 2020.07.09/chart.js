const Piechart = function(options) {
    let maxValue = 0;
for (var year in chartData) {
    for (var name in chartData[year]) {
        if (chartData[year]['React JS'] > maxValue) {
            maxValue = chartData[year]['React JS'];
        }
    }
}
this.getCanvasWidth = function(ctx) {
    let maxText = ""
    for(let item in this.options.data) {
        if(item.length > maxText.length) maxText = item
    }
    ctx.font = '16px Arial'
    return this.options.width + Math.ceil(ctx.measureText(maxText).width) + 40
}
this.options = options
    this.canvas = document.createElement('canvas')
    document.getElementById(options.elementId).appendChild(this.canvas)
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = this.getCanvasWidth(this.ctx)
    this.canvas.height = options.height
    this.colors = options.colors
    this.background = options.background

    this.ctx.fillStyle = this.background
    this.ctx.beginPath()
    this.ctx.fillRect(0, 0, options.width * 1.75, options.height)
    this.ctx.beginPath()
this.ctx.beginPath(); 
this.ctx.moveTo(950,450); 
this.ctx.lineTo(50,450); 
this.ctx.stroke(); 

this.ctx.beginPath(); 
this.ctx.moveTo(50, 50); 
this.ctx.lineTo(50, 450); 
this.ctx.stroke(); 


    
//alert(maxValue)
this.draw = function(){
    var index = 0;
    var colorIndex = 0;
    let procent = maxValue/100;
    for (var year in chartData) {
        for (var name in chartData[year]) {
            let heightProcent = chartData[year][name]/procent;
            
            this.ctx.fillStyle = this.background
            this.ctx.beginPath()
            this.ctx.fillStyle = this.colors[colorIndex];
            this.ctx.fillRect(80+index*100, 450, 25, -350/100*heightProcent)
            this.drawText(this.ctx, name,  92+index*100, 450-350/100*heightProcent-10, this.colors[colorIndex], 7);
            if(index % 3 == 0) {
                this.drawText(this.ctx, year,  190+index*100, 480, this.colors[colorIndex], 12);
            }
            index++;
        }
        colorIndex ++;
        if (colorIndex > 3) colorIndex = 0;
    }

    let xValueMax = Math.ceil(maxValue/10000)*10000;
    let step = xValueMax/5;
    for (let c = 5;c>=0;c--) {
        let val = xValueMax-step*c;
        this.drawText(this.ctx, val, 30, 450-(350/100*(100-20*c)), '#000', 12);
        
  
  
    }

    }
    this.drawText = function(ctx, value,  x, y, fontsize) {
        ctx.fillStyle = '#000'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.font = fontsize+'px Arial'
        
        
      
      
        let text =value
        ctx.fillText(text, x, y)
    }
    this.getTextColor = function(bg) {
        let str = bg.substring(1)
        let r="", g="", b=""
        if(str.length === 3) {
            r += str.substring(0,1) + str.substring(0,1)
            g += str.substring(1,2) + str.substring(1,2)
            b += str.substring(2) + str.substring(2)
        }
        if(str.length === 6) {
            r += str.substring(0,2)
            g += str.substring(2,4)
            b += str.substring(4)
        }
        let summ = parseInt('0x'+r) + parseInt('0x'+g) + parseInt('0x'+b)

        if(summ / 765 <= 2/3  &&  parseInt('0x'+g) < 220) {
            return '#fff'
        }

        return '#000'
        
    }
}