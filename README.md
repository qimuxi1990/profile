# Profile
## Description
This is a Profile Project for my own. It is still in development.
## Cartridge
The OpenShift `nodejs` cartridge documentation can be found at:

[http://openshift.github.io/documentation/oo_cartridge_guide.html#nodejs](http://openshift.github.io/documentation/oo_cartridge_guide.html#nodejs)

## Development Notes
### Storage
Remember to purchase storage, or a storage request forbidden error will show up when creating database associated.

### Source & Secret
Source Secret is required for private repo deployment.
#### SSH
This credential uses ssh private/public key pairs to pull repo, and is safe because it can be assigned to single repo by deploy key.
1. Create ssh key **without** passphrase (empty passphrase).
1. Add ssh **public** key to the deploy key of the repo on git source.
1. Create a Source Secret in OpenShift, with ssh **private** key. _Remember: Do not modify after browse and import._
1. Check link to builder account before create.
1. In build config (where source is defined), assign the secret to the souce.
1. SSH url will work. _Remember: Do not use HTTP url, Do not add ssh:// before SSH url._
#### Basic Auth
This credential uses username and password to pull repo, but is not safe because the auth is not only for the target repo.
1. Create a Source Secret in OpenShift, with basic auth: git source login information.
1. Check link to builder account before create.
1. In build config (where source is defined), assign the secret to the source.
1. HTTP url will work. SSH url not tested.

### Deployment
* Use Webhooks, set PayLoad URL, set Content type as application/json, and then leave Secret Blank. _For private repo, Secret field should be set._ On OpenShift side, rebuild and deployment will automatically take place.
* Use npm scripts.postinstall "npm install bower && bower install" to install bower component. Also use .bowerrc and bower.json to define bower install content.

### Routing
To host an OpenShift app at a specified url, the following steps should be taken:
1. Generate a default route for this app, naming internal-route for example.
1. Generate a specified route for this app, naming external-route for example.
1. Register the specified domain online (for example using [Name](https://www.name.com)).
1. Under DNS settings add a CNAME DNS with your internal-route url as source, and your external-route url as destination.

### Task Pending
* Try ssh Secret.

### Reference
[Migrating Your Applications From OpenShift 2 to 3](https://blog.openshift.com/migrating-your-applications-from-openshift-2-to-3/)
[LinkedIn Development API Full Profile](https://docs.microsoft.com/zh-cn/linkedin/shared/references/v2/profile/full-profile?context=linkedin/consumer/context)
