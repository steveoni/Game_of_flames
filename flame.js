/**
 * @author steveoni
 * calculate the relationship between the two params
 * using the game of  flames style
 *  
 */
//HOW THE GAME WORK
//IT takes in name of different people
//then check out the common letter in both name
//and  cancel the same letter base on the number of their occurence
// {justin ,jayjay}
// 'j' is common to both, but only one 'j' will be eliminated ,since Justin has one J
// so concanate both name "ustinayjay" which sum is 10 
//count FLAMEs from f to s 10times , the 10th letter is there relationship
//there relationship is 'e'=> 'Emotion

var flames= function(boy,girl){
    //Initialized the names
    var boy = boy;
    var girl = girl;
    var joiny = boy+girl;//join the two name together
    
    //convert name to lowercase in case its written in uppercase
    //and convert to array
    var aboy = boy.toLowerCase().split('');
    var agirl = girl.toLowerCase().split('');
    var ajoin = joiny.toLowerCase().split('');
    
    //store the name in object
    var kpboy={},//store the boy
        kpgirl={},//store the girl
        kpboth={};//store the concat of both
    
    //store boy in kpboy if exist before add one to it
    for(var i in aboy){
        
        if(!(boy[i] in kpboy)){
            kpboy[aboy[i]] =1;
        }
        else{
            kpboy[aboy[i]] +=1;
        }
        
    }
    //store girl in kpgirl if exist before add one to it
    for(var i in agirl){
    
        if(!(girl[i] in kpgirl)){
            kpgirl[agirl[i]] =0
        }
        kpgirl[agirl[i]] += 1;
    }

    //store join in kpboth if exist before add one to it
    for(var i in ajoin){
    
        if(!(ajoin[i] in kpboth)){
            kpboth[ajoin[i]] = 0;
        }
        kpboth[ajoin[i]] +=1;
    }
    //loop thru kpboy and kpgirl and find their absolute difference
    //and change the property in the kpboth with the value
    for(var i in kpboy){
        if(i in kpgirl){
            kpboth[i] = Math.abs(kpboy[i] - kpgirl[i]);
        }
    }

    //calculate the sum 
    var sum = 0;
    for(var i in kpboth){
        sum += kpboth[i];
    }
    
    var D = Developerway(sum);
    var M = Matrixform(sum);

    return [D,M];

}
//use by N x 6 matrix
//it caculate the colum it is and move thru thr column to get the actual value
function Matrixform(sum){
    var flame = ['f','l','a','m','e','s'];
    var flames = {
        '1':'Friend',
        '2':'Love',
        '3':'Admire',
        '4':'Marriage',
        '5':'Emotion',
        '6':'secret Lover'
    }
    
    var length= flame.length;//set has the column of the matrix N x L
    var rlst=0;
    var col = sum/length;// get the column where the answer is
    var v = (col+'').split('.')[1];//to remove the dot
    
    //check if round off of the number after the decimal is zero
    //if yes add 1 to the column of the value
    //if the value round off to one don't add one
    if(Math.floor(new Number('.'+v)) ===0){
        col = Math.floor(col) + 1;
    
        rlst = length - ((col)*length - sum);//  {column - ([v_col*column] - value)}
    
    }
    else{
        col = Math.floor(col);
    
        rlst = length -((col)*length - sum);
    }

    return flames[rlst];
}
//Dveloper way :flip the index around
// and use the mod of 6 to get the rightful index. :)
function Developerway(sum){

    var flamey = ['secret lover','friend','love','admire','marriage','emotion']

     var rslt = sum %(flamey.length);

     return flamey[rslt];
}




