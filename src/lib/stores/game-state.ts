import { derived, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type Answer from '$lib/types/answer';

class GameStateStore {
    constructor(
        public score: Writable<number> = writable(0),
        public answers: Writable<Answer[]> = writable([]),
        public gameData: Writable<
    ) { }

    get fullname() {
        // Use derived to access writable values and export as readonly
        return derived(
            [this.firstname, this.lastname],
            ([$firstName, $lastName]) => {
                return $firstName + " " + $lastName
            }
        )
    }
}

export const gameStateStore = new GameStateStore();
