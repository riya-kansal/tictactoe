window.addEventListener('load', bindEvent);
function bindEvent()
{   
    var buttons= document.getElementsByTagName('button');
    for(let button of buttons){
        
            button.addEventListener('click',printXorZero);
     }
     var re= document.getElementById('restart');
     re.removeEventListener('click',printXorZero);
     re.addEventListener('click',restart);

     document.getElementById('x1').addEventListener('click',check);
     document.getElementById('o1').addEventListener('click',check);
     document.getElementById('x2').addEventListener('click',check);
     document.getElementById('o2').addEventListener('click',check);
}
var pl1='x',pl2='o';
function check()
{
   var a= document.getElementById('x1');
    var b= document.getElementById('o1');
    var c= document.getElementById('x2');
    var d= document.getElementById('o2');
    //console.log(this.value);
    if(this.value=='x1')
    {
        //console.log(this.value);
        b.checked=false;
        d.checked=true;
        c.checked=false;
        pl1='x';
        pl2='o';

    }
    else if(this.value=='x2')
    {
        //console.log(this.value);
        a.checked=false;
        b.checked=true;
        d.checked=false;
        pl2='x';
        pl1='o';

    }
    else if(this.value=='o1')
    {
        //console.log(this.value);
        c.checked=true;
        a.checked=false;
        
        d.checked=false;
        pl2='x';
        pl1='o';
    }
    else if(this.value=='o2')
    {
        a.checked=true;
        b.checked=false;
        d.checked=true;
        c.checked=false;
        pl1='x';
        pl2='o';
    }
}

var flag=1;



function printXorZero() {
    var p1=document.getElementById('p1');
    var p2=document.getElementById('p2');
    
    if(isemptyname(p1)||isemptyname(p2))
    {
            if(isemptyname(p1))
        {
            alert("Enter name of Player1");
            //console.log(p1);
            bindEvent();
            
        }
        else if(isemptyname(p2))
        {
            alert("Enter name of Player2");
            //console.log(p2);
            bindEvent();
            
        }
       
    }
  else  
  {
   if(this.innerText.length==0) 
    {

        this.innerText = flag?pl1:pl2;
        flag=!flag;
        isGameOver();
    }
}
}
function isGameOver(){
    var b= document.getElementsByTagName('button');
    if(isRowSame(b[0],b[1],b[2]))
    { 
        b[0].style.backgroundColor='#2987DA';
        b[1].style.backgroundColor='#2987DA';
        b[2].style.backgroundColor='#2987DA';
        printwinner(b[0]);
    }
     if(isRowSame(b[4],b[5],b[3]))
    {
        b[4].style.backgroundColor='#2987DA';
        b[5].style.backgroundColor='#2987DA';
        b[3].style.backgroundColor='#2987DA';
        printwinner(b[4]);
    }
     if(isRowSame(b[6],b[7],b[8]))
    {
        b[6].style.backgroundColor='#2987DA';
        b[7].style.backgroundColor='#2987DA';
        b[8].style.backgroundColor='#2987DA';
        printwinner(b[6]);
    }
    if(isRowSame(b[0],b[3],b[6]))
    {
        b[0].style.backgroundColor='#2987DA';
        b[3].style.backgroundColor='#2987DA';
        b[6].style.backgroundColor='#2987DA';
        printwinner(b[6]);
    }
    if(isRowSame(b[1],b[4],b[7]))
    {
        b[1].style.backgroundColor='#2987DA';
        b[4].style.backgroundColor='#2987DA';
        b[7].style.backgroundColor='#2987DA';
        printwinner(b[7]);
    }
    if(isRowSame(b[2],b[5],b[8]))
    {
        b[2].style.backgroundColor='#2987DA';
        b[5].style.backgroundColor='#2987DA';
        b[8].style.backgroundColor='#2987DA';
        printwinner(b[8]);
    }
    if(isRowSame(b[0],b[4],b[8]))
    {
        b[0].style.backgroundColor='#2987DA';
        b[4].style.backgroundColor='#2987DA';
        b[8].style.backgroundColor='#2987DA';
        printwinner(b[8]);
    }
    if(isRowSame(b[2],b[4],b[6]))
    {
        b[2].style.backgroundColor='#2987DA';
        b[4].style.backgroundColor='#2987DA';
        b[6].style.backgroundColor='#2987DA';
        printwinner(b[2]);
    }
}
function isemptyname(a)
{
    if(a.value.length==0)
    {
        //console.log(a.value);
        return true;
    };
}
function isRowSame(a,b,c)
{
    if(isNotEmpty(a,b,c))
    {
            if(isCompare(a,b,c))
            {
                return true;
            }
            //return false;
    }
    //return false;

}
function isNotEmpty(a,b,c)
{
    if(a.innerText.length>0&&b.innerText.length>0&&c.innerText.length>0)
    {
        return true;
    }
    return false;
}
function isCompare(a,b,c)
{
        if(a.innerText==b.innerText&&b.innerText==c.innerText)
        { return true;
        }
        return false;
}
function printwinner(a)
{
    //console.log(a.value);
    document.getElementById('result').innerText="!!!!.......Game Over.......!!!!  ";
    var x=document.getElementById('p1').value;
    var y=document.getElementById('p2').value;

    if(pl1==a.innerText)
    {
      var msg=x+'is winner';
      //console.log()
       document.getElementById('winner').innerText=msg;
    }
    else
{
    var msg=x+'  is winner';
        document.getElementById('winner').innerText=msg;

}
    var buttons= document.getElementsByTagName('button');
    for(let button of buttons){
        
            button.removeEventListener('click',printXorZero);
     }
     
}
function restart()
{
    var buttons= document.getElementsByTagName('button');
    for(let i=0;i<9;i++)
    {
        
            buttons[i].innerText='';
            buttons[i].style.backgroundColor='white';
     }
     document.getElementById('result').innerText='';
     document.getElementById('winner').innerText='';
     flag=!flag;
     bindEvent();
}
