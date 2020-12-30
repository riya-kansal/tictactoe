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
     
}

var flag=0;
function printXorZero() {
    
   if(this.innerText.length==0) 
    {
        this.innerText = flag?'X':'0';
        flag=!flag;
        isGameOver();
    }
}
function isGameOver(){
    var b= document.getElementsByTagName('button');
    if(isRowSame(b[0],b[1],b[2]))
    { 
        b[0].style.backgroundColor='#2987DA';
        b[1].style.backgroundColor='#2987DA';
        b[2].style.backgroundColor='#2987DA';
        printwinner();
    }
     if(isRowSame(b[4],b[5],b[3]))
    {
        b[4].style.backgroundColor='#2987DA';
        b[5].style.backgroundColor='#2987DA';
        b[3].style.backgroundColor='#2987DA';
        printwinner();
    }
     if(isRowSame(b[6],b[7],b[8]))
    {
        b[6].style.backgroundColor='#2987DA';
        b[7].style.backgroundColor='#2987DA';
        b[8].style.backgroundColor='#2987DA';
        printwinner();
    }
    if(isRowSame(b[0],b[3],b[6]))
    {
        b[0].style.backgroundColor='#2987DA';
        b[3].style.backgroundColor='#2987DA';
        b[6].style.backgroundColor='#2987DA';
        printwinner();
    }
    if(isRowSame(b[1],b[4],b[7]))
    {
        b[1].style.backgroundColor='#2987DA';
        b[4].style.backgroundColor='#2987DA';
        b[7].style.backgroundColor='#2987DA';
        printwinner();
    }
    if(isRowSame(b[2],b[5],b[8]))
    {
        b[2].style.backgroundColor='#2987DA';
        b[5].style.backgroundColor='#2987DA';
        b[8].style.backgroundColor='#2987DA';
        printwinner();
    }
    if(isRowSame(b[0],b[4],b[8]))
    {
        b[0].style.backgroundColor='#2987DA';
        b[4].style.backgroundColor='#2987DA';
        b[8].style.backgroundColor='#2987DA';
        printwinner();
    }
    if(isRowSame(b[2],b[4],b[6]))
    {
        b[2].style.backgroundColor='#2987DA';
        b[4].style.backgroundColor='#2987DA';
        b[6].style.backgroundColor='#2987DA';
        printwinner();
    }
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
function printwinner()
{
    document.getElementById('result').innerText="!!!!.......Game Over.......!!!!  ";
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
     bindEvent();
}
