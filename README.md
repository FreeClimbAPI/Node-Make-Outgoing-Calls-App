# Making Outgoing Calls Application

This project serves as a guide to help you build an application with FreeClimb. Specifically, the project will:

- Create an outgoing call to the user's phone number from the FreeClimb phone number
- Play a message for the user.

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the Making Outgoing Calls Application locally

1. Download and install [Node.js](https://nodejs.org)
2. Install yarn globally [Mac OS](https://yarnpkg.com/lang/en/docs/install/#mac-stable) | [Windows](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

3. Clone or download this repo locally.

4. Install the node packages necessary using command:

   ```bash
   yarn install
   ```

5. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID              | Account ID which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | AUTH_TOKEN              | Authentication Token which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                               |
   | FREECLIMB_PHONE_NUMBER | FreeClimb Phone Number associated with Making Outgoing Calls Application found under [My Numbers](https://www.freeclimb.com/dashboard/portal/numbers) in Dashboard (**E.164 format**) |
   | APPLICATION_ID       | Application ID associated with FreeClimb Making Outgoing Calls Application found under [Apps](https://www.freeclimb.com/dashboard/portal/applications) in Dashboard                   |

## Using the Making Outgoing Calls Application to Make Calls

1. Run the application using command:

   ```bash
   $ node index
   ```

2. Hit the `/sendCall` endpoint with the E.164 formatted phone number that should receive the call (`destination_phone_number`) in the body of the request.

   ```bash
   curl -XPOST http://YourHostedApp.com/sendCall -d '{"destination_phone_number":"+1XXXXXXXXXX"}' -H "Content-Type: application/json"
   ```

3. Expect a call from your FreeClimb phone number to be made to the phone number provided in the request, then the message created in the `/callConnect` should be played within the phone call.

## Getting Help

If you are experiencing difficulties, [contact support](https://freeclimb.com/support).
