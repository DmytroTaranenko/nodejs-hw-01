import { writeContacts } from "../utils/writeContacts.js";


export const removeAllContacts = async () => {
    const deleteContacts = await writeContacts([])
    return deleteContacts;
};

removeAllContacts();
