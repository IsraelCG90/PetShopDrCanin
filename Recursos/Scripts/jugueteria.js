setTimeout(() => {

    const { createApp } = Vue
    let url = "https://mindhub-xj03.onrender.com/api/petshop"

    createApp({
        data() {
            return {
                data: [],
                filterToy: [],
                filtroCopia: [],
                filtrados: [],
                valueInputSearch: "",
                filtroTotal: [],
                valueCheck: [],
                mensajeBuscando: "",
                modalVisible: false,

            };
        },
        created() {
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    this.data = data
                    this.filterToy = this.data.filter((product) => product.categoria == "jugueteria")
                    this.filtroCopia = this.data.filter((product) => product.categoria == "jugueteria")
                    this.filtroTotal = this.filterToy

                }).catch(err => err)
        },

        methods: {
            eventosModal(id) {
                this.filtrados = this.filterToy.find((juguete) => juguete._id == id)
                this.data = this.filtroInput()
            },
            filtroCheck(valueCheck) {
                this.mensajeBuscando = "buscando"
                this.filtroTotal = this.filterToy.filter((juguete) => juguete.producto.includes(valueCheck.toLowerCase()) || juguete.descripcion.includes(valueCheck.toLowerCase()))
            },
            filtroBusqueda() {
                this.modalVisible = true;
                this.mensajeBuscando = "Buscando...";
                // setTimeout(() => {
                //     this.filtroTotal = this.filterToy.filter((juguete) => juguete.producto.toLowerCase().includes(this.valueInputSearch.toLowerCase()) || juguete.descripcion.toLowerCase().includes(this.valueInputSearch.toLowerCase()));

                // }, 1000);
                this.filtroTotal = this.filterToy.filter((juguete) => juguete.producto.toLowerCase().includes(this.valueInputSearch.toLowerCase())
                    || juguete.descripcion.toLowerCase().includes(this.valueInputSearch.toLowerCase()))
            },
            filtroTodos() {
                this.filtroTotal = this.filtroCopia
                console.log(this.filtroTotal)
            },
        },

        computed: {

        },

    }

    ).mount('#app')
}, 0)



