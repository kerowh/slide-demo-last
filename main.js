let $buttons = $('#buttonWrapper>li')
let $slides = $('#slides')
let current =0
makeFaker()

$slides.css({transform:'translateX(-920px)'})

BindEvents()

   let timer = setInterval(function(){
   	goTOindex(current+1)
   },2000)


$('.container').on('mouseenter',function(){
	window.clearInterval(timer)
})


$('.container').on('mouseleave',function(){
	timer = setInterval(function(){
	   	goTOindex(current+1)
	   },2000)
})











function BindEvents(){
	$('#buttonWrapper').on('click', 'li', function(event) {
	console.log(current)
	let $button = $(event.currentTarget)
	let index = $button.index()
	goTOindex(index)
	});
}

function makeFaker(){
	let $images = $slides.children('img')
	// console.log($images)
	let $firstCopy = $images.eq(0).clone(true)
	// console.log($firstCopy[0].outerHTML)
	// outerHTML的作用是this当成整体打印出来
	let $lastCopy = $images.eq($images.length-1).clone(true)
	// console.log($lastCopy[0].outerHTML)
	$slides.append($firstCopy)
	$slides.prepend($lastCopy)
}
// let $images = $slides.children('img')
// // console.log($images)
// let $firstCopy = $images.eq(0).clone(true)
// // console.log($firstCopy[0].outerHTML)
// // outerHTML的作用是this当成整体打印出来
// let $lastCopy = $images.eq($images.length-1).clone(true)
// // console.log($lastCopy[0].outerHTML)


// $slides.append($firstCopy)
// $slides.prepend($lastCopy)




function goTOindex(index){

	if (index > $buttons.length-1) {
		index = 0
		console.log('dao zui hou l')
		console.log(index)
	}

	if (current === $buttons.length-1 && index ===0 ){
		console.log('最后到最前')
 		$slides.css({transform:`translateX(-${($buttons.length+1)*920}px)`})
 				.one('transitionend',function(){
 					$slides.hide()
 						.offset()
 					$slides.css({transform:'translateX(-920px)'})
 						.show()
 				})
	}else if(current === 0 && index ===$buttons.length-1){
		console.log('最前到最后')
 		$slides.css({transform:`translateX(0px)`})
 				.one('transitionend',function(){
 					$slides.hide()
 						.offset()
 					$slides.css({transform:`translateX(-${($buttons.length)*920}px)`})
 						.show()
 				})
	}else{
		$slides.css({transform:`translateX(${-(index+1)*920}px)`})
		
	}
	current = index
}
// $button.eq(0).on('click',function(){
// 	// 记录上一次是从哪里过来的
// 	console.log(current)

// 	if (current === 3 ) {
// 		console.log('最后到最前')
// 		$slides.css({transform:'translateX(-4600px)'})
// 				.one('transitionend',function(){
// 					$slides.hide()
// 						.offset()
// 					$slides.css({transform:'translateX(-920px)'})
// 						.show()
// 				})
// 				//.hide()这里如果不加，那么上面这一步的动画过程会显示出来
// 				//为了解决这个我们先把slide隐藏，再进行动画设计
// 				//这样用户就看不到这个过程了
// 				//完成之后再显示（show）出来
// 				//这里有个问题
// 				//show 和 hide 可能会同时作用 所以这里出了问题
// 				//这时要使用.offset()，这个是记住的，相当于切断过程
// 				//使show 和 hide 不同时作用
// 	}else{
// 		$slides.css({transform:'translateX(-920px)'})
// 		current = 0
// 	}
	
// 	//当前位置
// })

// $button.eq(1).on('click',function(){
// 	console.log(current)
// 	$slides.css({transform:'translateX(-1840px)'})
// 	current = 1
// })

// $button.eq(2).on('click',function(){
// 	console.log(current)
// 	$slides.css({transform:'translateX(-2760px)'})
// 	current = 2
// })

// $button.eq(3).on('click',function(){
// 	console.log(current)
// 	if (current === 3 ) {
// 		console.log('最后到最前')
// 		$slides.css({transform:'translateX(0px)'})
// 				.one('transitionend',function(){
// 					$slides.hide()
// 						.offset()
// 					$slides.css({transform:'translateX(-3680px)'})
// 						.show()
// 				})
// 	}else{
// 		$slides.css({transform:'translateX(-3680px)'})
// 		current = 3
// 	}
// })