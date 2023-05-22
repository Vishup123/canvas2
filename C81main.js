canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")



ctx.beginPath()
ctx.strokeStyle = "aqua"
ctx.lineWidth = 4
ctx.arc(400, 389, 50, 0, 2 * Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.lineWidth = 4
ctx.arc(550, 389, 50, 0, 2 * Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.lineWidth = 4
ctx.arc(700, 389, 50, 0, 2 * Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = 4
ctx.arc(550, 450, 50, 0, 2 * Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.lineWidth = 4
ctx.arc(450, 450, 50, 0, 2 * Math.PI)
ctx.stroke()