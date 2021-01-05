     
     //Next Week days name 
     let preweekAR = [];

     var next = new Date();
     for (let i = 0; i <7; i++) {

     next.setDate(next.getDate() + (1 + 7+i - next.getDay()) % 7);
     NextweekAR.push(next.toUTCString().slice(0,10))
   }
   console.log(NextweekAR);
   
   
   //Current Week days name
      
      let curweek = [];

      var curr = new Date; // get current date
      for (let i = 1; i <= 7; i++) {
      var today = curr.getDate() - curr.getDay() + i;
      var tday = new Date(curr.setDate(today)).toUTCString().slice(0, 10);
      curweek.push(tday)
      }
    
  console.log(curweek);
