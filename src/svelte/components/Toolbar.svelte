<script>
  import Button from './Button.svelte';

  let props = $props();  
</script>

<section class="toolbar">
  {#each props.buttons as button}
    <Button icon={button.icon} action={button.action}/>
  {/each}
</section>
