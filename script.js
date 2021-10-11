/*
* THIS VERSION OF SCRIPT IS FOR <script> IN HTML
* CHECK OUT index.html FOR A BETTER EXAMPLE.
*/
      const stringLengthEl = document.getElementById("strLength"); // user textbox for input the length of each string
      const stringNumberEl = document.getElementById("strAmount"); // user textbox for input the amount of strings that will be generated
      const resultArea = document.getElementById("genedStrings"); // textarea for show the generated strings
      const generateButton = document.getElementById("genButton"); // button for generate the strings

      const clearTextarea = () => {
        resultArea.select();
        resultArea.value = "";
      }
      
      const generateRandomString = () => {
        const stringLength = stringLengthEl.value;
        let randomStringBase = '';
        const  numberOfStrings =  parseInt(stringNumberEl.value);
        
        if(!stringLength){
          alert('Please enter string length');
          return;
        }
        if(stringLength < 1 || stringLength > 1000){
          alert('Please enter string length only between 1 to 1000');
          return;
        }
      
        if(numberOfStrings < 1 || numberOfStrings > 1000){
          alert('Please enter numbr of strings only between 1 to 1000');
          return;
        }
      
        const randomStrings = Array.apply(null, Array(numberOfStrings)).map((x) => {
          let randomString = "";
          for (var i = 0, n = randomStringBase.length; i < stringLength; ++i) {
            randomString += randomStringBase.charAt(Math.floor(Math.random() * n));
          }
          return randomString;
        });
        resultArea.value = randomStrings.join("\n");
      }
      
      const copy = () => {
        resultArea.select();
        try {
          const successful = document.execCommand("copy");
          const msg = successful ? "Copied!" : `can't copy`;
          const copyBtn = document.getElementById("copyButton");
          alert(msg)
        } catch (err) {
          console.error("Fallback: Oops, unable to copy", err);
        }
      }
