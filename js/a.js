var btns =document.getElementsByClassName("nav-item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      dataId=this.getAttribute("data-id");
      if(dataId==="job")
      {
        document.getElementById("Title").innerHTML="Jobs";
          document.getElementById("candidatePage").style.display="block";
        document.getElementById("offerPage").style.display="none";
          document.getElementById("interviewPage").style.display="none";
          document.getElementById("jobPage").style.display="block";
          console.log("job"+ document.getElementById("jobPage").style.display);
      }
      if(dataId==="candidate")
      {
        document.getElementById("Title").innerHTML="Candidate";
        document.getElementById("jobPage").style.display="none";
        document.getElementById("candidatePage").style.display="block";
        document.getElementById("offerPage").style.display="none";
        document.getElementById("interviewPage").style.display="none";
          
          console.log("candidate"+ document.getElementById("candidatePage").style.display);
      }
      if(dataId==="interview")
      {
        document.getElementById("Title").innerHTML="Interview"; 
        document.getElementById("candidatePage").style.display="none";
          document.getElementById("offerPage").style.display="none";
          document.getElementById("interviewPage").style.display="block";
          document.getElementById("jobPage").style.display="none";
      }
      if(dataId==="offer")
      {
        document.getElementById("Title").innerHTML="Offer";
          document.getElementById("candidatePage").style.display="none";
          document.getElementById("offerPage").style.display="block";
          document.getElementById("interviewPage").style.display="none";
          document.getElementById("jobPage").style.display="none";
      }
      });
    }
