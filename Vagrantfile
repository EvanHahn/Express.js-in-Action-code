$script = <<SCRIPT
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.22.0/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 0.10
nvm alias default 0.10
SCRIPT

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.provision "shell", inline: $script, privileged: false

  config.vm.network "forwarded_port", guest: 3000, host: 3000

end
