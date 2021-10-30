var app = new Vue({
    el: "#app",
    data: {
        activated: false,
        message: "Welcome to VideoBox!",
        walletAvailable: false
    },
    mounted() {
        this.activate();
    },
    methods: {
        activate() {
            this.activated = true;

            if(ethereum !== typeof(undefined))
            {
                this.walletAvailable = true;
            }

            console.log("activated");
        }
    },
    computed: {
        walletStatusMessage() {
            let ret = "Available";

            if(this.walletAvailable !== true) {
                ret = "Not Available";
            }

            return ret;
        }
    }
});