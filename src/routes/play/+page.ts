import AnswerOption from '$lib/types/answer-option';
import type GameData from '$lib/types/game-data';

const gameData: GameData = {
    tweets: [
        {
            id: '1536608340612206593',
            name: 'Laurent Mosar',
            handle: 'LaurentMosar',
            createdAt: new Date(2021, 5, 13, 7, 32, 38),
            likes: 3726,
            retweets: 466,
            text: 'Eine Aktivistin, die ankündigt eine Pipeline in die Luft zu sprengen, ist eine Terroristin.'
        },
        {
            id: '1544788847850135554',
            name: 'Boris Reitschuster',
            handle: 'reitschuster',
            createdAt: new Date(2022, 7, 6, 11, 2, 0),
            likes: 8538,
            retweets: 1991,
            text: 'Olaf Scholz ist einer Aktuellen Stunde des Bundestags zur Wirtschaftslage in Deutschland ferngeblieben. Dafür kommt er zur Hochzeit von Lindner nach Sylt. Mehr braucht man über diesen Kanzler eigentlich nicht zu wissen.'
        },
        {
            id: '1366477599908757511',
            name: 'Laurent Mosar',
            handle: 'LaurentMosar',
            createdAt: new Date(2021, 2, 1, 19, 57, 2),
            likes: 798,
            retweets: 141,
            text: 'Clans kontrollieren ganze Viertel in Berlin und die Polizei kontrolliert das Verweilverbot.'
        },
        {
            id: '1257000585255157761',
            name: 'Laurent Mosar',
            handle: 'LaurentMosar',
            createdAt: new Date(2020, 4, 3, 17, 34, 28),
            likes: 331,
            retweets: 45,
            text: 'Heute ist Anne Will zu Gast bei Robert Habeck und es geht völlig überraschend um Corona.'
        },
        {
            id: '1556297655726313474',
            name: 'Boris Reitschuster',
            handle: 'reitschuster',
            createdAt: new Date(2022, 7, 7, 17, 14),
            likes: 1220,
            retweets: 329,
            text: 'Pervertierung des Rechtsstaates: Dass Polizisten um 6 Uhr früh wegen der Beleidigung eines Senators als „Pimmel“ die Lebensgefährtin und zwei kleine Kinder eines Twitter-Nutzes heimsuchten, war Unrecht, entscheid jetzt ein Gericht. Unrecht, das Alltag ist.'
        },
    ],
    answers: [
        { id: '1536608340612206593', answerOption: AnswerOption.MOSAR },
        { id: '1544788847850135554', answerOption: AnswerOption.NOT_MOSAR },
        { id: '1366477599908757511', answerOption: AnswerOption.MOSAR },
        { id: '1257000585255157761', answerOption: AnswerOption.MOSAR },
        { id: '1556297655726313474', answerOption: AnswerOption.NOT_MOSAR },
    ]
}

/** @type {import('../../../.svelte-kit/types/src/routes/play/$types').PageLoad} */
export function load() {
    return gameData;
}
