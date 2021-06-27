<template>
	<h1>Ini Beranda...</h1>
	<p>Menuju ke halaman <router-link to='/about'>about</router-link></p>

	<teleport to='head'>
		<title>Beranda</title>
	</teleport>
</template>