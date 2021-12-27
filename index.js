axios
    .get('https://static-api.nkstatic.com/appdocs/11/dailyChallengesAdvanced/1221', {
        responseType: 'arraybuffer'
    })
    .then((res) => {
        //console.log(res.data);
        //console.log(new TextDecoder().decode(res.data));
        //console.log(decode(res.data));
        let d = decode(res.data);
        document.getElementById('para').innerText = JSON.stringify(JSON.parse(d), null, 4);
    });

function decode(s) {
    data = new Uint8Array(s);
    for (var i = 14; i < data.length; i++) {
        data[i] = data[i] - 21;
        data[i] = data[i] - ((i - 14) % 6);
    }
    return new TextDecoder().decode(data).substring(14);
}
