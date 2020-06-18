window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No Web3 Detected... using HTTP Provider')
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/5b5495ebc3bb41f98d7bf9abda4fca6c"));
    getH();
    getG();
    getS();
    getR();
    }
})

const promisify = (inner) =>
    new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    );


async function getH() {
    var address, contractAddress, contractABI, tokenContract, decimals, balance, name, adjustedBalance
    address = "0x0dD3991DAd9788CA3E1A630415d3b2CAf1060487"
    contractAddress = "0xb58e0bf63fbe4e5565ab719d3369058707ab6a02";
    contractABI = human_standard_token_abi

    tokenContract = web3.eth.contract(contractABI).at(contractAddress)

    decimals = promisify(cb => tokenContract.decimals(cb))
    balance = promisify(cb => tokenContract.balanceOf(address, cb))

    try {
        adjustedBalance = await balance / Math.pow(10, await decimals);
        adjustedName = await name;
        const h = document.querySelector("#h");
        h.innerHTML = "Hufflepuff <br>" + adjustedBalance + "</br>";
        
    } catch (error) {
        h.innerHTML = error;
    }
}

async function getG() {
    var address, contractAddress, contractABI, tokenContract, decimals, balance, name, symbol, adjustedBalance
    address = "0x651892F717e4A1664F5F04476b1935Fa9ca78138"
    contractAddress = "0xb58e0bf63fbe4e5565ab719d3369058707ab6a02";
    contractABI = human_standard_token_abi

    tokenContract = web3.eth.contract(contractABI).at(contractAddress)

    decimals = promisify(cb => tokenContract.decimals(cb))
    balance = promisify(cb => tokenContract.balanceOf(address, cb))

    try {
        adjustedBalance = await balance / Math.pow(10, await decimals);
        adjustedName = await name;
        const g = document.querySelector("#g");
        g.innerHTML = "Gryffindor <br>" + adjustedBalance + "</br>";
        
    } catch (error) {
        g.innerHTML = error;
    }
}

async function getS() {
    var address, contractAddress, contractABI, tokenContract, decimals, balance, name, symbol, adjustedBalance
    address = "0x7A6949237cF04b11a2fCf04A0267142C8d7951cF"
    contractAddress = "0xb58e0bf63fbe4e5565ab719d3369058707ab6a02";
    contractABI = human_standard_token_abi

    tokenContract = web3.eth.contract(contractABI).at(contractAddress)

    decimals = promisify(cb => tokenContract.decimals(cb))
    balance = promisify(cb => tokenContract.balanceOf(address, cb))

    try {
        adjustedBalance = await balance / Math.pow(10, await decimals);
        adjustedName = await name;
        const s = document.querySelector("#s");
        s.innerHTML = "Slytherin <br>" + adjustedBalance + "</br>";
        
    } catch (error) {
        s.innerHTML = error;
    }
}

async function getR() {
    var address, contractAddress, contractABI, tokenContract, decimals, balance, name, symbol, adjustedBalance
    address = "0xACdFC09bbFe426fFA8B262471d066b65a43335A4"
    contractAddress = "0xb58e0bf63fbe4e5565ab719d3369058707ab6a02";
    contractABI = human_standard_token_abi

    tokenContract = web3.eth.contract(contractABI).at(contractAddress)

    decimals = promisify(cb => tokenContract.decimals(cb))
    balance = promisify(cb => tokenContract.balanceOf(address, cb))

    try {
        adjustedBalance = await balance / Math.pow(10, await decimals);
        adjustedName = await name;
        const r = document.querySelector("#r");
        r.innerHTML = "Ravenclaw <br>" + adjustedBalance + "</br>";
        
    } catch (error) {
        r.innerHTML = error;
    }
}




