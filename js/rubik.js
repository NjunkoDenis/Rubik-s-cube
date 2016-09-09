var front = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var left = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
var right = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];
var back = [[3, 3, 3], [3, 3, 3], [3, 3, 3]];
var up = [[4, 4, 4], [4, 4, 4], [4, 4, 4]];
var down = [[5, 5, 5], [5, 5, 5], [5, 5, 5]];

showFront();

function showFront(){
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			
			if(front[i][j] == 0) document.getElementById(i + "" + j).style.background = "red";
			if(front[i][j] == 1) document.getElementById(i + "" + j).style.background = "yellow";
			if(front[i][j] == 2) document.getElementById(i + "" + j).style.background = "white";
			if(front[i][j] == 3) document.getElementById(i + "" + j).style.background = "orange";
			if(front[i][j] == 4) document.getElementById(i + "" + j).style.background = "green";
			if(front[i][j] == 5) document.getElementById(i + "" + j).style.background = "blue";
		}
	}
}

function rotateLeft(){
	
	var bufferFront = front;
	var bufferLeft = left;
	var bufferRight = right;
	var bufferBack = back;
	
	//front->left -- left->back -- back->right -- right-> front
	
	left = bufferFront;
	back = bufferLeft;
	right = bufferBack;
	front = bufferRight;
	
	showFront();
}

function rotateRight(){
	
	var bufferFront = front;
	var bufferLeft = left;
	var bufferRight = right;
	var bufferBack = back;
	
	//front<-left -- left<-back -- back<-right -- right<-front
	
	right = bufferFront;
	back = bufferRight;
	left = bufferBack;
	front = bufferLeft;
	
	showFront();
	
}

function rotateUp(){
	
	var bufferUp = up;
	var bufferFront = front;
	var bufferDown = down;
	var bufferBack = back;
	
	//front->up -- up->back -- back->down -- down->front
	
	up = bufferFront;
	back = bufferUp;
	down = bufferBack;
	front = bufferDown;
	
	showFront();
}

function rotateDown(){
	
	var bufferUp = up;
	var bufferFront = front;
	var bufferDown = down;
	var bufferBack = back;
	
	//front<-up -- up<-back -- back<-down -- down<-front
	
	
	front = bufferUp;
	down = bufferFront;
	back = bufferDown;
	up = bufferBack;

	showFront();
	
}

function rotateColumnUp(x){
	var bufferColumnUp = [[up[0][x]], [up[1][x]], [up[2][x]]];
	var bufferColumnFront = [[front[0][x]], [front[1][x]], [front[2][x]]];
	var bufferColumnDown = [[down[0][x]], [down[1][x]], [down[2][x]]];
	var bufferColumnBack = [[back[0][x]], [back[1][x]], [back[2][x]]];
	
	//front->up -- up->back -- back->down -- down->front
	
	for(i = 0; i < 3; i++){
		up[i][x] = bufferColumnFront[i][0];
		back[i][x] = bufferColumnUp[i][0];
		down[i][x] = bufferColumnBack[i][0];
		front[i][x] = bufferColumnDown[i][0];
	}
	
	showFront();
	
}

function rotateColumnDown(x){
	var bufferColumnUp = [[up[0][x]], [up[1][x]], [up[2][x]]];
	var bufferColumnFront = [[front[0][x]], [front[1][x]], [front[2][x]]];
	var bufferColumnDown = [[down[0][x]], [down[1][x]], [down[2][x]]];
	var bufferColumnBack = [[back[0][x]], [back[1][x]], [back[2][x]]];
	
	//front->up -- up->back -- back->down -- down->front
	
	for(i = 0; i < 3; i++){
		front[i][x] = bufferColumnUp[i][0];
		down[i][x] = bufferColumnFront[i][0];
		back[i][x] = bufferColumnDown[i][0];
		up[i][x] = bufferColumnBack[i][0];
	}
	
	showFront();
	
}

function rotateRowLeft(x){
	
	var bufferRowFront = [[up[0][x]], [up[1][x]], [up[2][x]]];
	var bufferRowLeft = [[front[0][x]], [front[1][x]], [front[2][x]]];
	var bufferRowRight = [[down[0][x]], [down[1][x]], [down[2][x]]];
	var bufferColumnBack = [[back[0][x]], [back[1][x]], [back[2][x]]];
	
	//front->up -- up->back -- back->down -- down->front
	
	for(i = 0; i < 3; i++){
		up[i][x] = bufferColumnFront[i][0];
		back[i][x] = bufferColumnUp[i][0];
		down[i][x] = bufferColumnBack[i][0];
		front[i][x] = bufferColumnDown[i][0];
	}
	
	showFront();
	
}

function rotateRowRight(x){
	
	var bufferColumnUp = [[up[0][x]], [up[1][x]], [up[2][x]]];
	var bufferColumnFront = [[front[0][x]], [front[1][x]], [front[2][x]]];
	var bufferColumnDown = [[down[0][x]], [down[1][x]], [down[2][x]]];
	var bufferColumnBack = [[back[0][x]], [back[1][x]], [back[2][x]]];
	
	//front->up -- up->back -- back->down -- down->front
	
	for(i = 0; i < 3; i++){
		up[i][x] = bufferColumnFront[i][0];
		back[i][x] = bufferColumnUp[i][0];
		down[i][x] = bufferColumnBack[i][0];
		front[i][x] = bufferColumnDown[i][0];
	}
	
	showFront();
	
}

	
	