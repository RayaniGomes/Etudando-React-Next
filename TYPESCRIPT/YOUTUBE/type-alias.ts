//type alias
type Uid = number | string

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}`);
}

type Platform = "Windows" | "Linux" | "MacOS"

function renderPlatform(platform: Platform) {
    return platform;
}

renderPlatform("Windows");
renderPlatform("Linux");
renderPlatform("MacOS");

logDetails(123, "Sapato");
logDetails("123", "Sapato");

logInfo(123, "João");
logInfo("123", "João");