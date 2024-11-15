
<script setup>
  //
</script>

<template>
  <VApp>
  <VLayout class="rounded rounded-md">
    <VNavigationDrawer>
      <VList>
        <VListItem title="Navigation drawer"></VListItem>
      </VList>
    </VNavigationDrawer>

    <VAppBar title="Application bar"></VAppBar>

    <v-main class="" style="min-height: 300px;">
      <router-view />
    </v-main>
  </VLayout>
  </VApp>
</template>
