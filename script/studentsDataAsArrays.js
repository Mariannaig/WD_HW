// store students data as array of arrays:
let students = [
    ["male",24,"Ivan","Ivanov"],
    ["female",22,"Maria","Petrova"],
    ["male",18,"Georgi","Georgiev"],
    ["male",21,"Nikolai","Nikolov"]
  ];
  //////////////////// EXAMPLE ////////////////////
  // print in console the youngest student names: /
  /////////////////////////////////////////////////
  
  
  
  
  // inititalize minAge with first student age:
  let minAge = students[0][1];
  
  
  // variable to store youngest student data:
  let youngestStudent;
  
  
  let allAge=[];
  for (let i = 0; i < students.length; i++) {
    const ages = students[i][1];
  
    if (ages<minAge) {
      minAge=ages;
      youngestStudent=students[i]
          
    }
   
     
    
  }
  
  console.log(`The youngest student is ${youngestStudent[2]} ${youngestStudent[3]}. He is ${youngestStudent[1]} years old.`);
  // console.log(Math.min(...allAge)); тук установявам, че 18 е най-малката стойност и сега остава да го обрържем с името на студента
  
  
  
  
  
  
  
  