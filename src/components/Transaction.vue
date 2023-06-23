<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation v-model="value" active>
      <v-btn>Expense</v-btn>
      <v-btn>Income</v-btn>
      <v-btn>Report</v-btn>
    </v-bottom-navigation>
  </v-layout>
<v-container>
    <h1>Laporan</h1>
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th class="text-left">Type</th>
                <th class="text-left">Category</th>
                <th class="text-left">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="transaction in list_transaction" :key="transaction">
                <td>{{transaction.type}}</td>
                <td>{{transaction.category}}</td>
                <td>{{transaction.amount}}</td>
            </tr>
        </tbody>
    </v-table>
    v-b
</v-container>
</template>
<script>
import axios from 'axios'
export default {
    name: 'TransactionView',
    data: function () {
        return {
            list_transaction: [],
            type: "",
            category: "",
            amount: ""
        }
    },
    methods: {
        getData: function () {
            let token = {
                headers: { 
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
            axios.get("/transaction", token).then((resp) => {
                this.list_transaction = resp.data.data
            })
        }
    },
    mounted() {
        this.getData();
    }
}
</script>