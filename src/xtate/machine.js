import { createMachine } from 'xstate';

export const toggleMachine =
	/** @xstate-layout N4IgpgJg5mDOIC5QQPZQHQENYBsxgAcBiAFQHkBxCgGQFFFQCVYBLAFxZQDsGQAPRAEYAHIPQB2AEwA2AKyTZABlEAWAJzCAzABoQATyGbh6NeM1rZm2eLkrZggL4PdqDJgDumANZhSlGvRIIEysHNy8AggiYlJyCsqC6lq6BghqiibpwiqCpoKyospOziBcKBBwvK5YuPgEvCHsnDxBkSqSKYhqkuiaIuIqwrLSwtLqOU4uaFiePg3MTeGtiJKmJjaWgquKkpLJ+l0q6KLCA0MjY2oTJa7zoc0RQsKdUcLFDkA */
	createMachine({
		id: 'dog',
		initial: 'asleep',
		states: {
			asleep: {
				on: {
					TOGGLE: {
						target: 'awake'
					}
				}
			},
			awake: {
				on: {
					TOGGLE: {
						target: 'asleep'
					}
				}
			}
		}
	});

export const authMachine =
	/** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgOgJ5wGIAZAeQHEBJAOUVAAcB7WAS3WYYDtaQAPRAWgDMAVgBs2UQEYA7NICcwgBzCATHOkrJAGhC5EkgCzYZk08rmLpABkFzJggL4OdaLNg4Ni5EgFUAKtyMLGyc3HwIklLYwlaGhgaGNtbSOnoIgkZqKlIqgrG2goqOTjoeEHDcrjj4sNjIEAC2zFxIIEGs7C2g4fxy4laKohkGcn2iOSm6ApKKitjSqkrxmgZWqiUgVXhw2KiwYABOgUwdoa09inLYRUOr6qaxmqnTM-N5onK2Bu8JG1s12AAxgAbZhgDjoY7BTphAR9bADW4jMYTZ4IfgGFTzayKKxraQGcySYR-DDVCqtdohLq8aYqKwIwbDUbjVFTdHZSTzb4jek2JYk5ybMnuBhQ040noyBlWT4qeUKEQxQxotTSbBqSQWUTWIZKQUuMni6mw9GFBlSWQKZRqp7soQZN7fUS5WWYrVOJxAA */
	createMachine({
		id: 'auth',
		initial: 'no',
		states: {
			yes: {
				initial: 'admin',
				states: {
					admin: {},
					user: {},
					client: {}
				},
				on: {
					LOGIN: {
						target: 'no'
					}
				}
			},
			no: {
				on: {
					LOGOUT: {
						target: 'yes'
					}
				}
			}
		}
	});
