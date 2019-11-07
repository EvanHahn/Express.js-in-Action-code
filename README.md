This is the code from the book [*Express.js in Action*](https://manning.com/hahn/?a_aid=express-in-action&a_bid=fe3fcff7).

I've provided a [Vagrant](https://www.vagrantup.com/) virtual machine with Node (installed with [nvm](https://github.com/creationix/nvm)), the Express application generator, and MongoDB. To use it, install Vagrant, and then:

```sh
vagrant up   # to start the virtual machine
vagrant ssh  # to SSH into the virtual machine
cd /vagrant  # to get to the code
```

Note that many of the dependencies in this project are out of date, as the book is now several years old. Please upgrade to newer versions if using this code for real!
