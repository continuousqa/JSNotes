/**
 Create a socket connection loop, used as a port scanner
 **/
const net = require('net');

function Scanner(host, port){
    const s = new net.Socket();
    s.setTimeout(2000, function() { s.destroy(); });
    this.host = host;
    this.port = port;
    s.connect(this.port, this.host, function () {
        console.log('Open: '+ port);
    });
    s.on('data', function(data){
        console.log(port +': ' +data);
        s.destroy();
    });
    s.on('error', function (e) {
        s.destroy();
    })
}

for(let p = 25000; p < 30000; p++){             // Fully scanned 64,000 ports in 30s on local laptop.
    let scan = new Scanner('localhost', p);
}

// function Range(){
//     this.begin = function () {
//         for(let p = 1; p < 64000; p++){             // Fully scanned 64,000 ports in 30s on local laptop.
//             let scan = new Scanner('localhost', p);
//         }
//     };
// }
//
// let r = new Range;
// r.begin()
