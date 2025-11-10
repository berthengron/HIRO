import { Client } from '@hubspot/api-client';
import * as fs from 'fs';
import * as path from 'path';

let accessToken = process.env['HUBSPOT-TOKEN'];

if (!accessToken) {
  try {
    const secretsPath = path.join(process.cwd(), 'dev-secrets.json');
    const secrets = JSON.parse(fs.readFileSync(secretsPath, 'utf8'));
    accessToken = secrets['HUBSPOT-TOKEN'];
  } catch (error) {
    console.error('Could not read HubSpot token from dev-secrets.json', error);
  }
}

const hubspotClient = new Client({ accessToken });

export const getContacts = async () => {
  try {
    const allContacts = await hubspotClient.crm.contacts.getAll();
    console.log(allContacts);
    return allContacts;
  } catch (e) {
    console.error('Error getting contacts from HubSpot', e);
    return [];
  }
};
