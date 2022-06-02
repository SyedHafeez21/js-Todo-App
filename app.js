function addItem(){

    var val = document.getElementById("item");
  
    var trVar = document.createElement('tr');
    var tHVar = document.createElement('th');
    var editVar = document.createElement("td");
    var deleteVar = document.createElement("td");
  
    var editBtn = document.createElement('button');
    var deleteBtn = document.createElement('button');
  
    editBtn.setAttribute("class","editBtn")
    deleteBtn.setAttribute("class","delBtn");
  
    editBtn.setAttribute("onclick","editItem(this)");
    deleteBtn.setAttribute("onclick","delItem(this)");
  
    var itemVal = document.createTextNode(val.value)
    var editBtnTxt = document.createTextNode("Edit");
    var deleteBtnTxt = document.createTextNode("Delete");
  
    editBtn.appendChild(editBtnTxt);
    deleteBtn.appendChild(deleteBtnTxt);
    
    tHVar.appendChild(itemVal)
  editVar.appendChild(editBtn)
  deleteVar.appendChild(deleteBtn);
  
  
  trVar.appendChild(tHVar)
  trVar.appendChild(editVar)
  trVar.appendChild(deleteVar);
  
  
  tHVar.setAttribute("class","firstTd");
  editVar.setAttribute("class","secondTd");
  deleteVar.setAttribute("class","thirdTd")
  
  var tbVar = document.getElementById("table")
  tbVar.appendChild(trVar)
  val.value = ""
  }
  
  function deleteAll(){
      var tbData = document.getElementById('table');
      tbData.innerHTML= "";
  }
  
  
  
  function delItem(e){
  e.parentNode.parentNode.remove();
  }