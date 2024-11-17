<script setup>
let page = reactive({ title: 'Purchase Create' })
const breadcrumbs= [
  {
    title: 'Purchase',
    disabled: false,
    href: '#'
  },
  {
    title: 'Create',
    disabled: true,
    href: '#'
  }
]
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-card
        class="mx-auto"
      >
        <template v-slot:title>
          Purchase Create
        </template>

        <v-card-text class="pt-4">

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</template>
