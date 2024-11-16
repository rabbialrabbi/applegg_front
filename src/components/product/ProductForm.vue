<script setup>
import { usePosStore } from '@/stores/pos';
import { ref, watch } from 'vue';

const emit = defineEmits(['closeProductForm'])
const props = defineProps(['product'])
const posStore = usePosStore();
const formData = ref({
  name: '',
  SKU: '',
  category_id:'',
  price: 0,
  initial_stock_quantity: 0
});

watch(
  () => props.product,
  (newVal) => {
    formData.value = newVal ? { ...newVal,initial_stock_quantity:newVal.current_stock_quantity } : { name: '', SKU: '', price: 0, initial_stock_quantity: 0 };
  },
  { immediate: true }
);

const saveProduct = () => {
  if (props.product) {
    posStore.updateProduct(props.product.product_id, formData.value);
  } else {
    posStore.createProduct(formData.value);
  }
  close();
};

const close = () => {
  emit('closeProductForm');
};
</script>
<template>

  <v-card>
    <v-card-title>
      {{ product ? 'Edit Product' : 'Add Product' }}
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="saveProduct">
        <v-text-field label="Product Name" v-model="formData.name" required></v-text-field>
        <v-text-field label="SKU" v-model="formData.SKU" required></v-text-field>
        <v-select
          v-model="formData.category_id"
          label="Category"
          :items="posStore.categories"
        ></v-select>
        <v-text-field label="Price" v-model="formData.price" type="number" required></v-text-field>
        <v-text-field label="Initial Stock" v-model="formData.current_stock_quantity" type="number" required></v-text-field>
        <v-card-actions>
          <v-btn color="primary" type="submit">Save</v-btn>
          <v-btn text @click="close">Cancel</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>


