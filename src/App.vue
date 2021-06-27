<template>
  <router-view></router-view>
  
  <teleport to='head'>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
  </teleport>
</template>

<style>
  * {
    font-family: Poppins;
  }
</style>