var app = new Vue({
    el: "#app",
    data: {
        activated: false,
        message: "Welcome to VideoBox!",
        toAddress: "",
        walletAvailable: false,
        walletConnected: false
    },
    mounted() {
        this.activate();
    },
    methods: {
        activate() {
            this.activated = true;

            // Make sure a wallet is available.
            if(ethereum !== typeof(undefined))
            {
                console.log("ethereum found");

                this.walletAvailable = true;

                // Show the connect button if the wallet isn't connected.
                if(ethereum.isConnected() == false)
                {
                    console.log("ethereum not connected");
                }
                else
                {
                    console.log("ethereum connected");

                    this.walletConnected = true;

                    this.setupWeb3();
                }
            }
            else 
            {
                console.log("ethereum not found");
            }
        },
        connectWallet() {
            console.log("connecting to wallet");

            ethereum.request({ method: 'eth_requestAccounts' });

            this.setupWeb3();

            console.log("connected to wallet");
        },
        sendToAddress() {
            console.log(`sending to ${this.toAddress}`);

            let transaction = {
                from: ethereum.selectedAddress,
                to: this.toAddress,
                value: web3.utils.numberToHex(web3.utils.toWei("0.01"))
            };

            ethereum.request({ method: 'eth_sendTransaction', params: [transaction]});
        },
        setupWeb3() {
            console.log("web3 setup");

            web3 = new Web3(ethereum);
        }
    },
    computed: {
        connectWalletVisible() {
            return this.walletAvailable === false;
        },
        sendVisible() {
            return this.walletConnected === true;
        },
        walletStatusMessage() {
            let ret = "Available";

            if(this.walletAvailable !== true) {
                ret = "Not Available";
            }

            return ret;
        }
    }
});