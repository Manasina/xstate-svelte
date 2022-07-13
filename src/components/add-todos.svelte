<script>
    
    import Todo from "../classes/todo"
    import Plus from "@krowten/svelte-heroicons/icons/PlusIcon.svelte"
    let input_value = ""
</script>
<div class="flex gap-3">

    <input type="text" class="input input-bordered w-full" bind:value={input_value}>
    <button class="btn btn-circle" on:click={Todo.add(input_value)}><Plus class="h-4 w-4 text-blue-500"/></button>
</div>