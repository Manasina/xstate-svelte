<script>
  import { onMount } from 'svelte'
  let data = {}
  onMount(async () => {
      const req = await fetch("http://localhost:8000")
      const response = await req.json()
      data = response
  })
</script>

<button class="btn">
  {JSON.stringify(data)}
</button>