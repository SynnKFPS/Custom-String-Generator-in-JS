      const stringLength = 3;
      let randomStringBase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_';
      const  numberOfStrings =  10; // amount of strings

      const randomStrings = Array.apply(null, Array(numberOfStrings)).map((x) => {
        let randomString = "";
        for (var i = 0, n = randomStringBase.length; i < stringLength; ++i) {
          randomString += randomStringBase.charAt(Math.floor(Math.random() * n));
        }
        return randomString;
      });
      resultArea.value = randomStrings.join("\n"); 
// Specify result area with:     const resultArea = document.getElementById(**TEXTAREA TO SHOW THE RESULTS**);
