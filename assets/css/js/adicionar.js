var ul;

setTimeout(() => {
    ul = document.getElementById("myList");
}, 500);
var li;
var itemId;
var item;
var itemValue;
addTask = function()
{
    if(document.getElementById("task").value != ""){

        item   = document.getElementById("task");

        itemId = document.querySelectorAll("#myList > li").length;
        
        li 	   = createItemEl(item.value,itemId);
        li.appendChild(createRemoveBtnTask(itemId));
        console.log(ul);
        ul.appendChild(li);
        
        item.value = "";
    }

}
removeTask = function( itemId ){

    for( i = 0 ; i < ul.children.length; i++){

        if(ul.children[i].getAttribute("index") == itemId ){

            ul.children[i].remove();

        }
    }
}
createItemEl = function(itemValue, itemId)
{
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}
createRemoveBtnTask = function()
{
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.innerHTML = " X ";
    return btn;
}