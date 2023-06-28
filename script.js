function checkPlagiarism() {
    var text = document.getElementById("text-input").value;
    var resultsDiv = document.getElementById("results");
   
    var randomResult = Math.random() < 0.5 ? "Plagiarism detected!" : "No plagiarism detected.";
    
    resultsDiv.innerText = randomResult;
  }
  
