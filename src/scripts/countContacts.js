import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const amountContacts = await readContacts()
    return amountContacts.length
};

console.log(await countContacts());
