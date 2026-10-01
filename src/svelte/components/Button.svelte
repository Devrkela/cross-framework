<script>
  import Icon from './Icon.svelte';

  let props = $props();
</script>

<button onclick={props.action}>
  <Icon url={props.icon}/>
</button>
