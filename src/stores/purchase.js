import { defineStore } from 'pinia';
import api from '@/_helper/api'

export const usePurchaseStore = defineStore('purchase', {
  state: () => ({
    purchases: [],
    totalPurchaseItem: 0,
    errors:{},
  }),
  actions: {
    async getPurchaseList(params) {
      const response = await api.get('/purchases',params);
      let purchasesData = response.data
      this.purchases = purchasesData.data;
      this.totalPurchaseItem = purchasesData.meta.total;
    },
    async createPurchase(data) {
     await api.post('/purchases', data).then(res=>{
       this.getPurchaseList();
     }).catch(err=>{
        if(err.response.data.errors){
          this.showFormErrors(err.response.data.errors)
        }
      });
    },
    async updatePurchase(id, data) {
      await api.put(`/purchases/${id}`, data).then(res=>{
        this.getPurchaseList();
      }).catch(err=>{
        if(err.response.data.errors){
          this.showFormErrors(err.response.data.errors)
        }
      });;
    },
    async deletePurchase(id) {
      await api.delete(`/purchases/${id}`);
      this.getPurchaseList();
    },
    showFormErrors(resErrors){
      for(let key in resErrors){
        this.errors[key] = resErrors[key][0]
      }
    }
  }
});
