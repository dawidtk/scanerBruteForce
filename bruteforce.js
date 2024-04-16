const { exec } = require('child_process');
const fs = require('fs');

function scanport(port, target) {
    // Your scanport function code here
}

function target_availability(target) {
    // Your target_availability function code here
}

function BruteForce(port, target, passlist) {
    // Your BruteForce function code here
}

function main() {
    const args = process.argv.slice(2);
    const passListFile = args[0];
    const target = args[1];

    const open_ports = [];

    if (target_availability(target)) {
        for (let port = 1; port <= 1024; port++) {
            const status = scanport(port, target);
            if (status) {
                open_ports.push(port);
            }
        }
    }

    if (open_ports.length > 0) {
        console.log(`Open ports on ${target}: ${open_ports.join(', ')}`);
    } else {
        console.log(`No open ports on ${target}.`);
    }
    console.log("Scan finished");

    if (open_ports.includes(22)) {
        console.log("Port 22 (SSH) is available.");
        const choice = prompt("Do you want to perform BruteForce on port 22? (Y/N): ").toLowerCase();
        if (choice === "y") {
            BruteForce(22, target, passListFile);
        } else {
            console.log("BruteForce not performed on port 22.");
        }
    }
}

main();
