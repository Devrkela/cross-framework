<script>
  let bold = $state(false);
  let italic = $state(false);
  let underline = $state(false);
  let color = $state(false);

  window["#store"].bold.addEventListener("change", function(e){
    bold = e.value;
  });

  window["#store"].italic.addEventListener("change", function(e){
    italic = e.value;
  });

  window["#store"].underline.addEventListener("change", function(e){
    underline = e.value;
  });

  window["#store"].color.addEventListener("change", function(e){
    color = e.value;
  });
</script>

<p bold={bold} italic={italic} underline={underline} color={color}>
  Hello world
</p>
