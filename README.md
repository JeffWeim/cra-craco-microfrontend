# CRA CRACO Mico-Frontend

This project is a Lerna monorepo made up of 3 packages for the purposes of demoing Create React App (CRA) + Create REact App Configuration Override (CRACO) + Module Federation:

1. `app1` - a CRA that is using CRACO. Only serves as a remote dependency.
2. `app2` - a CRA that is using CRACO. Only serves as a remote dependency.
3. `container` - The host application (or shell), that brings in the remotes of `app1` and `app2` and displays them.

The `container` application is deployed here: https://cra-craco-microfrontend-container.vercel.app/
