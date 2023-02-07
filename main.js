// Function to highlight first visualization in blue
let ind1 = 0;
    function changeStyleVis1(){
      const colors1 = ['lightblue', 'white'];
        var element = document.getElementById("visualization1");
        element.style.backgroundColor = colors1[ind1];
        ind1 = (ind1 + 1)% colors1.length;
    }


// Function to highlight the second visualization section in light orange
let ind2 = 0;
    function changeStyleVis2(){
      const colors2 = ["#FBBF77", 'white'];
        var element = document.getElementById("visualization2");
        element.style.backgroundColor = colors2[ind2];
        ind2 = (ind2 + 1)% colors2.length;
    }

// Function to hightlight the third visualization in pink
let ind3 = 0;
    function changeStyleVis3(){
      const colors3 = ['pink', 'white'];
        var element = document.getElementById("visualization3");
        element.style.backgroundColor = colors3[ind3];
        ind3 = (ind3 + 1)% colors3.length;
    }