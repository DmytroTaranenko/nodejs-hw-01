import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts;
    console.log(contacts);
  } catch (error) {
    console.error(error);
  }
};
