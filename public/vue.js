var vue = new Vue({




    el: '#app',

    // This is the model.
    // Define properties and give them initial values.
    data: {
        active: 'index',
        players: data.players,
        match:data.matches,
        selectedPlayer:{},
        
    },

    // Functions we will be using.
    methods: {
        makeActive: function (item ) {
            // When a model is changed, the view will be automatically updated.
            this.active = item;
            
        }
    },




    computed: {

        selectClass() {

            switch (this.active) {
                case "index":
                    return "sfondo" // code block
                    break;
                case "info2":
                    return "sfondo2" // code block
                    break;

                case "next":

                    return "sfondo"
                    break;

                case "chat":
                    return "sfondo3"
                    break;
                default:
                    // code block
            }

        }

    }
});
