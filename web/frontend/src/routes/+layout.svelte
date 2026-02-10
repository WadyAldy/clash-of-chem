<script>
	import '../app.css';
</script>

<svelte:head>
	<meta property="og:title" content="Clash of Chem" />
	<meta
		property="og:description"
		content="Clash of Chem is a multiplayer online ogranic chemistry game that you can play with your friends!"
	/>
    <meta name="theme-color" content="#1e1e2e" />
</svelte:head>

<div class="app">
	<main>
		<slot />
	</main>
</div>
<script>
  import { onMount } from "svelte";
  import { initSocket } from "$lib/stores/socket";

  onMount(() => {
    initSocket("guest"); // later you can make this dynamic
  });
</script>

<slot />
