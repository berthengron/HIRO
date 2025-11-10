import { describe, it, expect } from 'vitest';
import { getContacts } from '../../src/services/hubspot';

describe('HubSpot Service Integration Test', () => {
  it('getContacts should fetch contacts from the HubSpot API', async () => {
    // This is an integration test and requires a valid HubSpot API token.
    // Set the HUBSPOT-TOKEN environment variable or add it to dev-secrets.json.

    let contacts;
    let error;

    try {
      contacts = await getContacts();
    } catch (e) {
      error = e;
    }

    // Assert that no error was thrown
    expect(error).toBeUndefined();

    // Assert that the result is an array (even if it's empty)
    expect(Array.isArray(contacts)).toBe(true);

    if (contacts && contacts.length > 0) {
      console.log(`Successfully fetched ${contacts.length} contacts.`);
      const firstContact = contacts[0];
      if (firstContact.properties && firstContact.properties.firstname) {
        console.log(`The first name of the first contact is: ${firstContact.properties.firstname}`);
      } else {
        console.log('The first contact does not have a first name.');
      }
    } else {
      console.log('No contacts were fetched from HubSpot.');
    }
  }, 30000); // Increase timeout for network request
});
