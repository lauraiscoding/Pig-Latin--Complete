$("button").click(function(){
    let words = $("input").val();
    
let midway = words.charAt(0);
  let vowels =['a','e','i','o','u'];
   if (vowels.includes(midway)){
      
       $(".answer").append(words+"ay");
   } else{
     let lword = words.slice(1) ;
      $(".answer").append(lword+words[0] +"ay");
   }
});