$(function() {    
    
      $.getJSON('https://dl.dropboxusercontent.com/u/4661450/data.json', function(data) {
          
          
//          SKILLS
    var skills = [];
          
        for (i = 0; i < data.length; i++) {
            
            var userSkills = data[i].skills
            
            $.each(userSkills, function(index, value) {
                
                skills.push(value)
            })

        }       
          
        $.unique(skills)
        
        skills.sort()
        
          console.log(skills)
          
        
          
//          NAMES
          

//         data.sort(function(a, b) {
//              
//              if (a.friends.length > b.friends.length) {
//                  
//                  return 1
//              }
//              
//               if (a.friends.length < b.friends.length) {
//                  
//                  return -1
//              }
//              
//              return 0
//          });
//          
//          var namesArr = []
//          
//          for (i = 0; i < data.length; i++) {
//              
//              namesArr.push(data[i].name)
//          }
//          
//          console.log(namesArr)
//          
          
          var friendsLenghtArr = [];
          
          var userNames = [];
          
          var finalNames = [];
          
          for (i = 0; i < data.length; i++) {
          
            friendsLenghtArr.push(data[i].friends.length);
              
          }
          
          console.log(friendsLenghtArr)
          
          for (i = 0; i < data.length; i++) {
          
            userNames.push(data[i].name);
              
          }
          
          console.log(userNames)
          
          var friendsLenghtArrSort = friendsLenghtArr.slice().sort()
          
         
        

          console.log(friendsLenghtArrSort)
          
          for (i = 0; i < data.length; i++) {
          
              var friendsLenghtIndex = $.inArray(friendsLenghtArr[i], friendsLenghtArrSort)

              if (finalNames[friendsLenghtIndex] != undefined) {

                   finalNames.splice(friendsLenghtIndex, 0, userNames[i])             

          }
          
          finalNames[friendsLenghtIndex] = userNames[i]
          
          
          console.log(friendsLenghtIndex)
          }
          
          var temp = []
          
          for (i of finalNames) {
              
              i && temp.push(i)
          }
          
          finalNames = temp;
          
          delete temp;
          console.log(finalNames)   
          
          var friends = []
          
          for (i = 0; i < data.length; i++) {
              
              for (j = 0; j < data[i].friends.length; j++) {
          
                friends.push(data[i].friends[j].name)
            
              }

            }
          
          $.unique(friends)
    
    console.log(friends)       
        
    });   

});