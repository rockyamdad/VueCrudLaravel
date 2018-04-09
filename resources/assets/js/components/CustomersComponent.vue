<template>
    <div>
        <h1>Customers List</h1>
        <router-link :to="{name: 'createCustomer'}" class="btn btn-success">Create new Customer</router-link>
        <br>
        <br>
        <table border="1" width="500px">
            <thead>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Type</b></td>
                    <td><b>Age</b></td>
                    <td><b>Action</b></td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="customer in customers">
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.type }}</td>
                    <td>{{ customer.age }}</td>
                    <td>
                        <router-link :to="{name:'editCustomer',params:{id:customer.id}}">Edit</router-link>
                        <a style="color:red" href="#"
                           class="btn btn-xs btn-danger"
                           v-on:click="deleteCustomer(customer.id, index)">
                            Delete
                        </a>
                    </td>
                </tr>
            </tbody>


        </table>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              customers:[]
          }
        },
        mounted(){

            var app = this;
            axios.get('customers')
                .then(function(response){
                    app.customers = response.data;
                })
                .catch(function (response) {
                    alert('Can not load data');
                });
        },
        methods: {
            deleteCustomer(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('customers/' + id)
                        .then(function (resp) {
                            app.customers.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete customer");
                        });
                }
            }
        }
    }
</script>