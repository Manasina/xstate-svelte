<script>
  import { useMachine } from '@xstate/svelte';
  import {toggleMachine} from '../xtate/machine'
  import {authMachine} from "../xtate/machine"

  const { state, send } = useMachine(authMachine);

  console.log($state)
</script>

<button >
  how
</button>