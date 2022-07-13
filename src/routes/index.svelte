<script>
  import Navbar from "../components/navbar.svelte";
  import UiTodos from "../components/ui-todos.svelte";
  import AddTodos from "../components/add-todos.svelte";
  
</script>
<Navbar />
<div class="w-[50%] m-auto flex flex-col-reverse gap-7">
  <UiTodos /> 
  <AddTodos />
</div>
