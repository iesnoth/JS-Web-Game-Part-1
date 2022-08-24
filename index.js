function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
//function for items
function newItem(url,left,bottom){
 let object = newImage(url,left,bottom)
object.addEventListener('dblclick', function(){
    object.remove()
})
}


//main character
newImage('assets/green-character.gif',100,100)
//pine tree to the right
newImage('assets/pine-tree.png',450,200)
//round tree to the left of the pine
newImage('assets/tree.png',200,300)
//pillar to right
newImage('assets/pillar.png',350,100)
//tiny crate
newImage('assets/crate.png',150,200)
//well
newImage('assets/well.png',500,425)


//clickable sword
newItem('assets/sword.png',500,405)
//shield
newItem('assets/sheild.png',165,185)
//staff
newItem('assets/staff.png',600,100)

//background
// function backGround(url,start,finish)
// {

// }

console.log(window.innerWidth)