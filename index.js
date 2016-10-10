function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild() {
  const deepChild = document.querySelectorAll('#grand-node');
  var deepChildNode1 = deepChild[0].children;
  while(deepChildNode1.length>0){
   	deepChildNode1 = deepChildNode1[0].children;
  	if(deepChildNode1[0].children.length == 0){
  		return deepChildNode1[0]
  	}
  }
}

function increaseRankBy(n) {
  const nodesLis = document.querySelectorAll('.ranked-list');
  console.log("n " + n);
  console.log('nodesLis');
  console.log(nodesLis);
  for (var i = 0; i < nodesLis.length; i++) {
    nodesLis[i].innerHTML = (parseInt(nodesLis[i].innerHTML) + n).toString();
  }
}
