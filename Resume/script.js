let isPink = false; // Track the current state

        document.getElementById('colorChangeButton').addEventListener('click', function() {
            if (!isPink) {
                // Change to pink
                document.body.style.backgroundColor = '#FFC0CB'; 
                document.querySelector('.container').style.backgroundColor = '#FFB6C1'; 
                document.querySelector('.left-section').style.backgroundColor = '#C0C0C0'; 
                document.querySelector('.right-section').style.backgroundColor = '##AA336A';
                document.body.style.backgroundColor = '#ffffff';
                document.querySelectorAll('h2, h3, p, li').forEach(function(element) {
                    element.style.color = '#0000FF'; 
                }
            );
            } else {
                // Change back to original
                document.body.style.backgroundColor = '#F8f9fa';
                document.querySelector('.container').style.backgroundColor = '#fff'; 
                document.querySelector('.left-section').style.backgroundColor = '#d9f3f5'; 
                document.querySelector('.right-section').style.backgroundColor = ''; 
                document.querySelectorAll('h2, h3, p, li').forEach(function(element) {
                    element.style.color = ''; 
                });
            }
            isPink = !isPink; 
        });