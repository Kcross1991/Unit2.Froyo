///The user is prompted for froyo flavors upon entering the website.
const userInputString = prompt(
    "Please enter flavors (Vanilla,Coffee,Strawberry)separated by commas.",
    "Vaniila,Coffee,Strawberry"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",")

  
  //A loop is used to iterate through the array of flavors.
  const counts= {}
    for (const key of stringArray) {
        counts[key] = counts[key] ? counts [key] + 1 : 1
        
    }
  
    //An object is used to keep count of how many orders there are of each flavor.
    //The program correctly counts the number of each flavor in the user's input.
    console.table(counts)





 // let Vaniila=0
 // let Strawberry=0
 // let coffee=0
 // while (stringArray) {
 //   if (stringArray == 'vanilla')
  //  {vanilla++
 //   }
//if (stringArray=='strawberry')
  //  {strawberry++
  //  }
 //  if(stringArray == 'coffee')
  //  { coffee++
  // }
 //}