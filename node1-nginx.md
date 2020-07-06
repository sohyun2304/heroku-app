## /etc/yum.repos.d/nginx.repo 파일 생성 
```
sudo vi /etc/yum.repos.d/nginx.repo
```
```
[nginx] 
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

## nginx 설치
```
sudo yum install -y nginx
```

## 방화벽 실행, 포트 추가
```
sudo systemctl enable firewalld
sudo systemctl start firewalld
sudo firewall-cmd --permanent --zone=public --add-port=8080/tcp
sudo firewall-cmd --reload
sudo firewall-cmd --list-ports
```

## PORT 변경
```
sudo vi /etc/nginx/conf.d/default.conf (포트 변경)
sudo systemctl start nginx
sudo systemctl enable nginx
```
