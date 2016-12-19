Crowdsale
===

**this is the repository for the crowdsale application**.

###Build Information

- Travis: [![Travis](https://travis-ci.org/FundRequest/crowdsale.svg?branch=master)](https://travis-ci.org/FundRequest/crowdsale.svg?branch=master)
- Sputnik: [![Sputnik](https://sputnik.ci/conf/badge)](https://sputnik.ci/app#/builds/FundRequest/crowdsale)

###Architecture
The crowdsale application will be a simple spring boot architecture with thymeleaf to serve our page.  
Spring boot will be used as a self-serving web application with the sole purpose of providing a stable environment in a high-available environment.

In the frontend, we've chosen for NPM/Yarn as our package manager and webpack to build our resulting javascript assets.

The crowdsale page will be integrated as an Iframe on our web page, which will be accessible in any browser with Metamask.

###Your privacy is respected
We'll make this entire application public to provide proof that we won't keep track of any more data other than what already is public. You can audit this repository at any time.

###Security Audits
Next to our own security audits, we urge the community to also perform one on this and all repositories, especially the [contract repository](https://github.com/fundrequest/contracts).
