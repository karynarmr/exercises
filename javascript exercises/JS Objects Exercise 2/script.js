/* Exercise 2.1 */
var favoriteBooks = [
 {
  title: "How to win friends and influence people",
  author: "Dale Carnigie"
 },
   {
  title: "The total Money Makeover",
  author: "Dave Ramsey"
 },
    {
  title: "some vampire book",
  author: "Some tween writer"
 },
];

  /* console.table(favoriteBooks);
  /* I ran this same code using JSBin, but for some reason, every time i "ran" the code, the program dumped me into someone else's private bin. Strange.  */
    
  /* Extension 1 */
  function listifyBooksArray(booksArray){
   var htmlResultsString = "";
    var lengthOfBooksArray = booksArray.length;
  htmlResultsString += "<ul>";
  
  for (var i = 0; i < lengthOfBooksArray; i++){
    var individualBookHtmlLiElement = "<li>" + booksArray[i].title + " by " + booksArray[i].author + "</li>";
htmlResultsString += individualBookHtmlLiElement;
  }
  
  htmlResultsString += "</ul>";

return htmlResultsString;

}  
  /*console.log(listifyBooksArray(favoriteBooks));*/
/* I could not do this on my own to save my life.  this one was tough. */

  /* Extension 2 */
 /* Commenting out the console above to continue this exercise */

    function listifyBooksArray(booksArray){
   var htmlResultsString = "";
    var lengthOfBooksArray = booksArray.length;
  htmlResultsString += "<ul>";
  
  for (var i = 0; i < lengthOfBooksArray; i++){
    var individualBookHtmlLiElement = "<li>" + booksArray[i].title + " by " + booksArray[i].author + "</li>";
htmlResultsString += individualBookHtmlLiElement;
  }
  
  htmlResultsString += "</ul>";

return htmlResultsString;

}  
 console.log(listifyBooksArray(favoriteBooks));
  
 /* This extension was to reduce the lines of code by simplifying.  But I have no clue how I would go about accomplishing that.  */
