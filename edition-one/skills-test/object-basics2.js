let bandInfo = `My best band is + this.name + from + this.nationality +'.'
  It sings + this.genre + songs + '.' It has + this.members + members + and was formed
  in + this.formed ' + and  any news on it splitting is + this.split + '.'
  The albums produced are: + this.albums '.'`

// Put your code here

const band = {
   name : 'Hillsong United',
   nationality : 'Australia',
   genre : 'Worship',
   members : 35,
   formed : 1998,
   split : false,
   albums : [
     Sixth : {
        name : 'More Than Life',
        released : 2004
},
     Tenth : {
        name : 'Look To You',
        released : 2005
},
     Five : {
        name : 'Mighty To Save',
        released : 2006
},

     Third : {
        name : 'Aftermath',
        released : 2009
}

],
}

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
