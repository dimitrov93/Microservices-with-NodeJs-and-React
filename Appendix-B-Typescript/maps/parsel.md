npx parcel index.html


In the upcoming lecture, we will be installing the Faker library. You may notice that the GitHub repository for Faker is empty or is displaying some confusing messaging. The library currently no longer exists and is not being maintained.

A community fork of Faker was made to save the project:

https://github.com/faker-js/faker

To use this library, you can install it by running:

npm install @faker-js/faker

You'll then need to update all of your imports:

import { faker } from "@faker-js/faker";

As of their v6 release, TS support is now native and does not require installing the @types declarations.

https://github.com/faker-js/faker#typescript-support





The @types/googlemaps library that is installed in the next video has been deprecated. Instead, we need to install a different library:

npm install @types/google.maps

Also, you will still see a TS error in your code editor:

Cannot find name 'google'.ts(2304)

As the very first line in the index.ts file, you will need to add a triple slash directive:

/// <reference types="@types/google.maps" />
You can read about this in the official docs here:

https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import