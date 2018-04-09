<template>
    <div>
        <h1>Customers Update</h1>
        <form v-on:submit="updateCustomer()">
            Name
            <input type="text" name="name" v-model="customer.name"/><br><br>
            Type
            <input type="text" name="type" v-model="customer.type"/><br><br>
            Age
            <input type="text" name="age" v-model="customer.age"/><br><br>

            <button type="submit">Save Customer</button>
        </form>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                customerId:null,
                customer: {
                    name: '',
                    type: '',
                    age: '',
                }
            }
        },
        mounted(){
          let app = this;
          let id = app.$route.params.id;
          app.customerId = id;
          axios.get('customers/'+ id)
              .then(function (response) {
                  app.customer = response.data;
              })
              .catch(function (response) {
                  alert('Data not loaded');
              })
        },
        methods: {
            updateCustomer() {
                event.preventDefault();
                var app = this;
                axios.patch('customers/'+ app.customerId, app.customer)
                    .then(function (response) {
                        app.$router.push({path:'/'});
                    })
                    .catch(function (res) {
                        alert('Data can not save in to database');
                    })
            }
        }
    }
</script>