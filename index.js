
var time_start = [];
var time_end = [];
var time_shift = document.getElementById("time_shift").value;

  document.getElementById('fileInput').addEventListener('change', function (event) {
    const files = event.target.files;
    let logs = [];

      
    // Initialize an instance of the `FileReader`
    const reader = new FileReader();
    
    // Specify the handler for the `load` event
    reader.onload = function (e) {
      // Do something with the file
      // E.g. Send it to the cloud
      data = e.target.result;
      console.log(data);   

      
      for(var i=0; i <= data.length; i++){

            if(data[i] == '-' && data[i+1] == '-' && data[i+2] == '>'){

              time_start.push(data[i-13]);
              time_start.push(data[i-12]);
              time_start.push(data[i-11]);
              time_start.push(data[i-10]);
              time_start.push(data[i-9]);
              time_start.push(data[i-8]);
              time_start.push(data[i-7]);
              time_start.push(data[i-6]);
              time_start.push(data[i-5]);
              time_start.push(data[i-4]);
              time_start.push(data[i-3]);
              time_start.push(data[i-2]);
              time_start.push(data[i-1]);


              time_end.push(data[i+4]);
              time_end.push(data[i+5]);
              time_end.push(data[i+6]);
              time_end.push(data[i+7]);
              time_end.push(data[i+8]);
              time_end.push(data[i+9]);
              time_end.push(data[i+10]);
              time_end.push(data[i+11]);
              time_end.push(data[i+12]);
              time_end.push(data[i+13]);
              time_end.push(data[i+14]);
              time_end.push(data[i+15]);
              time_end.push(data[i+16]);            
              
            }          
      }      
    }
    
    // Read the file
    reader.readAsText(files[0]);



    document.getElementById('logs').innerHTML = files[0].name;
  }, false);





function onClick(){


  console.log(time_start.length/13);


  for(var g = 0; g <= time_start.length; g=g+13){


  console.log(g);


  


  var min1 = time_start[g+3].toString();
  var min2 = time_start[g+4].toString();

  var min = min1 + min2;

  var minInt = parseInt(min, 10);




  var sec1 = time_start[g+6].toString();
  var sec2 = time_start[g+7].toString();

  var sec = sec1 + sec2;

  var secInt = parseInt(sec, 10);

 


  var mil1 = time_start[g+9].toString();
  var mil2 = time_start[g+10].toString();
  var mil3 = time_start[g+11].toString();

  var mil = mil1 + mil2 + mil3;

  var milInt = parseInt(mil, 10);


    

  var hour1 = time_start[g+0].toString();
  var hour2 = time_start[g+1].toString();

  var hour = hour1 + hour2;  
 
  var hourInt = parseInt(hour, 10);



  // End time of subtitle 


  var min1End = time_end[g+3].toString();
  var min2End = time_end[g+4].toString();

  var minEnd = min1 + min2;

  var minIntEnd = parseInt(minEnd, 10);




  var sec1End = time_end[g+6].toString();
  var sec2End = time_end[g+7].toString();

  var secEnd = sec1End + sec2End;

  var secIntEnd = parseInt(secEnd, 10);

 


  var mil1End = time_end[g+9].toString();
  var mil2End = time_end[g+10].toString();
  var mil3End = time_end[g+11].toString();

  var milEnd = mil1End + mil2End + mil3End;

  var milIntEnd = parseInt(milEnd, 10);


    

  var hour1End = time_end[g+0].toString();
  var hour2End = time_end[g+1].toString();

  var hourEnd = hour1End + hour2End;  
 
  var hourIntEnd = parseInt(hourEnd, 10);

  var dt = new Date(2019, 0, 1, hourInt + 1, minInt, secInt, milInt);
  var dtEnd = new Date(2019, 0, 1, hourIntEnd + 1, minIntEnd, secIntEnd, milIntEnd);

  console.log(dt);

  var secOfShift = Math.floor(Math.abs(time_shift));
  console.log(secOfShift);
    
  var miliOfShift = Math.floor(Math.abs(time_shift) % 1 * 1000);
  console.log(miliOfShift);





  if(time_shift[0] == '-'){

    dt.setSeconds(dt.getSeconds() - secOfShift);
    dt.setMilliseconds(dt.getMilliseconds() - miliOfShift);


    dtEnd.setSeconds(dtEnd.getSeconds() - secOfShift);
    dtEnd.setMilliseconds(dtEnd.getMilliseconds() - miliOfShift);

    var h;

    if ((dt.getHours()-1)/100 == 0){

      h = '00';
      console.log(h);
    }
    else{

      h = ((dt.getHours()-1)/100).toString();
      h1 = h[2];
      h2 = h[3];

      h = h[2].toString() + h[3].toString();
      console.log(h);

    }

    // ...  upisujemo u time_start i tako dalje. .. 

    time_start[g+0] = h[0];
    time_start[g+1] = h[1];

    var m;

    if((dt.getMinutes()/100)==0){

      m = '00';
      console.log(m);
    }

    else{

      m = (dt.getMinutes()/100).toString();

      console.log(m);
      m1 = m[2];
      m2 = m[3];

     
   

      m = m[2].toString() + m[3].toString();
      

    }

    time_start[g+3] = m[0];
    time_start[g+4] = m[1];

    var s;

    if((dt.getSeconds()/100)==0){

      s = '00';
      console.log(s);
    }

    else{

      s = (dt.getSeconds()/100).toString();
           
      console.log(s);
      s1 = m[2];
      s1 = m[3];

    }

    time_start[g+6] = s[2];
    time_start[g+7] = s[3];




    var m;

    if((dt.getMilliseconds()/100)==0){

      m = '000';
      console.log(m);
    }

    else{

      m = (dt.getMilliseconds()/1000).toString();
      console.log(m);
     
    }

    time_start[g+9] = m[2];
    time_start[g+10] = m[3];
    time_start[g+11] = m[4];

    console.log(time_start);




    //              Vridjeme zavrsetka titla


    var h;

    if ((dtEnd.getHours()-1)/100 == 0){

      h = '00';
      console.log(h);
    }
    else{

      h = ((dtEnd.getHours()-1)/100).toString();
      h1 = h[2];
      h2 = h[3];

      h = h[2].toString() + h[3].toString();
      console.log(h);

    }

    // ...  upisujemo u time_start i tako dalje. .. 

    time_end[g+0] = h[0];
    time_end[g+1] = h[1];

    var m;

    if((dtEnd.getMinutes()/100)==0){

      m = '00';
      console.log(m);
    }

    else{

      m = (dtEnd.getMinutes()/100).toString();
      m1 = m[2];
      m2 = m[3];

      m = m[2].toString() + m[3].toString();
      console.log(m);

    }

    time_end[g+3] = m[0];
    time_end[g+4] = m[1];

    var s;

    if((dtEnd.getSeconds()/100)==0){

      s = '00';
      console.log(s);
    }

    else{

      s = (dtEnd.getSeconds()/100).toString();
           
      console.log(s);
      s1 = m[2];
      s1 = m[3];

    }

    time_end[g+6] = s[2];
    time_end[g+7] = s[3];




    var m;

    if((dtEnd.getMilliseconds()/100)==0){

      m = '000';
      console.log(m);
    }

    else{

      m = (dtEnd.getMilliseconds()/1000).toString();
      console.log(m);
     
    }

    time_end[g+9] = m[2];
    time_end[g+10] = m[3];
    time_end[g+11] = m[4];

    console.log(time_start);




    




    

  }
  
  else {

    dt.setSeconds(dt.getSeconds() + secOfShift);   
    dt.setMilliseconds(dt.getMilliseconds() + miliOfShift);

    dtEnd.setSeconds(dtEnd.getSeconds() + secOfShift);
    dtEnd.setMilliseconds(dtEnd.getMilliseconds() + miliOfShift);

    console.log(dt);
    console.log(dtEnd);



    var h;

    if ((dt.getHours()-1)/100 == 0){

      h = '00';
      console.log(h);
    }
    else{

      h = ((dt.getHours()-1)/100).toString();
      h1 = h[2];
      h2 = h[3];

      h = h[2].toString() + h[3].toString();
      console.log(h);

    }

    // ...  upisujemo u time_start i tako dalje. .. 

    time_start[0] = h[0];
    time_start[1] = h[1];

    var m;

    if((dt.getMinutes()/100)==0){

      m = '00';
      console.log(m);
    }

    else{

      m = (dt.getMinutes()/100).toString();
      m1 = m[2];
      m2 = m[3];

      m = m[2].toString() + m[3].toString();
      console.log(m);

    }

    time_start[3] = m[0];
    time_start[4] = m[1];

    var s;

    if((dt.getSeconds()/100)==0){

      s = '00';
      console.log(s);
    }

    else{

      s = (dt.getSeconds()/100).toString();
           
      console.log(s);
      s1 = m[2];
      s1 = m[3];

    }

    time_start[6] = s[2];
    time_start[7] = s[3];




    var m;

    if((dt.getMilliseconds()/100)==0){

      m = '000';
      console.log(m);
    }

    else{

      m = (dt.getMilliseconds()/1000).toString();
      console.log(m);
     
    }

    time_start[9] = m[2];
    time_start[10] = m[3];
    time_start[11] = m[4];

    console.log(time_start);




    //              Vridjeme zavrsetka titla


    var h;

    if ((dtEnd.getHours()-1)/100 == 0){

      h = '00';
      console.log(h);
    }
    else{

      h = ((dtEnd.getHours()-1)/100).toString();
      h1 = h[2];
      h2 = h[3];

      h = h[2].toString() + h[3].toString();
      console.log(h);

    }

    // ...  upisujemo u time_start i tako dalje. .. 

    time_end[0] = h[0];
    time_end[1] = h[1];

    var m;

    if((dtEnd.getMinutes()/100)==0){

      m = '00';
      console.log(m);
    }

    else{

      m = (dtEnd.getMinutes()/100).toString();
      m1 = m[2];
      m2 = m[3];

      m = m[2].toString() + m[3].toString();
      console.log(m);

    }

    time_end[3] = m[0];
    time_end[4] = m[1];

    var s;

    if((dtEnd.getSeconds()/100)==0){

      s = '00';
      console.log(s);
    }

    else{

      s = (dtEnd.getSeconds()/100).toString();
           
      console.log(s);
      s1 = m[2];
      s1 = m[3];

    }

    time_end[6] = s[2];
    time_end[7] = s[3];




    var m;

    if((dtEnd.getMilliseconds()/100)==0){

      m = '000';
      console.log(m);
    }

    else{

      m = (dtEnd.getMilliseconds()/1000).toString();
      console.log(m);
     
    }

    time_end[9] = m[2];
    time_end[10] = m[3];
    time_end[11] = m[4];

    console.log(time_start);
  
  
  
  
  
  }   // ovo je za for





   


    
    




  }
  
    console.log("Start");
    console.log(time_start);

    console.log("Kraj");
    console.log(time_end);

}







