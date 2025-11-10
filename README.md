# HIRO Project

This is an Ionic project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installing

1. Clone the repository:
   ```sh
   git clone https://github.com/berthengron/HIRO.git
   ```
2. Navigate to the project directory:
   ```sh
   cd HIRO
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Running the Project

To run the project in development mode, use the following command. This will start a local development server.

```sh
npm run dev
```

## Building the Project

To create a production build of the project, run:

```sh
npm run build
```

This will compile the application and place the output in the `dist` directory.

## Build and Deployment

This project is configured with a continuous integration and deployment (CI/CD) pipeline using GitHub Actions.

When code is pushed to the `main` branch, the following steps are automatically executed:

1.  The application is built.
2.  A Docker image is created.
3.  The Docker image is pushed to Docker Hub to the `alihop/hiro` repository.

The image is tagged with:
- The short commit SHA
- The version number from `package.json`
- `latest`

## Integrations

### Hubspot

The app uses the official HubSpot SDK to access the API

The app (and access token) are configured 
   here in PROD: https://app-eu1.hubspot.com/private-apps/26138230/23762862 and
   here in HERO-TESTAPP: https://app-eu1.hubspot.com/private-apps/147233234/23767518 

They have scopes:

crm.objects.contacts.write
crm.objects.companies.write
crm.objects.companies.read
crm.objects.deals.read
crm.objects.deals.write
crm.objects.contacts.read

For dev, the access token can be placed in dev-secrets.json in root - this is not in git obvs, ask for a copy.  
THE KEY YOU USE IS THE ONLY DIFFERENCE BETWEEN TANKING LIVE AND DEV!