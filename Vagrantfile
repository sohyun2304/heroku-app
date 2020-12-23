Vagrant.configure("2") do |config|
  # Node01
  config.vm.define:"node01" do |cfg|
    cfg.vm.box = "centos/7"
    cfg.vm.provider:virtualbox do |vb|
        vb.name="node01"
        vb.customize ["modifyvm", :id, "--cpus", 1]
        vb.customize ["modifyvm", :id, "--memory", 1024]
    end
    cfg.vm.host_name="node01"
    cfg.vm.network "public_network", ip: "192.168.56.11"
    cfg.vm.network "forwarded_port", guest: 22, host: 19211, auto_correct: false, id: "ssh"
  end

  # Node02
  config.vm.define:"node02" do |cfg|
    cfg.vm.box = "centos/7"
    cfg.vm.provider:virtualbox do |vb|
        vb.name="node02"
        vb.customize ["modifyvm", :id, "--cpus", 1]
        vb.customize ["modifyvm", :id, "--memory", 1024]
    end
    cfg.vm.host_name="node02"
    cfg.vm.network "public_network", ip: "192.168.56.12"
    cfg.vm.network "forwarded_port", guest: 22, host: 29211, auto_correct: false, id: "ssh"
  end
end