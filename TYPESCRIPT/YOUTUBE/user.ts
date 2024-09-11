// informações da conta 
// informação do personagem
// um conjunto das ionformações tantanto da conta quanto do personagem
type AccountInfo = {
    id: number | string;
    name: string;
    email?: string; // a ? deixa o item opcional
};

const account: AccountInfo = {
    id: 123,
    name: "João",
};

type CharInfo = {
    nickname: string;
    level: number;
};      

const char: CharInfo = {
    nickname: "JoãoSilva",
    level: 100,
}

// intersection (uma interseccão de tipos)
type PlayerInfo = AccountInfo & CharInfo;   

const player: PlayerInfo = {
    id: 123,
    name: "João",
    nickname: "JoãoSilva",
    level: 100,
}