<template>
    <div>
        <h1>Customers Create</h1>
        <form v-on:submit="saveCustomer()">
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
                customer: {
                    name: '',
                    type: '',
                    age: '',
                }
            }
        },
        methods: {
            saveCustomer() {
                event.preventDefault();
                var app = this;
                axios.post('customers', app.customer)
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