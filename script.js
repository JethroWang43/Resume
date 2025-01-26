let isPink = false; // Track the current state

        document.getElementById('colorChangeButton').addEventListener('click', function() {
            if (!isPink) {
                // Change to pink
                document.body.style.backgroundColor = '#FFC0CB'; // Change body background to pink
                document.querySelector('.container').style.backgroundColor = '#FFB6C1'; // Change container background to light pink
                document.querySelector('.left-section').style.backgroundColor = '#FFB6C1'; // Change left section background to light pink
                document.querySelector('.right-section').style.backgroundColor = '#FFB6C1'; // Change right section background to light pink
                document.querySelectorAll('h2, h3, p, li').forEach(function(element) {
                    element.style.color = '#000'; // Change text color to black for better contrast
                });
            } else {
                // Change back to original
                document.body.style.backgroundColor = '#F8f9fa'; // Original body background
                document.querySelector('.container').style.backgroundColor = '#fff'; // Original container background
                document.querySelector('.left-section').style.backgroundColor = '#d9f3f5'; // Original left section background
                document.querySelector('.right-section').style.backgroundColor = ''; // Original right section background
                document.querySelectorAll('h2, h3, p, li').forEach(function(element) {
                    element.style.color = ''; // Reset text color to original
                });
            }
            isPink = !isPink; // Toggle the state
        });