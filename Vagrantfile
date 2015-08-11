$script = <<SCRIPT

# Update everything
sudo apt-get update
sudo apt-get upgrade -y

# Install Node dependencies
sudo apt-get install build-essential libssl-dev -y

# Install Node.js 0.12
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.23.3/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 0.12
nvm alias default 0.12

# Install Express generator
npm install -g express-generator

# Install and start MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start

SCRIPT

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", inline: $script, privileged: false
  config.vm.network "forwarded_port", guest: 3000, host: 3000
end
